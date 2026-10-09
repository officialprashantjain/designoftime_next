const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const scanDirs = ['app', 'pages', 'components', 'src', 'public', 'assets'];

let restored = 0;
function scanAndRestore(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next') {
        scanAndRestore(fullPath);
      }
    } else if (file.includes('.original.')) {
      const originalExt = path.extname(file);
      const targetName = file.replace('.original' + originalExt, originalExt);
      const targetPath = path.join(dir, targetName);
      if (fs.existsSync(targetPath)) {
        fs.unlinkSync(targetPath); // remove the optimized one
      }
      fs.renameSync(fullPath, targetPath); // rename .original back
      restored++;
      console.log(`[Rollback] Restored: ${targetPath}`);
    }
  }
}

scanDirs.forEach(dir => scanAndRestore(path.join(rootDir, dir)));
console.log(`[Rollback] Restored ${restored} original files.`);
