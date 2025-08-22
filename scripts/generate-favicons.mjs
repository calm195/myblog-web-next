/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-22 16:33:47
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-22 16:41:23
 * @Description: to be added
 */
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const folder = path.resolve('public', 'static', 'favicons');
const jobs = [
  { svg: 'android-chrome-192x192.svg', out: 'android-chrome-192x192.png', size: 192 },
  { svg: 'android-chrome-512x512.svg', out: 'android-chrome-512x512.png', size: 512 },
  { svg: 'apple-touch-icon.svg', out: 'apple-touch-icon.png', size: 180 },
  { svg: 'favicon-16x16.svg', out: 'favicon-16x16.png', size: 16 },
  { svg: 'favicon-32x32.svg', out: 'favicon-32x32.png', size: 32 },
  { svg: 'mstile-150x150.svg', out: 'mstile-150x150.png', size: 150 }
];

async function run() {
  try {
    await fs.access(folder);
  } catch (e) {
    console.error('Favicons folder not found:', folder);
    console.error('err:', e.message);
    process.exit(1);
  }

  for (const j of jobs) {
    const svgPath = path.join(folder, j.svg);
    const outPath = path.join(folder, j.out);
    try {
      const svg = await fs.readFile(svgPath);
      await sharp(svg)
        .resize(j.size, j.size, { fit: 'cover' })
        .png()
        .toFile(outPath);
      console.log('Generated', outPath);
    } catch (err) {
      console.error('Failed to generate', outPath, err.message);
      process.exitCode = 2;
    }
  }
}

run();
