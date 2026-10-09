const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegStatic = require('ffmpeg-static');
const ffprobeStatic = require('ffprobe-static');
const sharp = require('sharp');
const { createObjectCsvWriter } = require('csv-writer');

ffmpeg.setFfmpegPath(ffmpegStatic);
ffmpeg.setFfprobePath(ffprobeStatic.path);

const rootDir = process.cwd();
const scanDirs = ['app', 'pages', 'components', 'src', 'public', 'assets'];
const videoExts = new Set(['.mp4', '.webm', '.mov', '.mkv']);
const imageExts = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const codeExts = new Set(['.tsx', '.ts', '.jsx', '.js', '.html', '.css', '.scss', '.json']);

let allAssets = [];
let codeFiles = [];

// Helper to resolve routes
function getRouteFromPath(filePath) {
  const rel = path.relative(rootDir, filePath);
  if (rel.startsWith('app/')) {
    let route = rel.replace('app/', '/').replace('/page.tsx', '').replace('/page.jsx', '');
    if (route === 'page.tsx' || route === 'page.jsx' || route === '/') return '/';
    return route;
  } else if (rel.startsWith('pages/')) {
    return rel.replace('pages/', '/').replace(/\.tsx?$|\.jsx?$/, '');
  }
  return rel;
}

// Scanning directories recursively
function scanFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        scanFiles(fullPath);
      }
    } else {
      const ext = path.extname(file).toLowerCase();
      // Exclude backups, original backups, and temp files
      if (file.includes('.original.') || file.includes('.tmp') || file.includes('.backup') || file.includes('tmpPass') || file.includes('.original')) continue;

      const relPath = path.relative(rootDir, fullPath);
      let webPath = relPath;
      if (webPath.startsWith('public/')) {
        webPath = webPath.replace('public', '');
      } else if (!webPath.startsWith('/')) {
        webPath = '/' + webPath;
      }

      if (videoExts.has(ext)) {
        allAssets.push({
          path: fullPath,
          relPath,
          webPath,
          filename: file,
          ext,
          size: stat.size,
          type: 'video',
          usedIn: [],
          detectionMethod: 'none',
          missingReference: true
        });
      } else if (imageExts.has(ext)) {
        allAssets.push({
          path: fullPath,
          relPath,
          webPath,
          filename: file,
          ext,
          size: stat.size,
          type: 'image',
          usedIn: [],
          detectionMethod: 'none',
          missingReference: true
        });
      } else if (codeExts.has(ext)) {
        codeFiles.push(fullPath);
      }
    }
  }
}

// Fetch video metadata
function getVideoMetadata(filePath) {
  return new Promise((resolve) => {
    ffmpeg.ffprobe(filePath, (err, metadata) => {
      if (err || !metadata.streams || !metadata.format) return resolve(null);
      const videoStream = metadata.streams.find(s => s.codec_type === 'video');
      if (!videoStream) return resolve(null);

      let fps = 0;
      if (videoStream.avg_frame_rate) {
        const parts = videoStream.avg_frame_rate.split('/');
        if (parts.length === 2 && parseFloat(parts[1]) !== 0) {
          fps = parseFloat(parts[0]) / parseFloat(parts[1]);
        }
      }

      resolve({
        width: videoStream.width || 0,
        height: videoStream.height || 0,
        resolution: `${videoStream.width || 0}x${videoStream.height || 0}`,
        duration: parseFloat(metadata.format.duration || 0),
        bitrate: parseInt(metadata.format.bit_rate || videoStream.bit_rate || 0, 10),
        codec: videoStream.codec_name || 'Unknown',
        fps: Math.round(fps * 100) / 100
      });
    });
  });
}

// Video encoder implementation
function encodeVideo(input, output, preset, crf, scaleWidth) {
  return new Promise((resolve, reject) => {
    const proc = ffmpeg(input).videoCodec('libx264');
    const outputOpts = [
      `-preset ${preset}`,
      `-crf ${crf}`,
      '-maxrate 2500k',
      '-bufsize 5000k',
      '-b:v 0',
      '-movflags +faststart'
    ];
    if (scaleWidth) {
      outputOpts.push(`-vf scale=1280:-2`);
    }
    proc.outputOptions(outputOpts)
      .output(output)
      .on('end', () => resolve(true))
      .on('error', (err) => reject(err))
      .run();
  });
}

// Image encoder implementation
async function encodeImage(input, output, ext) {
  const sharpInput = sharp(input);
  if (ext === '.png') {
    await sharpInput.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(output);
  } else if (ext === '.jpg' || ext === '.jpeg') {
    await sharpInput.jpeg({ quality: 80, mozjpeg: true }).toFile(output);
  } else if (ext === '.webp') {
    await sharpInput.webp({ quality: 80 }).toFile(output);
  } else {
    throw new Error('Unsupported image format');
  }
}

// Rollback logic
function rollback() {
  console.log('\n[Rollback] Restoring original assets due to build failure...');
  let restored = 0;
  function scanAndRestore(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        scanAndRestore(fullPath);
      } else if (file.includes('.original.')) {
        const originalExt = path.extname(file);
        const targetName = file.replace('.original' + originalExt, originalExt);
        const targetPath = path.join(dir, targetName);
        if (fs.existsSync(targetPath)) {
          fs.unlinkSync(targetPath);
        }
        fs.renameSync(fullPath, targetPath);
        restored++;
        console.log(`[Rollback] Restored: ${targetName}`);
      }
    }
  }
  scanDirs.forEach(dir => scanAndRestore(path.join(rootDir, dir)));
  console.log(`[Rollback] Restored ${restored} original files.`);
}

async function main() {
  console.log('--- Phase 1: Scan & Dependency Mapping ---');
  scanDirs.forEach(dir => scanFiles(path.join(rootDir, dir)));

  console.log(`Found ${allAssets.length} asset files (images/videos).`);
  console.log(`Found ${codeFiles.length} code/project files.`);

  // Dependency mapping
  for (const codeFile of codeFiles) {
    const content = fs.readFileSync(codeFile, 'utf-8');
    const route = getRouteFromPath(codeFile);

    for (const asset of allAssets) {
      if (content.includes(asset.webPath) || content.includes(asset.relPath)) {
        asset.usedIn.push(route);
        asset.detectionMethod = 'static';
        asset.missingReference = false;
      } else if (content.includes(asset.filename)) {
        asset.usedIn.push(route);
        if (asset.detectionMethod === 'none') {
          asset.detectionMethod = 'grep';
        }
        asset.missingReference = false;
      } else {
        const baseName = path.basename(asset.filename, asset.ext);
        const regexStr = new RegExp(`\\$\\{[^}]*\\}.*${asset.ext}|${baseName}.*\\$\\{`, 'g');
        if (regexStr.test(content)) {
          asset.usedIn.push(route);
          if (asset.detectionMethod === 'none' || asset.detectionMethod === 'grep') {
            asset.detectionMethod = 'dynamic-reference';
          }
          asset.missingReference = false;
        }
      }
    }
  }

  allAssets.forEach(v => {
    v.usedIn = [...new Set(v.usedIn)];
  });

  // Generate video-usage-report.json
  const usageReport = allAssets.map(v => ({
    path: v.relPath,
    type: v.type,
    used_in: v.usedIn,
    detection_method: v.detectionMethod,
    missingReference: v.missingReference
  }));
  fs.writeFileSync('video-usage-report.json', JSON.stringify({ allAssets: usageReport }, null, 2));
  console.log('✔ video-usage-report.json generated.');

  console.log('\n--- Phase 2: Metadata Collection & Skip Check ---');
  const queue = [];
  const reports = [];

  for (const asset of allAssets) {
    if (asset.type === 'video') {
      const meta = await getVideoMetadata(asset.path);
      if (!meta) {
        console.warn(`✖ Failed to retrieve video metadata for: ${asset.relPath}`);
        continue;
      }

      // V9 skip logic: size < 2 MB AND bitrate < 1 Mbps AND duration < 5 seconds
      const cond1 = asset.size < 2 * 1024 * 1024;
      const cond2 = meta.bitrate < 1000000;
      const cond3 = meta.duration < 5;

      if (cond1 && cond2 && cond3) {
        console.log(`⏭ Skipping video ${asset.relPath} (Matched skip criteria)`);
        reports.push({
          path: asset.relPath,
          type: 'video',
          used_in: asset.usedIn.join(', ') || 'None',
          original_size: asset.size,
          optimized_size: asset.size,
          saved_mb: 0,
          saved_percent: 0,
          preset_used: 'none',
          scaling_used: 'false',
          decision: 'skipped',
          processing_time_ms: 0
        });
      } else {
        queue.push({ asset, meta });
      }
    } else {
      // Image skip logic: size < 50 KB
      if (asset.size < 50 * 1024) {
        console.log(`⏭ Skipping image ${asset.relPath} (size < 50 KB)`);
        reports.push({
          path: asset.relPath,
          type: 'image',
          used_in: asset.usedIn.join(', ') || 'None',
          original_size: asset.size,
          optimized_size: asset.size,
          saved_mb: 0,
          saved_percent: 0,
          preset_used: 'none',
          scaling_used: 'false',
          decision: 'skipped',
          processing_time_ms: 0
        });
      } else {
        queue.push({ asset });
      }
    }
  }

  console.log(`\nQueue holds ${queue.length} asset(s) for encoding.`);

  console.log('\n--- Phase 3: Encoding & Validation ---');
  const largeQueue = queue.filter(item => item.asset.size > 25 * 1024 * 1024);
  const smallQueue = queue.filter(item => item.asset.size <= 25 * 1024 * 1024);

  const cpuCores = os.cpus().length;
  const maxWorkers = Math.max(1, Math.min(2, Math.floor(cpuCores / 2)));
  console.log(`Workers Pool Limit: ${maxWorkers} (CPUs: ${cpuCores})`);

  async function runProcess(item) {
    const { asset, meta } = item;
    const startTime = Date.now();
    const tempPath = asset.path + `.tmp` + asset.ext;

    try {
      if (asset.type === 'video') {
        const shouldScale = meta.width >= 1920 && meta.bitrate > 3000000;
        let preset = 'fast';
        let crf = 29;
        const mbps = meta.bitrate / 1000000;

        if (mbps > 6) {
          preset = 'slow';
          crf = 27;
        } else if (mbps >= 2) {
          preset = 'medium';
          crf = 28;
        }

        console.log(`[Encoding Video] Start: ${asset.relPath} (preset: ${preset}, crf: ${crf}, scale: ${shouldScale})`);
        await encodeVideo(asset.path, tempPath, preset, crf, shouldScale);
        const elapsed = Date.now() - startTime;

        if (!fs.existsSync(tempPath)) throw new Error('Output file does not exist');
        const optSize = fs.statSync(tempPath).size;
        const optMeta = await getVideoMetadata(tempPath);
        if (!optMeta) throw new Error('Failed to read output video metadata');

        const durDiff = Math.abs(optMeta.duration - meta.duration);
        const sameDur = durDiff <= 0.1;
        const sizeReduction = asset.size - optSize;
        const savedPercent = (sizeReduction / asset.size) * 100;
        const minSavingsMet = savedPercent >= 5;
        const sizeLimitMet = optSize <= asset.size * 1.05;

        if (!sameDur) throw new Error(`Duration variance exceeded (Diff: ${durDiff.toFixed(3)}s)`);
        if (!minSavingsMet) throw new Error(`Insufficient savings: saved only ${savedPercent.toFixed(2)}% (required: >= 5%)`);
        if (!sizeLimitMet) throw new Error(`Size exceeds limit`);

        // Success
        const backupPath = asset.path.replace(asset.ext, `.original${asset.ext}`);
        if (!fs.existsSync(backupPath)) fs.renameSync(asset.path, backupPath);
        if (fs.existsSync(asset.path)) fs.unlinkSync(asset.path);
        fs.renameSync(tempPath, asset.path);

        console.log(`[Success Video] Optimized ${asset.relPath} by ${savedPercent.toFixed(2)}%`);
        reports.push({
          path: asset.relPath,
          type: 'video',
          used_in: asset.usedIn.join(', ') || 'None',
          original_size: asset.size,
          optimized_size: optSize,
          saved_mb: sizeReduction / (1024 * 1024),
          saved_percent: savedPercent,
          preset_used: preset,
          scaling_used: shouldScale ? 'true' : 'false',
          decision: 'optimized',
          processing_time_ms: elapsed
        });

      } else {
        // Image processing
        console.log(`[Compressing Image] Start: ${asset.relPath} (${(asset.size/1024).toFixed(1)} KB)`);
        await encodeImage(asset.path, tempPath, asset.ext);
        const elapsed = Date.now() - startTime;

        if (!fs.existsSync(tempPath)) throw new Error('Output image does not exist');
        const optSize = fs.statSync(tempPath).size;
        const sizeReduction = asset.size - optSize;
        const savedPercent = (sizeReduction / asset.size) * 100;
        const minSavingsMet = savedPercent >= 5;
        const sizeLimitMet = optSize <= asset.size * 1.05;

        if (!minSavingsMet) throw new Error(`Insufficient savings: saved only ${savedPercent.toFixed(2)}% (required: >= 5%)`);
        if (!sizeLimitMet) throw new Error(`Size exceeds limit`);

        // Success
        const backupPath = asset.path.replace(asset.ext, `.original${asset.ext}`);
        if (!fs.existsSync(backupPath)) fs.renameSync(asset.path, backupPath);
        if (fs.existsSync(asset.path)) fs.unlinkSync(asset.path);
        fs.renameSync(tempPath, asset.path);

        console.log(`[Success Image] Optimized ${asset.relPath} by ${savedPercent.toFixed(2)}%`);
        reports.push({
          path: asset.relPath,
          type: 'image',
          used_in: asset.usedIn.join(', ') || 'None',
          original_size: asset.size,
          optimized_size: optSize,
          saved_mb: sizeReduction / (1024 * 1024),
          saved_percent: savedPercent,
          preset_used: 'sharp-default',
          scaling_used: 'false',
          decision: 'optimized',
          processing_time_ms: elapsed
        });
      }

    } catch (err) {
      console.warn(`✖ Rejected asset optimization for ${asset.relPath}: ${err.message}`);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      reports.push({
        path: asset.relPath,
        type: asset.type,
        used_in: asset.usedIn.join(', ') || 'None',
        original_size: asset.size,
        optimized_size: asset.size,
        saved_mb: 0,
        saved_percent: 0,
        preset_used: 'none',
        scaling_used: 'false',
        decision: 'not optimizable',
        processing_time_ms: Date.now() - startTime
      });
    }
  }

  // 1. Process small files in parallel
  console.log(`\nProcessing small files (<= 25MB) in parallel...`);
  const smallWorkers = [];
  let index = 0;
  async function worker() {
    while (index < smallQueue.length) {
      const currentIdx = index++;
      await runProcess(smallQueue[currentIdx]);
    }
  }
  for (let i = 0; i < maxWorkers; i++) {
    smallWorkers.push(worker());
  }
  await Promise.all(smallWorkers);

  // 2. Process large files sequentially
  console.log(`\nProcessing large files (> 25MB) sequentially...`);
  for (const largeItem of largeQueue) {
    await runProcess(largeItem);
  }

  console.log('\n--- Phase 9: Build Verification ---');
  try {
    console.log('Running Next.js production build check...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✔ Build succeeded. Committing optimization.');
  } catch (buildErr) {
    console.error(`✖ Build failed! Initiating safety rollback... Error: ${buildErr.message}`);
    rollback();
    reports.forEach(r => {
      if (r.decision === 'optimized') {
        r.decision = 'not optimizable';
        r.optimized_size = r.original_size;
        r.saved_mb = 0;
        r.saved_percent = 0;
      }
    });
  }

  // Sort reports by highest savings first
  reports.sort((a, b) => b.saved_mb - a.saved_mb);

  console.log('\n--- Phase 8: Generating Reports ---');
  
  // JSON
  fs.writeFileSync('video-optimization-report.json', JSON.stringify(reports, null, 2));

  // CSV
  const csvWriter = createObjectCsvWriter({
    path: 'video-optimization-report.csv',
    header: [
      { id: 'path', title: 'path' },
      { id: 'type', title: 'type' },
      { id: 'used_in', title: 'used_in' },
      { id: 'original_size', title: 'original_size' },
      { id: 'optimized_size', title: 'optimized_size' },
      { id: 'saved_mb', title: 'saved_mb' },
      { id: 'saved_percent', title: 'saved_percent' },
      { id: 'preset_used', title: 'preset_used' },
      { id: 'scaling_used', title: 'scaling_used' },
      { id: 'decision', title: 'decision' },
      { id: 'processing_time_ms', title: 'processing_time_ms' }
    ]
  });
  await csvWriter.writeRecords(reports);

  // MD Summary
  let totalSaved = 0;
  let md = `# Asset Optimization Summary (V9.1)\n\n`;
  md += `| Asset Name | Original Size | Optimized Size | Saved Space | Saved % |\n`;
  md += `| :--- | :--- | :--- | :--- | :--- |\n`;

  for (const r of reports) {
    const assetName = path.basename(r.path);
    const origMB = r.original_size / (1024 * 1024);
    const optMB = r.optimized_size / (1024 * 1024);
    md += `| ${assetName} | ${origMB.toFixed(2)} MB | ${optMB.toFixed(2)} MB | ${r.saved_mb.toFixed(2)} MB | ${r.saved_percent.toFixed(2)}% |\n`;
    totalSaved += r.saved_mb;
  }
  md += `\n### Total Space Saved: **${totalSaved.toFixed(2)} MB**\n`;
  fs.writeFileSync('video-summary.md', md);

  console.log(`\n✔ Process completed! Total Space Saved: ${totalSaved.toFixed(2)} MB. Reports saved.`);
}

main().catch(e => {
  console.error('Fatal error in optimizer main:', e);
});
