import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'public/assets');
const files = fs.readdirSync(assetsDir);

async function convertImages() {
  console.log('Starting image conversion to WebP...\n');

  for (const file of files) {
    if (file.endsWith('.png')) {
      const inputPath = path.join(assetsDir, file);
      const outputPath = path.join(assetsDir, file.replace('.png', '.webp'));

      try {
        const stats = fs.statSync(inputPath);
        const originalSize = (stats.size / 1024 / 1024).toFixed(2);

        await sharp(inputPath)
          .webp({ quality: 85 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const newSize = (newStats.size / 1024 / 1024).toFixed(2);
        const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

        console.log(`✓ ${file}`);
        console.log(`  ${originalSize}MB → ${newSize}MB (${reduction}% reduction)\n`);
      } catch (error) {
        console.error(`✗ Error converting ${file}:`, error.message);
      }
    }
  }

  console.log('Conversion complete!');
}

convertImages();
