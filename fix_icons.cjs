const fs = require('fs');
const path = require('path');

const replacementMap = {
  'Settings2': 'Settings',
  'Medal': 'EmojiEvents',
  'Award': 'WorkspacePremium',
  'Target': 'GpsFixed',
  'MoreHorizontal': 'MoreHoriz',
  'ListMusic': 'QueueMusic',
  'ShieldAlert': 'SecurityUpdateWarning',
  'CheckCircle2': 'CheckCircleOutline',
  'ErrorOutline': 'ErrorOutline', // Already exists, but mapped to AlertCircle previously? Wait, ErrorOutline was mapped.
  'Loader2': 'Autorenew',
  'Share2': 'Share',
  'DollarSign': 'AttachMoney',
  'HardDriveDownload': 'CloudDownload',
  'Disc3': 'Album',
  'File': 'InsertDriveFile'
};

function fixMissingIcons(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  // Fix specific TS missing module errors
  for (const [missing, replacement] of Object.entries(replacementMap)) {
    if (content.includes(`@mui/icons-material/${missing}`)) {
       content = content.replace(new RegExp(`@mui/icons-material/${missing}`, 'g'), `@mui/icons-material/${replacement}`);
       content = content.replace(new RegExp(`<${missing}Icon`, 'g'), `<${replacement}Icon`);
       content = content.replace(new RegExp(`${missing}Icon`, 'g'), `${replacement}Icon`);
       changed = true;
    }
  }
  
  // Fix duplicate identifiers (lazy fix)
  if (content.includes('import SaveIcon from') && content.match(/import SaveIcon from/g).length > 1) {
    // Remove all but first import
    let matches = 0;
    content = content.replace(/import SaveIcon from '@mui\/icons-material\/Save';\n?/g, (match) => {
       matches++;
       return matches === 1 ? match : '';
    });
    changed = true;
  }
  
  if (content.match(/import MemoryIcon from/g) && content.match(/import MemoryIcon from/g).length > 1) {
    let matches = 0;
    content = content.replace(/import MemoryIcon from '@mui\/icons-material\/Memory';\n?/g, (match) => {
       matches++;
       return matches === 1 ? match : '';
    });
    changed = true;
  }

  // Fix size prop in NotesPanel
  if (content.includes('size={')) {
    content = content.replace(/size=\{[0-9]+\}/g, (match) => {
       return ''; // Just remove it, MUI handles sizing with fontSize or in className
    });
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
  }
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      fixMissingIcons(fullPath);
    }
  }
}

traverse(path.join(__dirname, 'src'));
console.log('Done fixing icons');
