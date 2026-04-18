/**
 * A#0M Core Application Interface - v2026.4
 * Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.
 * Corp: Google LLC | Partner: Microsoft
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Folder, FileText, ChevronRight, ChevronDown, 
  Terminal as TerminalIcon, Save, Shield, Cpu, 
  Map as MapIcon, Database, Zap, Rocket,
  ShoppingCart, MessageSquare, Trophy, Music, Radio, Settings, Power
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { A0MVAI } from './intelligence/vai';
import { getGeolocation } from './core/gps';

// Components
import Bootloader from './components/Bootloader';
import SKUManagement from './components/SKUManagement';
import Marketplace from './components/Marketplace';
import Leaderboard from './components/Leaderboard';
import Playlist from './components/Playlist';
import Messenger from './components/Messenger';
import APNPortal from './components/APNPortal';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type AppView = 'explorer' | 'sku' | 'marketplace' | 'leaderboard' | 'playlist' | 'messenger' | 'apn';

interface FileNode {
  name: string;
  path: string;
  type: 'file' | 'directory';
  children?: FileNode[];
}

export default function App() {
  const [booting, setBooting] = useState(true);
  const [tree, setTree] = useState<FileNode | undefined>(undefined);
  const [currentPath, setCurrentPath] = useState<string | undefined>(undefined);
  const [fileContent, setFileContent] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'A#0M AUTHORITY OS v2026.4.18 [SECURE]',
    'Copyright (c) 2026 Matthew Joshua Gallegos. All Rights Reserved.',
    'System: 512-Bit Encryption rate detected.',
    'System: Localizing kernel parameters...',
    'Ready.'
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [activeView, setActiveView] = useState<AppView>('explorer');
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!booting) loadTree();
  }, [booting]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalOutput]);

  const loadTree = async () => {
    try {
      const res = await fetch('/api/explorer/tree');
      const data = await res.json();
      setTree(data);
    } catch (err) {
      appendTerminal(`Error: Failed to load directory structure.`);
    }
  };

  const loadFile = async (path: string) => {
    setCurrentPath(path);
    setActiveView('explorer');
    setFileContent('LOADING SECURE DATA...');
    try {
      const res = await fetch(`/api/explorer/file?path=${encodeURIComponent(path)}`);
      const data = await res.text();
      setFileContent(data);
      appendTerminal(`System: Decrypting ${path.toUpperCase()}... SUCCESS`);
    } catch (err) {
      appendTerminal(`Error: Failed to fetch file content.`);
    }
  };

  const saveFile = async () => {
    if (!currentPath) return;
    setIsSaving(true);
    try {
      await fetch('/api/explorer/file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: currentPath, content: fileContent })
      });
      appendTerminal(`System: Serializing changes to disk... DONE`);
      setTimeout(() => setIsSaving(false), 1000);
    } catch (err) {
      appendTerminal(`Error: Save failed.`, true);
      setIsSaving(false);
    }
  };

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    appendTerminal(`sovereign@a0m:~$ ${cmd}`);

    // Command Routing
    const routes: Record<string, AppView> = {
      'explorer': 'explorer',
      'sku': 'sku',
      'inventory': 'sku',
      'market': 'marketplace',
      'marketplace': 'marketplace',
      'leaderboard': 'leaderboard',
      'playlist': 'playlist',
      'messenger': 'messenger',
      'comms': 'messenger',
      'apn': 'apn',
      'wireless': 'apn'
    };

    if (routes[trimmedCmd]) {
      setActiveView(routes[trimmedCmd]);
      appendTerminal(`System: Switching to ${routes[trimmedCmd].toUpperCase()} view.`);
      return;
    }

    if (trimmedCmd === 'help' || trimmedCmd === '_hlp_') {
      appendTerminal(`A#0M AUTHORITY OS :: COMMANDS
      -------------------------------
      explorer      : VFS Segment
      sku           : Registry Module
      marketplace   : Exchange Segment
      leaderboard   : Contribution Matrix
      playlist      : Aural Telemetry
      messenger     : Courier Stream
      apn           : Wireless Profile
      gps           : RADIUS EQUATION
      install [sku] : DEPLOY SEGMENT
      vai [msg]     : Intel Query
      clear         : Wipe Terminal`);
      return;
    }

    if (trimmedCmd === 'clear') { setTerminalOutput([]); return; }

    if (trimmedCmd.startsWith('install ')) {
      const packageId = cmd.substring(8).trim();
      appendTerminal(`System: Initiating Installation for segment: ${packageId.toUpperCase()}...`);
      appendTerminal('Registry: Authenticating FCC Security Certificates...');
      setTimeout(() => {
        appendTerminal(`Registry: [SUCCESS] Segment ${packageId.toUpperCase()} verified.`);
        appendTerminal(`System: Serializing ${packageId.toUpperCase()} to Kernel Sector 7...`);
        setTimeout(() => {
          appendTerminal(`System: INSTALLATION COMPLETE. Sector 7 Synchronized.`);
        }, 1200);
      }, 800);
      return;
    }

    if (trimmedCmd === 'gps') {
      appendTerminal('System: Calculating RADIUS GPS EQUATION...');
      try {
        const coords = await getGeolocation();
        appendTerminal(`> LAT ${coords.lat.toFixed(4)}, LON ${coords.lon.toFixed(4)}`);
        appendTerminal(`> RADIUS: ${Math.sqrt(3.156427899 + (coords.lat + coords.lon)/100).toFixed(8)}`);
      } catch (err) { appendTerminal(`Error: ${err}`, true); }
      return;
    }

    if (trimmedCmd.startsWith('vai ')) {
      appendTerminal('System: Consulting Intelligence Shard...');
      const response = await A0MVAI.processIntent(cmd.substring(4));
      appendTerminal(`VAI: ${response}`);
      return;
    }

    // Shell Fallback
    try {
      const res = await fetch('/api/explorer/shell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd })
      });
      const data = await res.json();
      if (data.stdout) appendTerminal(data.stdout);
      if (data.stderr) appendTerminal(data.stderr, true);
    } catch (err) { appendTerminal(`NETWORK ERROR`, true); }
  };

  const appendTerminal = (text: string, isError = false) => {
    setTerminalOutput(prev => [...prev, isError ? `[ERR] ${text}` : text]);
  };

  if (booting) return <Bootloader onComplete={() => setBooting(false)} />;

  return (
    <div className="flex flex-col h-screen bg-bg text-text-primary font-sans overflow-hidden border-[6px] border-card">
      {/* Top Navigation */}
      <header className="bg-black border-b border-border px-8 py-5 flex justify-between items-center z-50 shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        <div className="flex items-center gap-6 relative">
          <div className="p-2 bg-accent/20 rounded-lg border border-accent/20">
             <Shield className="w-5 h-5 text-accent" />
          </div>
          <div>
             <h1 className="text-[11px] font-black tracking-[0.6em] uppercase text-white leading-none mb-1">
               A#0M CAPTIVE PORTAL
             </h1>
             <p className="text-[8px] font-mono text-gray-500 uppercase tracking-widest leading-none">
               SECURED KERNEL AUTHORITY v2026 :: SKU_A21S30i19GP13
             </p>
          </div>
        </div>
        
        <div className="flex items-center gap-10">
           <div className="flex items-center gap-3">
              <Zap className="w-3 h-3 text-yellow-500" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Latency: 0.1ms</span>
           </div>
           <div className="h-8 w-px bg-white/5" />
           <div className="flex items-center gap-3 group cursor-pointer">
              <div className="text-right">
                 <p className="text-[9px] font-black text-white leading-none mb-0.5">SOVEREIGN@A0M</p>
                 <p className="text-[7px] font-mono text-accent uppercase leading-none">Mathew Joshua Gallegos</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center font-black text-accent overflow-hidden">
                 <img src="https://picsum.photos/seed/sovereign/100/100" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-72 bg-card border-r border-border p-6 overflow-y-auto custom-scrollbar shadow-inner flex flex-col gap-10">
          <section>
            <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-600 mb-6 flex items-center gap-2">
              <Database className="w-3 h-3" /> System Core
            </h3>
            <div className="space-y-1">
              <NavButton icon={<Cpu />} label="Explorer" active={activeView === 'explorer'} onClick={() => setActiveView('explorer')} />
              <NavButton icon={<Rocket />} label="SKU Registry" active={activeView === 'sku'} onClick={() => setActiveView('sku')} />
              <NavButton icon={<Radio />} label="Wireless APN" active={activeView === 'apn'} onClick={() => setActiveView('apn')} />
            </div>
          </section>

          <section>
            <h3 className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-600 mb-6 flex items-center gap-2">
              <Zap className="w-3 h-3 text-accent" /> Ecosystem
            </h3>
            <div className="space-y-1">
              <NavButton icon={<ShoppingCart />} label="Marketplace" active={activeView === 'marketplace'} onClick={() => setActiveView('marketplace')} />
              <NavButton icon={<Trophy />} label="Leaderboard" active={activeView === 'leaderboard'} onClick={() => setActiveView('leaderboard')} />
              <NavButton icon={<Music />} label="Playlist" active={activeView === 'playlist'} onClick={() => setActiveView('playlist')} />
              <NavButton icon={<MessageSquare />} label="Courier" active={activeView === 'messenger'} onClick={() => setActiveView('messenger')} />
            </div>
          </section>

          <div className="mt-auto space-y-4">
             <div className="p-4 bg-zinc-950 rounded-2xl border border-white/5">
                <p className="text-[8px] font-mono text-gray-600 uppercase mb-2">VFS Tree Segment</p>
                <div className="space-y-1 overflow-hidden">
                   {tree && <TreeNode node={tree} onFileClick={loadFile} />}
                </div>
             </div>
             <button className="w-full p-4 bg-red-950/20 text-red-500 rounded-2xl border border-red-500/20 flex items-center justify-center gap-3 hover:bg-red-500 hover:text-white transition-all group">
                <Power className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest">Detach Kernel</span>
             </button>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 flex flex-col relative bg-[#020202]">
          <div className="flex-1 relative overflow-hidden bg-black shadow-inner">
             {activeView === 'explorer' && (
               currentPath ? (
                 <div className="h-full flex flex-col">
                   <div className="p-6 bg-zinc-950 border-b border-white/5 flex justify-between items-center shadow-xl z-20">
                      <div className="flex items-center gap-4">
                        <FileText className="w-5 h-5 text-accent" />
                        <h4 className="text-sm font-bold text-white font-mono">{currentPath.toUpperCase()}</h4>
                      </div>
                      <button onClick={saveFile} disabled={isSaving} className="gold-button !px-6 !py-2 !text-[9px]">
                        {isSaving ? 'Serializing...' : 'Commit Data'}
                      </button>
                   </div>
                   <textarea
                    value={fileContent}
                    onChange={(e) => setFileContent(e.target.value)}
                    className="flex-1 p-10 font-mono text-sm leading-relaxed outline-none bg-transparent text-gray-300 resize-none z-10 custom-scrollbar"
                    spellCheck={false}
                  />
                 </div>
               ) : (
                 <div className="h-full flex flex-col items-center justify-center opacity-40">
                    <Database className="w-24 h-24 text-accent animate-[pulse_3s_infinite]" />
                    <p className="text-[11px] font-black uppercase tracking-[0.5em] text-accent mt-8">Kernel VFS Active</p>
                    <p className="text-[9px] font-mono text-gray-500 mt-2">Access secure sectors from the system segment</p>
                 </div>
               )
             )}
             {activeView === 'sku' && <SKUManagement />}
             {activeView === 'marketplace' && <Marketplace />}
             {activeView === 'leaderboard' && <Leaderboard />}
             {activeView === 'playlist' && <Playlist />}
             {activeView === 'messenger' && <Messenger />}
             {activeView === 'apn' && <APNPortal />}
          </div>
        </section>
      </main>

      {/* Footer Terminal */}
      <footer className="h-[30%] bg-black border-t border-border flex flex-col overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="flex items-center gap-4 px-8 py-3 bg-[#050505] border-b border-border">
          <TerminalIcon className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">A#0M Authority Shell Runtime</span>
          <div className="ml-auto flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full" />
                <span className="text-[8px] font-mono text-gray-600 uppercase">SECURE</span>
             </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6 font-mono text-[13px] leading-relaxed custom-scrollbar bg-[#010101] text-zinc-400">
          {terminalOutput.map((line, i) => (
            <div key={i} className={cn("mb-1.5 whitespace-pre-wrap", line.startsWith('[ERR]') ? "text-red-500/80" : "")}>
               {line.startsWith('sovereign@a0m:~$') ? <span className="text-accent">{line}</span> : line}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
        <div className="bg-black border-t border-border px-8 py-4 flex items-center gap-6 focus-within:bg-zinc-950 transition-colors">
          <span className="text-accent font-black text-sm select-none tracking-widest">sovereign@a0m:</span>
          <input 
            type="text"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.currentTarget.value) {
                handleCommand(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
            autoFocus
            autoComplete="off"
            spellCheck={false}
            className="flex-1 bg-transparent outline-none border-none text-white font-mono text-sm caret-accent placeholder:text-zinc-800"
            placeholder="A#0M COMMAND HUB..."
          />
        </div>
      </footer>
    </div>
  );
}

function NavButton({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex items-center gap-4 py-3 px-4 cursor-pointer transition-all duration-300 rounded-2xl group",
        active ? "bg-accent text-black font-black shadow-[0_0_20px_rgba(212,175,55,0.2)]" : "text-gray-500 hover:text-white hover:bg-white/5"
      )}
    >
      <div className={cn("transition-transform duration-300 group-hover:scale-110", active ? "text-black" : "group-hover:text-accent")}>
        {icon}
      </div>
      <span className="text-[11px] font-black uppercase tracking-[0.2em]">{label}</span>
      {active && <div className="ml-auto w-1.5 h-1.5 bg-black rounded-full" />}
    </div>
  );
}

function TreeNode({ node, onFileClick }: { node: FileNode, onFileClick: (path: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (node.type === 'directory') setIsOpen(!isOpen);
    else onFileClick(node.path);
  };

  return (
    <div className="select-none">
      <div 
        onClick={handleClick}
        className={cn(
          "flex items-center gap-2 py-1 cursor-pointer transition-all duration-200 group rounded-md px-2",
          node.type === 'directory' ? "text-accent/80 font-bold" : "text-gray-600 hover:text-white"
        )}
      >
        {node.type === 'directory' ? (
          isOpen ? <ChevronDown className="w-2 h-2" /> : <ChevronRight className="w-2 h-2" />
        ) : <div className="w-2" />}
        <span className="text-[10px] tracking-tight truncate uppercase font-mono">
          {node.name}
        </span>
      </div>
      {node.type === 'directory' && isOpen && node.children && (
        <div className="ml-2 pl-2 border-l border-white/5 space-y-0.5">
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} onFileClick={onFileClick} />
          ))}
        </div>
      )}
    </div>
  );
}
