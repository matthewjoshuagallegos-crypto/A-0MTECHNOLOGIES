
import fs from 'fs';
const content = fs.readFileSync('src/A0M_CORE_V2026_FINAL_SECURED_APP.tsx', 'utf8');
const keys = content.match(/key="[^"]*"/g) || [];
const counts = {};
keys.forEach(k => {
  counts[k] = (counts[k] || 0) + 1;
});
Object.keys(counts).forEach(k => {
  if (counts[k] > 1) {
    console.log(`${k}: ${counts[k]}`);
  }
});
