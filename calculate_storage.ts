import fs from 'fs';
import path from 'path';

function getDirSize(dirPath: string): number {
  let size = 0;
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next' && file !== 'dist') {
        size += getDirSize(filePath);
      }
    } else {
      size += stats.size;
    }
  }
  return size;
}

const totalSize = getDirSize(process.cwd());
console.log(`TOTAL_SIZE_BYTES:${totalSize}`);
console.log(`TOTAL_SIZE_MB:${(totalSize / (1024 * 1024)).toFixed(2)}`);
console.log(`TOTAL_SIZE_GB:${(totalSize / (1024 * 1024 * 1024)).toFixed(4)}`);
