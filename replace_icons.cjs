const fs = require('fs');
const path = require('path');

const iconMap = {
  'Folder': 'Folder',
  'FileText': 'InsertDriveFile',
  'ChevronRight': 'ChevronRight',
  'ChevronDown': 'ExpandMore',
  'Terminal': 'Terminal',
  'Save': 'Save',
  'Shield': 'Security',
  'Cpu': 'Memory',
  'Map': 'Map',
  'Database': 'Storage',
  'Zap': 'Bolt',
  'Rocket': 'RocketLaunch',
  'ShoppingCart': 'ShoppingCart',
  'MessageSquare': 'ChatBubble',
  'Trophy': 'EmojiEvents',
  'Music': 'MusicNote',
  'Radio': 'Radio',
  'Settings': 'Settings',
  'Power': 'PowerSettingsNew',
  'Activity': 'ShowChart',
  'Globe': 'Public',
  'HardDrive': 'Save',
  'Lock': 'Lock',
  'Wifi': 'Wifi',
  'Gamepad2': 'Gamepad',
  'Coins': 'MonetizationOn',
  'Layers': 'Layers',
  'DownloadCloud': 'CloudDownload',
  'Store': 'Store',
  'Server': 'Dns',
  'Check': 'Check',
  'PackageIcon': 'Inventory2',
  'CodeIcon': 'Code',
  'TerminalIcon': 'Terminal',
  'Search': 'Search',
  'Eye': 'Visibility',
  'XCircle': 'Cancel',
  'Trash2': 'Delete',
  'Plus': 'Add',
  'Play': 'PlayArrow',
  'Pause': 'Pause',
  'SkipBack': 'SkipPrevious',
  'SkipForward': 'SkipNext',
  'Heart': 'Favorite',
  'Volume2': 'VolumeUp',
  'Box': 'Inventory',
  'ChevronLeft': 'ChevronLeft',
  'ChevronUp': 'ExpandLess',
  'MonitorPlay': 'Monitor',
  'UploadCloud': 'CloudUpload',
  'CpuIcon': 'Memory',
  'FileCode': 'DataObject',
  'GitBranch': 'AccountTree',
  'RefreshCcw': 'Sync',
  'MessageCircle': 'Chat',
  'Send': 'Send',
  'MapPin': 'Place',
  'Code': 'Code',
  'Code2': 'Code',
  'ShieldCheck': 'GppGood',
  'Sword': 'Hardware', // approximated
  'Network': 'Hub',
  'RefreshCw': 'Sync',
  'Battery': 'BatteryFull',
  'BatteryCharging': 'BatteryChargingFull',
  'Signal': 'SignalCellularAlt',
  'Image': 'Image',
  'AlertCircle': 'ErrorOutline',
  'X': 'Close',
  'Maximize2': 'Fullscreen',
  'Upload': 'Upload',
  'Menu': 'Menu',
  'ArrowRight': 'ArrowForward',
  'User': 'Person',
  'Link': 'Link',
  'AlertTriangle': 'Warning',
  'Crosshair': 'Adjust',
  'Cloud': 'Cloud',
  'Package': 'Inventory2'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if lucide-react is imported
  if (!content.includes('lucide-react')) return;

  // Extract the imports from lucide-react
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
  let match;
  let lucideIcons = [];
  while ((match = importRegex.exec(content)) !== null) {
    const importList = match[1].split(',').map(s => s.trim()).filter(s => s);
    for (let imp of importList) {
       let [orig, alias] = imp.split(/\s+as\s+/);
       let name = alias || orig;
       lucideIcons.push({ orig, name });
    }
  }

  if (lucideIcons.length > 0) {
    let newImports = lucideIcons.map(icon => {
       const muiName = iconMap[icon.orig] || icon.orig;
       return `import ${muiName}Icon from '@mui/icons-material/${muiName}';`;
    }).join('\n');

    content = content.replace(importRegex, newImports);

    // Replace all icon tags in JSX
    lucideIcons.forEach(icon => {
       const muiName = iconMap[icon.orig] || icon.orig;
       const jsxRegex = new RegExp(`<${icon.name}(\\s|>)`, 'g');
       content = content.replace(jsxRegex, `<${muiName}Icon$1`);
       const jsxRegexClose = new RegExp(`<\/${icon.name}>`, 'g');
       content = content.replace(jsxRegexClose, `<\/${muiName}Icon>`);
       
       // Handle cases where the icon component is used as a reference or without JSX tags if needed
       // (E.g. icon=<IconName /> which is handled by the JSX regex above usually)
    });
    
    // Quick fix for classic lucide-react usage (we need to map standard tailwind classes w-4 h-4 etc)
    // MUI Icons use fontSize="small" or sx={{ fontSize: N }} but they also accept className.
    // However, tailwind color text-accent works on MUI Icons if we use color="inherit".
    // Actually, MUI icons map className directly to the svg, so className="w-5 h-5 text-accent" works perfectly out of the box!
    
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', filePath);
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

traverse(path.join(__dirname, 'src'));
console.log('Done replacing Lucide with MUI Icons');
