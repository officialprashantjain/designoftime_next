# Enterprise Asset Optimization System

This repository contains a production-ready, highly efficient asset optimization script designed for Next.js and other large-scale JavaScript applications. It utilizes multi-threading to process hundreds of media files simultaneously, effectively compressing both images and videos to radically improve web performance.

## Features
- **Multi-threaded Image Compression:** Uses `sharp` and `p-limit` for ultra-fast, concurrent image processing.
- **Video Optimization:** Uses `fluent-ffmpeg` to apply H.264 CRF compression and streaming fast-starts.
- **Automatic Resume:** Skips already optimized files and backups to save CPU cycles on subsequent runs.
- **Comprehensive Reporting:** Automatically generates `JSON` and `CSV` reports detailing pre/post file sizes, resolution, formats, and percentage saved.
- **Drop-in Reusability:** Configurable via a simple `asset.config.js` file at the root.

## Installation

Ensure dependencies are installed:
```bash
npm install
```

## Configuration
Edit `asset.config.js` in the root of the project to tweak performance.

```js
module.exports = {
  assetsPaths: ['./assets', './public/assets'], // Target directories
  backupOriginals: true, // Keep originals as `filename.original.ext`
  concurrency: 4, // Concurrent files being processed
  reportsDir: './optimization-reports', // Destination for CSV/JSON reports
  
  imageOptions: {
    quality: 80,
    maxWidth: 1920, // Optional down-scaling
    convertToWebp: false, // Convert all to WebP if true
    mozjpeg: true
  },
  
  videoOptions: {
    crf: 28, // Constant Rate Factor (lower = better quality, larger size)
    preset: 'medium',
    removeAudio: true, // Great for hero backgrounds
    codec: 'libx264',
    faststart: true // Enables immediate browser streaming
  }
};
```

## Usage

Run the optimization script via npm:

```bash
npm run optimize
```

A progress bar will display in your terminal, and once completed, a summary will be output:

```
Total Files Processed: 261
Original Size: 390.30 MB
Optimized Size: 70.20 MB
Total Saved: 320.10 MB (82.01%)
```

Check the `./optimization-reports` folder for the detailed CSV and JSON breakdown of every file processed.

## Architecture

1. **`ffmpeg-static` / `ffprobe-static`:** Included directly in the project so you do not need to install FFmpeg globally on your system or server.
2. **`sharp`:** Libvips-based processor that is significantly faster and more memory-efficient than Imagick or `imagemin`.
3. **Atomic Operations:** The script writes to a temporary file (`.tmp.ext`) before renaming. This ensures that if the script is terminated unexpectedly, files will never be corrupted.
4. **Size Validation:** If an optimized file somehow results in a larger file size than the original, it is discarded, and the original is retained.
