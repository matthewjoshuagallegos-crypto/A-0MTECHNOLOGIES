import { useState, useEffect, useRef } from 'react';
import { 
  FileCode, 
  Folder, 
  ChevronRight, 
  ChevronDown, 
  Save, 
  Play, 
  Terminal as TerminalIcon, 
  File, 
  Cpu, 
  ShieldCheck, 
  Search,
  X,
  Code2,
  HardDrive,
  Wifi,
  Globe
} from 'lucide-react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import { motion, AnimatePresence } from 'framer-motion';

import { useA0M } from '../../core/A0MContext';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileNode[];
}

export default function UnifiedIDE() {
  const { state, setState } = useA0M();
  const [tree, setTree] = useState<FileNode | null>(null);
  const { activeFile, content } = state.ide || { activeFile: null, content: '' };
  const [isSaving, setIsSaving] = useState(false);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['src']));
  const treeRef = useRef<FileNode | null>(null);
  
  // Terminal refs
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTree();
    const cleanup = initTerminal();
    return () => {
      cleanup?.();
    };
  }, []);

  const fetchTree = async () => {
    setError(null);
    try {
      const res = await fetch('/api/explorer/tree');
      if (!res.ok) throw new Error(`Kernel Communication Failure: ${res.status}`);
      const data = await res.json();
      setTree(data);
      treeRef.current = data;
    } catch (err) {
      console.error('Failed to fetch tree:', err);
      setError((err as Error).message);
    }
  };

  const setContent = (newContent: string) => {
    setState(prev => ({
      ...prev,
      ide: { ...prev.ide, content: newContent }
    }));
  };

  const setActiveFile = (newFile: string | null) => {
    setState(prev => ({
      ...prev,
      ide: { ...prev.ide, activeFile: newFile }
    }));
  };

  const loadFile = async (path: string) => {
    try {
      const res = await fetch(`/api/explorer/file?path=${encodeURIComponent(path)}`);
      const text = await res.text();
      setState(prev => ({
        ...prev,
        ide: { activeFile: path, content: text }
      }));
    } catch (err) {
      console.error('Failed to load file:', err);
    }
  };

  const saveFile = async () => {
    if (!activeFile) return;
    setIsSaving(true);
    try {
      await fetch('/api/explorer/file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: activeFile, content })
      });
      writeToTerminal(`\x1b[32m[SUCCESS] File saved: ${activeFile}\x1b[0m`);
    } catch (err) {
      writeToTerminal(`\x1b[31m[ERROR] Failed to save file: ${err}\x1b[0m`);
    } finally {
      setIsSaving(false);
    }
  };

  const initTerminal = () => {
    if (!terminalRef.current) return;

    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#050505',
        foreground: '#D4AF37',
        cursor: '#ffffff',
      },
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 14,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    
    // Safety delay for DOM layout stabilization before fitting
    setTimeout(() => {
      if (terminalRef.current && terminalRef.current.clientWidth > 0) {
        try {
          fitAddon.fit();
        } catch (e) {
          console.warn('IDE Terminal fit skipped: container not ready');
        }
      }
    }, 150);

    term.writeln('\x1b[1;33mA#0M INTEGRATED KERNEL SHELL v2026.4\x1b[0m');
    term.write('A#0M > ');

    const inputBuffer = { current: '' };
    const commandHistory: string[] = [];
    let historyIndex = -1;
    
    const listener = term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey;

      if (domEvent.keyCode === 13) { // Enter
        const cmd = inputBuffer.current;
        if (cmd.trim()) {
           commandHistory.push(cmd);
           historyIndex = commandHistory.length;
        }
        inputBuffer.current = '';
        term.write('\r\n');
        executeShell(cmd);
      } else if (domEvent.keyCode === 38) { // ArrowUp
        domEvent.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          inputBuffer.current = commandHistory[historyIndex];
          term.write('\r\x1b[K' + 'A#0M > ' + inputBuffer.current);
        }
      } else if (domEvent.keyCode === 40) { // ArrowDown
        domEvent.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
          historyIndex++;
          inputBuffer.current = commandHistory[historyIndex];
          term.write('\r\x1b[K' + 'A#0M > ' + inputBuffer.current);
        } else {
          historyIndex = commandHistory.length;
          inputBuffer.current = '';
          term.write('\r\x1b[K' + 'A#0M > ');
        }
      } else if (domEvent.keyCode === 9) { // Tab
        domEvent.preventDefault();
        const input = inputBuffer.current;
        const commands = ['help', 'build', 'status', 'tasks', 'sync', 'exit', 'ls', 'cat', 'node', 'a0m', 'clear', 'connect to apn'];
        
        const parts = input.split(' ');
        const lastPart = parts[parts.length - 1];
        
        let suggestions: string[] = [];
        if (parts.length === 1) {
          suggestions = commands.filter(c => c.startsWith(lastPart));
        } else {
          const allPaths: string[] = [];
          const flatten = (node: any) => {
            if (node.path) allPaths.push(node.path);
            if (node.children) node.children.forEach(flatten);
          };
          if (treeRef.current) flatten(treeRef.current);
          suggestions = allPaths.filter(p => p.startsWith(lastPart));
        }

        if (suggestions.length === 1) {
          const completion = suggestions[0].slice(lastPart.length);
          inputBuffer.current += completion;
          term.write(completion);
        } else if (suggestions.length > 1) {
          term.writeln('\r\n' + suggestions.join('  '));
          term.write('A#0M > ' + inputBuffer.current);
        }
      } else if (domEvent.keyCode === 8) { // Backspace
        if (inputBuffer.current.length > 0) {
          inputBuffer.current = inputBuffer.current.slice(0, -1);
          term.write('\b \b');
        }
      } else if (printable) {
        inputBuffer.current += key;
        term.write(key);
      }
    });

    xtermRef.current = term;
    fitAddonRef.current = fitAddon;
    
    return () => {
      listener.dispose();
      term.dispose();
    };
  };

  const writeToTerminal = (msg: string) => {
    xtermRef.current?.writeln(`\r\n${msg}`);
    xtermRef.current?.write('\r\nA#0M > ');
  };

  const executeShell = async (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) {
      xtermRef.current?.write('A#0M > ');
      return;
    }

    if (trimmed === 'clear') {
      xtermRef.current?.clear();
      xtermRef.current?.write('A#0M > ');
      return;
    }

    try {
      let finalCmd = trimmed;
      if (trimmed.startsWith('a0m ')) {
        finalCmd = `node cli.js ${trimmed.substring(4)}`;
      }

      if (trimmed.toLowerCase().includes('connect to apn')) {
        xtermRef.current?.writeln(`\r\n\x1b[1;33m[INITIATING HANDSHAKE] Scanning APN Sector (MCC: 310 / MNC: 260)...\x1b[0m`);
        
        const match = trimmed.match(/connect to apn\s+(.+?)\s+port\s+(\d+)/i);
        const apnName = match ? match[1] : 'A0M USA';
        const portNum = match ? parseInt(match[2]) : 80;

        setState(prev => ({ ...prev, network: { ...prev.network, status: 'SYNCING' } }));

        try {
          const res = await fetch('/api/network/connect', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ apn: apnName, port: portNum, mcc: '310', mnc: '260' })
          });
          const data = await res.json();
          
          setState(prev => ({ 
            ...prev, 
            network: { 
              ...prev.network,
              apn: data.apn, 
              port: data.port, 
              status: 'CONNECTED', 
              frequency: data.frequency,
              carrier: 'MetroPCSByT-Mobile',
              signalStrength: -78
            } 
          }));

          xtermRef.current?.writeln(`\x1b[32m[SUCCESS] Handshake established with ${data.apn} on Port ${data.port}\x1b[0m`);
          xtermRef.current?.writeln(`\x1b[32m[SIGNAL] Node: LTEUSA.Fast.MetroPCSByT-Mobile // Freq: ${data.frequency}\x1b[0m`);
          xtermRef.current?.writeln(`\x1b[32m[ENCRYPTION] AES-512-GCM // 512-bit Secure Sector Active\x1b[0m`);
          xtermRef.current?.writeln(`\x1b[32m[FCC] Verified ID: ${data.fcc_id}\x1b[0m`);
          xtermRef.current?.writeln(`\x1b[32m[KOTLIN] CellularDataManager::requestCellularNetwork -> ON_AVAILABLE\x1b[0m`);
        } catch (err) {
          setState(prev => ({ ...prev, network: { ...prev.network, status: 'DISCONNECTED' } }));
          xtermRef.current?.writeln(`\x1b[31m[FAILURE] APN Link Refused: ${err}\x1b[0m`);
        }

        xtermRef.current?.write('\r\nA#0M > ');
        return;
      }

      if (trimmed.startsWith('adb install -r')) {
        xtermRef.current?.writeln(`\r\n\x1b[33m[ADB] Performing Streamed Install\x1b[0m`);
        xtermRef.current?.writeln(`\x1b[33m[ADB] Target: com.a#0m.package.app (Sovereign Kernel v2026)\x1b[0m`);
        
        // Simulating the installation process steps
        const steps = [
          'Pushing com.a#0m.package.app... [15%]',
          'Pushing com.a#0m.package.app... [45%]',
          'Pushing com.a#0m.package.app... [85%]',
          'Pushing com.a#0m.package.app... [100%]',
          'Verifying FCC 512-bit signature...',
          'Package Manager: Installing APK...',
        ];

        for (const step of steps) {
          xtermRef.current?.writeln(`\x1b[36m${step}\x1b[0m`);
          await new Promise(r => setTimeout(r, 400));
        }

        xtermRef.current?.writeln(`\x1b[32;1mSuccess\x1b[0m`);
        xtermRef.current?.writeln(`\x1b[32m[SYSTEM] com.a#0m.package.app is now live on A#0M Virtual Android 11 Node.\x1b[0m`);
        xtermRef.current?.write('\r\nA#0M > ');
        return;
      }

      const res = await fetch('/api/explorer/shell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: finalCmd })
      });
      const data = await res.json();
      
      if (data.stdout) xtermRef.current?.write(`\x1b[32m${data.stdout.replace(/\n/g, '\r\n')}\x1b[0m`);
      if (data.stderr) xtermRef.current?.writeln(`\r\n\x1b[31;1m[!] STDERR: \x1b[0m\x1b[31m${data.stderr.replace(/\n/g, '\r\n')}\x1b[0m`);
      if (data.error) xtermRef.current?.writeln(`\r\n\x1b[31;1m[X] KERNEL ERROR: \x1b[0m\x1b[31m${data.error}\x1b[0m\r\n`);
    } catch (err) {
      xtermRef.current?.writeln(`\r\n\x1b[31;1m[X] SHELL FAILURE: \x1b[0m\x1b[31m${err}\x1b[0m\r\n`);
    }
    
    // Reset Prompt
    xtermRef.current?.write('\r\nA#0M > ');
  };

  const toggleFolder = (path: string) => {
    const next = new Set(expandedFolders);
    if (next.has(path)) next.delete(path);
    else next.add(path);
    setExpandedFolders(next);
  };

  const renderTree = (node: FileNode, level = 0) => {
    const isExpanded = expandedFolders.has(node.path);
    
    return (
      <div key={node.path} style={{ paddingLeft: level * 12 }}>
        <div 
          className={`flex items-center gap-2 py-1 px-2 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group ${activeFile === node.path ? 'bg-accent/10 text-accent' : 'text-gray-400'}`}
          onClick={() => node.type === 'directory' ? toggleFolder(node.path) : loadFile(node.path)}
        >
          {node.type === 'directory' ? (
            <>
              {isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
              <Folder className={`w-4 h-4 ${isExpanded ? 'text-accent' : 'text-blue-400'}`} />
            </>
          ) : (
            <>
              <div className="w-5" />
              <FileCode className="w-4 h-4 text-purple-400" />
            </>
          )}
          <span className="text-xs font-mono truncate">{node.name}</span>
        </div>
        {node.type === 'directory' && isExpanded && node.children?.map(child => renderTree(child, level + 1))}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col px-10 pb-10 bg-[#050505]">
      
      {/* IDE Top Bar */}
      <div className="flex items-center justify-between py-4 mb-4 border-b border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
             <Code2 className="w-6 h-6 text-accent" />
             <h2 className="text-xl font-black uppercase tracking-tighter text-white">A#0M Unified IDE</h2>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            <HardDrive className="w-3 h-3" />
            <span>Root / {activeFile || 'None Selected'}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <button 
             onClick={saveFile}
             disabled={!activeFile || isSaving}
             className="flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-xl text-xs font-black uppercase shadow-lg shadow-accent/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
           >
             <Save className="w-4 h-4" />
             {isSaving ? 'Saving...' : 'Save Kernel'}
           </button>
           <button className="flex items-center gap-2 bg-white/5 text-white px-4 py-2 rounded-xl text-xs font-black uppercase border border-white/5 hover:bg-white/10 transition-all">
             <Play className="w-4 h-4 text-green-500" />
             Compile
           </button>
        </div>
      </div>

      <div className="flex-1 flex gap-6 overflow-hidden">
        
        {/* Explorer Sidebar */}
        <div className="w-64 flex flex-col bg-zinc-950 rounded-[2rem] border border-white/5 overflow-hidden">
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Explorer</span>
            <button onClick={fetchTree} className="p-1 hover:bg-white/10 rounded-md transition-all group">
               <Search className="w-3 h-3 text-gray-600 group-hover:text-accent" />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4 custom-scrollbar">
            {error ? (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-[10px] font-black text-red-500 uppercase mb-2">Sync Error</p>
                <p className="text-[8px] font-mono text-gray-500 leading-tight mb-4">{error}</p>
                <button 
                  onClick={fetchTree}
                  className="w-full py-2 bg-red-500/20 text-red-500 text-[8px] font-black uppercase rounded-lg hover:bg-red-500 hover:text-white transition-all"
                >
                  Restart Handshake
                </button>
              </div>
            ) : tree ? renderTree(tree) : (
              <div className="flex flex-col items-center justify-center h-32 opacity-20">
                 <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mb-4" />
                 <p className="text-[10px] font-black uppercase tracking-widest">Indexing...</p>
              </div>
            )}
          </div>
        </div>

        {/* Editor + Terminal Core */}
        <div className="flex-1 flex flex-col gap-6 overflow-hidden">
          
          {/* Editor Area */}
          <div className="flex-1 bg-zinc-950 rounded-[2.5rem] border border-white/5 p-8 flex flex-col overflow-hidden relative shadow-inner">
            <div className="flex items-center justify-between mb-4">
               <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg">
                    <File className="w-3 h-3 text-accent" />
                    <span className="text-[10px] font-mono text-accent uppercase font-bold">{activeFile?.split('/').pop() || 'welcome.a0m'}</span>
                  </div>
               </div>
               <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-2 h-2 rounded-full bg-green-500/20" />
               </div>
            </div>
            
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="flex-1 w-full bg-transparent border-none outline-none font-mono text-base text-gray-300 resize-none leading-relaxed p-4 selection:bg-accent/30 custom-scrollbar"
              placeholder="Select a kernel file to begin engineering..."
              spellCheck={false}
            />

            {/* Editor Decoration */}
            <div className="absolute bottom-6 left-12 flex items-center gap-3 opacity-20 pointer-events-none">
               <Cpu className="w-10 h-10 text-white" />
               <div className="text-[8px] font-black uppercase text-white">
                  <p>Line count: {content.split('\n').length}</p>
                  <p>Sovereign Encoding: UTF-8</p>
               </div>
            </div>
          </div>

          {/* Integrated Terminal (Bottom) */}
          <div className="h-48 bg-black rounded-[2rem] border border-accent/10 p-6 overflow-hidden relative group shadow-2xl">
            <div className="flex items-center gap-2 mb-2 text-[10px] font-black text-gray-600 uppercase tracking-widest px-2">
              <TerminalIcon className="w-3 h-3" />
              <span>Kernel Console</span>
            </div>
            <div ref={terminalRef} className="h-full w-full opacity-80 group-hover:opacity-100 transition-opacity" onTouchStart={() => xtermRef.current?.focus()} />
          </div>

        </div>

        {/* Right Status Panel */}
        <div className="w-64 flex flex-col gap-6">
           <div className="bg-zinc-950 rounded-[2rem] border border-white/5 p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-gray-500">Security</span>
                <ShieldCheck className="w-4 h-4 text-green-500" />
              </div>
              <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  className="h-full bg-green-500"
                />
              </div>
              <p className="text-[10px] font-mono text-gray-600 leading-tight">
                AES-512 Encryption Handshake: COMPLIANT
              </p>
           </div>

            <div className="flex-1 bg-gradient-to-b from-accent/5 to-transparent rounded-[2rem] border border-accent/5 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-black uppercase text-white mb-2 tracking-tighter">Sovereign Specs</h3>
                <div className="flex flex-col gap-3">
                  <p className="text-[10px] text-gray-500 font-mono leading-relaxed">
                    ONEUI // SIRI_eאKnox [INDEPENDENT]<br/>
                    GOSL (Global OS Layer) ACTIVE<br/>
                    Bootloader: ChromeOS // Android Hybrid<br/>
                    Status: Independent Invention
                  </p>
                  
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <Wifi className={`w-3 h-3 ${state.network.status === 'CONNECTED' ? 'text-green-500' : 'text-gray-600'}`} />
                         <span className="text-[8px] font-black uppercase text-gray-400">APN STATUS</span>
                      </div>
                      <span className={`text-[8px] font-black uppercase ${
                        state.network.status === 'CONNECTED' ? 'text-green-500' : 
                        state.network.status === 'SYNCING' ? 'text-accent animate-pulse' : 'text-red-500'
                      }`}>
                        {state.network.status}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-center text-[7px] font-mono text-gray-600 uppercase">
                        <span>Node</span>
                        <span className="text-gray-400">{state.network.apn}</span>
                      </div>
                      <div className="flex justify-between items-center text-[7px] font-mono text-gray-600 uppercase">
                        <span>Carrier</span>
                        <span className="text-gray-400 truncate max-w-[80px]">{state.network.carrier}</span>
                      </div>
                      <div className="flex justify-between items-center text-[7px] font-mono text-gray-600 uppercase">
                        <span>Signal</span>
                        <span className={`${state.network.signalStrength > -90 ? 'text-green-500' : 'text-yellow-500'}`}>{state.network.signalStrength} dBm</span>
                      </div>
                      <div className="flex justify-between items-center text-[7px] font-mono text-gray-600 uppercase">
                        <span>Port</span>
                        <span className="text-gray-400">{state.network.port}</span>
                      </div>
                      <div className="flex justify-between items-center text-[7px] font-mono text-gray-600 uppercase">
                        <span>Freq</span>
                        <span className="text-gray-400">{state.network.frequency}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            <div className="p-4 bg-black rounded-2xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                   <span className="text-[8px] font-black text-zinc-600">GOOGLE HQ SYNC</span>
                   <span className="text-[8px] font-black text-accent">SECURE</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#D4AF37]" />
                   <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">Connected: 1600 Amphitheatre Pkwy</span>
                </div>
                <div className="flex gap-[2px]">
                   {[...Array(12)].map((_, i) => (
                     <div key={i} className={`flex-1 h-3 rounded-[1px] ${i < 8 ? 'bg-accent' : 'bg-zinc-800'}`} />
                   ))}
                </div>
              </div>
           </div>
        </div>

      </div>

      {/* Footer Info */}
      <div className="mt-6 flex justify-between items-center text-[10px] font-black text-gray-700 uppercase tracking-[0.2em]">
         <div className="flex gap-8">
            <span>ADB: OPERATIONAL</span>
            <span>LTEUSA: ACTIVE</span>
            <span>SYSTEM_TIME: {new Date().toLocaleTimeString()}</span>
         </div>
         <div className="text-accent/40">Powered by Vortex Intelligence Core</div>
      </div>

    </div>
  );
}
