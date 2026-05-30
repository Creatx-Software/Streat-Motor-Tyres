import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'public/assets');

// Target the largest images that need more aggressive compression
const largeImages = [
  'HeroVehicle.webp',
  'ServiceBg.webp',
  'Tyre Diagram.webp',
  'FormBg.webp',
  'Balancing.webp',
  'Repair.webp',
  'Map.webp',
  'gallery1.webp',
  'gallery2.webp',
  'gallery3.webp',
  'gallery4.webp',
  'gallery5.webp'
];

async function optimizeImages() {
  console.log('Starting aggressive image optimization...\n');

  for (const filename of largeImages) {
    const filePath = path.join(assetsDir, filename);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${filename} not found, skipping...`);
      continue;
    }

    try {
      const stats = fs.statSync(filePath);
      const originalSize = (stats.size / 1024).toFixed(2);

      // Create a backup
      const backupPath = path.join(assetsDir, filename + '.backup');
      if (!fs.existsSync(backupPath)) {
        fs.copyFileSync(filePath, backupPath);
      }

      // More aggressive compression
      await sharp(filePath)
        .webp({
          quality: 70,  // Lower quality for smaller size
          effort: 6     // Higher effort for better compression
        })
        .toFile(filePath + '.tmp');

      // Replace original
      fs.unlinkSync(filePath);
      fs.renameSync(filePath + '.tmp', filePath);

      const newStats = fs.statSync(filePath);
      const newSize = (newStats.size / 1024).toFixed(2);
      const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

      console.log(`✓ ${filename}`);
      console.log(`  ${originalSize}KB → ${newSize}KB (${reduction}% reduction)\n`);
    } catch (error) {
      console.error(`✗ Error optimizing ${filename}:`, error.message);
    }
  }

  console.log('Optimization complete!');
  console.log('Note: Backups saved with .backup extension');
}

optimizeImages();
