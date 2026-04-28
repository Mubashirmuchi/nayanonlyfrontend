import sharp from 'sharp';
import { readdirSync, statSync, renameSync } from 'fs';
import { join, extname, basename } from 'path';

const publicDir = './public';
const exts = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'];

const files = readdirSync(publicDir).filter(f => exts.includes(extname(f)));

for (const file of files) {
  const input = join(publicDir, file);
  const outName = basename(file, extname(file)) + '.webp';
  const output = join(publicDir, outName);

  const before = statSync(input).size;
  await sharp(input).webp({ quality: 80 }).toFile(output);
  const after = statSync(output).size;

  console.log(`${file} → ${outName}  ${(before/1024/1024).toFixed(1)}MB → ${(after/1024/1024).toFixed(1)}MB`);
}
