/**
 * Enterprise Asset Optimization Configuration
 * This configuration allows you to fine-tune image and video optimization across environments.
 */
module.exports = {
  // Array of directories to scan for assets
  assetsPaths: [
    './assets',
    './public/assets'
  ],

  // Whether to backup original files before optimizing
  // When true, original files will be saved as `filename.original.ext`
  backupOriginals: true,

  // Maximum number of files to process simultaneously.
  // We recommend limiting this to your CPU core count (e.g. 4-8) to avoid memory crashes.
  concurrency: 4,

  // Path to save the optimization reports (CSV and JSON)
  reportsDir: './optimization-reports',

  // Image Optimization Options (powered by sharp)
  imageOptions: {
    // Quality parameter for JPEG, WEBP, AVIF (0-100)
    quality: 80,
    
    // Resize parameters. If set, large images will be scaled down proportionally.
    // Set to null to preserve original dimensions exactly.
    maxWidth: 1920, 
    
    // Convert all images to a specific format? Options: null, 'webp', 'avif'
    // If null, it optimizes them in their current format (except gifs to mp4/webp).
    convertToWebp: false, 

    // JPEG specific
    mozjpeg: true,

    // WebP specific
    webp: {
      effort: 6, // 0-6 (higher is better compression, slower)
      smartSubsample: true
    },

    // PNG specific
    png: {
      compressionLevel: 9, // 0-9
      palette: true,       // Use pngquant palette-based compression
      colors: 256
    }
  },

  // Video Optimization Options (powered by FFmpeg)
  videoOptions: {
    // Constant Rate Factor (CRF) - lower means better quality, higher means smaller size.
    // 23-28 is a good range for web video.
    crf: 28,

    // Preset for encoding speed vs compression ratio
    // Options: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow
    preset: 'medium',

    // Max resolution scale (e.g., scale to max 1920x1080 while maintaining aspect ratio)
    // Set to null to preserve original resolution.
    maxResolution: '?x1080', 

    // Remove audio track from videos? (Useful for hero backgrounds)
    removeAudio: true,

    // Codec to use. 'libx264' has the highest compatibility.
    // You could also use 'libx265' for better compression but less broad support.
    codec: 'libx264',
    
    // Apply 'faststart' for immediate streaming on web
    faststart: true
  }
};
