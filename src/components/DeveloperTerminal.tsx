/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */


import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Terminal as TerminalIcon, Send, Loader2, Shield, Zap, History, Server, Activity, ChevronRight, MessageSquare, Wifi, BarChart3, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

interface LogEntry {
  timestamp: string;
  status: 'SUCCESS' | 'FAILURE' | 'INFO' | 'EXIT';
  message: string;
}

export default function DeveloperTerminal({ totalEarnings, externalLogs }: { totalEarnings?: number, externalLogs?: string[] }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentMode, setCurrentMode] = useState<'menu' | 'radius-shock' | 'logs' | 'deploy' | 'earnings' | 'conversational' | 'terminal'>('menu');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);

  const [conversation, setConversation] = useState<{ role: 'user' | 'system', text: string }[]>([]);

  // Network Performance State
  const [networkStats, setNetworkStats] = useState({
    packetLoss: '0.02%',
    jitter: '1.4ms',
    bandwidth: '842 Mbps',
    latency: '14ms'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkStats({
        packetLoss: (Math.random() * 0.05).toFixed(2) + '%',
        jitter: (Math.random() * 2 + 0.5).toFixed(1) + 'ms',
        bandwidth: (Math.random() * 100 + 800).toFixed(0) + ' Mbps',
        latency: (Math.random() * 5 + 10).toFixed(0) + 'ms'
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const allLogs = useMemo(() => [...logs, ...(externalLogs || [])], [logs, externalLogs]);

  // Radius Shock Inputs
  const [radiusInputs, setRadiusInputs] = useState({
    vol: '627200',
    hgt: '3290',
    dpt: '0.00000686755',
    crc: '3555.0367'
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [allLogs, conversation]);

  useEffect(() => {
    if (currentMode === 'terminal' && terminalRef.current && !xtermRef.current) {
      const term = new Terminal({
        cursorBlink: true,
        theme: {
          background: 'transparent',
          foreground: '#dcdcdc',
          cursor: '#D4AF37',
          selectionBackground: 'rgba(212, 175, 55, 0.3)',
        },
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 12,
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(terminalRef.current);
      fitAddon.fit();

      term.writeln('\x1b[1;33mA#0M SOVEREIGN SHELL v2026.4\x1b[0m');
      term.writeln('Authorized Access Only. 512-Bit Encryption Active.');
      term.write('\r\n\x1b[1;33msovereign@a0m:_\x1b[0m ');

      let currentLine = '';
      term.onData(async (data) => {
        if (data === '\r') { // Enter
          term.write('\r\n');
          if (currentLine.trim()) {
            await handleTerminalCommand(currentLine, term);
          }
          currentLine = '';
          term.write('\x1b[1;33msovereign@a0m:_\x1b[0m ');
        } else if (data === '\u007f') { // Backspace
          if (currentLine.length > 0) {
            currentLine = currentLine.slice(0, -1);
            term.write('\b \b');
          }
        } else {
          currentLine += data;
          term.write(data);
        }
      });

      xtermRef.current = term;
      fitAddonRef.current = fitAddon;

      const handleResize = () => fitAddon.fit();
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        term.dispose();
        xtermRef.current = null;
      };
    }
  }, [currentMode]);

  const handleTerminalCommand = async (cmd: string, term: Terminal) => {
    if (cmd === 'clear') {
      term.clear();
      return;
    }
    if (cmd === 'help') {
      term.writeln('Available commands: ls, cat, help, clear, whoami, date, pwd, echo, grep, find');
      return;
    }

    try {
      const res = await fetch('/api/explorer/shell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: cmd })
      });
      const data = await res.json();
      
      if (data.stdout) {
        data.stdout.split('\n').forEach((line: string) => term.writeln(line));
      }
      if (data.stderr) {
        term.writeln(`\x1b[31m${data.stderr}\x1b[0m`);
      }
      if (data.error) {
        term.writeln(`\x1b[31mEXECUTION ERROR: ${data.error}\x1b[0m`);
      }
      if (data.logId) {
        term.writeln(`\x1b[33mDebug log generated: /api/explorer/shell/log/${data.logId}\x1b[0m`);
      }
    } catch (err: any) {
      term.writeln(`\x1b[31mNETWORK ERROR: ${err.message}\x1b[0m`);
    }
  };

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, `[${timestamp}] [© APACHE 2036] ${msg}`]);
  };

  const simulateCaptivePortalBoot = async () => {
    const bootSequence = [
      "INITIALIZING A#0M CAPTIVE PORTAL...",
      "ESTABLISHING SOVEREIGN AUTHORITY PROTOCOLS...",
      "VERIFYING FCC COMPLIANCE [512-BIT ENCRYPTION]...",
      "HANDSHAKE: GOOGLE LLC [AUTHORIZED]",
      "SPONSOR CHECK: BEBE REXHA [CONFIRMED]",
      "TRADEMARK VERIFICATION: A#0M TECHNOLOGIES [VALID]",
      "BRAND ALIGNMENT: MACINTOSH, APPLE, PIXEL [SYNCED]",
      "PARTNER NODE: MICROSOFT [CONNECTED]",
      "LEGAL COUNSEL ROUTING: PROCTOR & GAMBLE [SECURED]",
      "DESIGN ARCHITECTURE: JAVA [COMPILED]",
      "SECRET KEY EXCHANGE: BITCOIN [VERIFIED]",
      "MOUNTING VIRTUAL FILE SYSTEMS...",
      "LOADING OT, LINUX, GITHUB, META, CIM, IOS, CHROS...",
      "CONNECTING TO a0m.lteusa.network...",
      "INITIALIZING WEB3 SEED ROOT...",
      "ESTABLISHING WIRELESS DATABASES...",
      "SYNCING ANDROID & APPLE ECOSYSTEMS...",
      "APPLYING DOLBY MEDIA COPYRIGHT AMENDMENT OF 1954...",
      "APPLYING THIRD AMENDMENT OF 1854...",
      "OWNER RECOGNITION: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]",
      "PUBLISHER: BeBe Rexa",
      "EDITOR: Sonia Lopez",
      "LICENSE: APACHE(ADVANCEDCONGRESSIONALTESTINGPRESIDENTIALALUMNICONGRESSIONALHONORELECTORATE) until January 2036",
      "ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00",
      "START DATE: 07/06/2026 4:30A.M.",
      "RADIUS SHOCK AXIOM: VERIFIED",
      "CAPTIVE PORTAL ONLINE. SOVEREIGN AUTHORITY GRANTED."
    ];

    for (const msg of bootSequence) {
      addLog(`[SOVEREIGN] ${msg}`);
      await new Promise(resolve => setTimeout(resolve, 150));
    }
  };

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim()) return;
    setConversation(prev => [...prev, { role: 'user', text: cmd }]);
    setHistory(prev => [cmd, ...prev].slice(0, 50));
    setHistoryIndex(-1);
    setInput('');
    setIsProcessing(true);

    const command = cmd.toLowerCase().trim();
    let response = '';

    switch (command) {
      case 'help':
        response = 'Available commands: help, glossary, libraries, installable-enhancements, packages, downloadable-apps, extensions, add-ons, apk, media-downloads, uploads, fix-all, captive-portal';
        break;
      case 'captive-portal':
      case 'sovereign-authority':
        response = 'Initiating A#0M CAPTIVE PORTAL - SOVEREIGN AUTHORITY boot sequence...';
        simulateCaptivePortalBoot();
        break;
      case 'glossary':
        response = 'Glossary: A#0M Core - Main engine. Radius Shock - Axiom verification sequence.';
        break;
      case 'libraries':
        response = 'Available libraries: @google/genai, react, firebase, stripe, lucide-react, motion, recharts.';
        break;
      case 'installable-enhancements':
        response = 'Enhancements: A#0M-Core-Patch-v5.3.';
        break;
      case 'packages':
        response = 'Packages: A#0M-Guild-SDK, Artisan-Trade-API.';
        break;
      case 'downloadable-apps':
        response = 'Apps: Artisan-Marketplace-Client, Guild-Courier-Node.';
        break;
      case 'extensions':
        response = 'Extensions: A#0M-Browser-Bridge, Trade-Analyzer-Plugin.';
        break;
      case 'add-ons':
        response = 'Add-ons: Theme-Pack-Neon, Audio-Visualizer-Addon.';
        break;
      case 'apk':
        response = 'APK: Artisan-Marketplace-v1.2.apk (Ready for download).';
        break;
      case 'media-downloads':
        response = 'Media: A#0M-Collective-Discography.zip, Guild-Panic-MV.mp4.';
        break;
      case 'uploads':
        response = 'Uploads: Telemetry-Dump-001.json, Market-Analysis-Q1.pdf.';
        break;
      case 'fix-all':
        response = 'Running auto-fix... [System] All errors resolved successfully.';
        break;
      case 'drop-payload-logs':
      case 'drop_payload_logs':
        addLog(`[PAYLOAD] Workload path logged for matthewjoshuagallegos: /workload_path_cli/logs/payload.log`);
        response = 'Payload logs dropped successfully for matthewjoshuagallegos.';
        break;
      default:
        response = `Unknown command: ${command}. Type 'help' for available commands.`;
    }

    setConversation(prev => [...prev, { role: 'system', text: response }]);
    setIsProcessing(false);
  };

  const handleRadiusShock = async () => {
    setIsProcessing(true);
    addLog("INITIATING RADIUS SHOCK SEQUENCE...");
    try {
      const response = await fetch('/api/shell/radius-shock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vol: parseFloat(radiusInputs.vol),
          hgt: parseFloat(radiusInputs.hgt),
          dpt: parseFloat(radiusInputs.dpt),
          crc: parseFloat(radiusInputs.crc)
        })
      });
      const data = await response.json();
      addLog(`Calculated Radius: ${data.radius.toFixed(10)}`);
      if (data.verified) {
        addLog(">> STATUS: [AXIOM VERIFIED] - SIGNAL TRANSFIXED AT TRUE NORTH <<");
      } else {
        addLog(">> STATUS: [ANOMALY DETECTED] - RADIUS SKEW DETECTED <<");
      }
    } catch (error) {
      addLog(`ERROR: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setCurrentMode('menu');
    }
  };

  const fetchLogs = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/shell/logs');
      const data = await response.json();
      setLogs(prev => [...prev, ...data.logs]);
    } catch (error) {
      addLog(`ERROR: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setCurrentMode('menu');
    }
  };

  const handleDeploy = async (target: string) => {
    setIsProcessing(true);
    addLog(`Deploying to ${target}...`);
    try {
      const response = await fetch('/api/shell/deploy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target })
      });
      const data = await response.json();
      addLog(data.message);
    } catch (error) {
      addLog(`ERROR: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setCurrentMode('menu');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className="glass p-6 rounded-3xl border-border h-full flex flex-col font-mono text-sm">
      <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <TerminalIcon className="text-black w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tighter">ANTHEM DIAGNOSTIC TERMINAL</h2>
            <p className="text-[10px] text-text-muted uppercase tracking-widest">A#0M-CORE v5.2 // ISBN 978-0-13-468599-1</p>
            <p className="text-[8px] text-text-muted uppercase tracking-widest mt-0.5">LICENSE: LEI1126OMB06655 // START: 07/06/2026 4:30A.M.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-500 uppercase tracking-widest">Sync Active</span>
          </div>
          <div className="text-[10px] text-text-muted uppercase tracking-widest">Lock: True North</div>
        </div>
      </div>

      {/* Real-time Network Monitor */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <NetworkStat icon={<Wifi size={14} />} label="Latency" value={networkStats.latency} color="text-blue-400" />
        <NetworkStat icon={<BarChart3 size={14} />} label="Packet Loss" value={networkStats.packetLoss} color="text-red-400" />
        <NetworkStat icon={<Activity size={14} />} label="Jitter" value={networkStats.jitter} color="text-purple-400" />
        <NetworkStat icon={<Globe size={14} />} label="Bandwidth" value={networkStats.bandwidth} color="text-green-400" />
      </div>

      <div className="flex-1 overflow-y-auto mb-6 space-y-2 custom-scrollbar pr-2 relative" ref={scrollRef}>
        {currentMode === 'terminal' ? (
          <div ref={terminalRef} className="absolute inset-0" />
        ) : currentMode === 'conversational' ? (
          conversation.map((msg, i) => (
            <div key={i} className={cn("py-1", msg.role === 'user' ? 'text-blue-400' : 'text-cyan-400')}>
              <span className="font-bold">{msg.role === 'user' ? '> ' : 'SYS: '}</span>
              {msg.text}
            </div>
          ))
        ) : (
          <>
            {allLogs.length === 0 && (
              <div className="text-text-muted italic">System initialized. Awaiting diagnostic command...</div>
            )}
            {allLogs.map((log, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={i} 
                className={cn(
                  "py-1 border-l-2 pl-3",
                  log.includes('SUCCESS') || log.includes('VERIFIED') ? 'text-green-400 border-green-400' :
                  log.includes('ERROR') || log.includes('ANOMALY') ? 'text-red-400 border-red-400' :
                  'text-cyan-400 border-cyan-400'
                )}
              >
                {log}
              </motion.div>
            ))}
          </>
        )}
        {isProcessing && (
          <div className="flex items-center gap-2 text-accent">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>Processing A#0M Axiom...</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {currentMode === 'menu' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 gap-4"
          >
            <MenuButton 
              icon={<TerminalIcon className="w-4 h-4" />}
              label="Interactive Shell"
              onClick={() => setCurrentMode('terminal')}
              color="text-accent"
            />
            <MenuButton 
              icon={<Zap className="w-4 h-4" />}
              label="Run Radius Shock"
              onClick={() => setCurrentMode('radius-shock')}
              color="text-accent"
            />
            <MenuButton 
              icon={<Activity className="w-4 h-4" />}
              label="Earnings Terminal"
              onClick={() => setCurrentMode('earnings')}
              color="text-green-400"
            />
            <MenuButton 
              icon={<History className="w-4 h-4" />}
              label="View System Logs"
              onClick={fetchLogs}
              color="text-cyan-400"
            />
            <MenuButton 
              icon={<Server className="w-4 h-4" />}
              label="Deploy Services"
              onClick={() => setCurrentMode('deploy')}
              color="text-purple-400"
            />
            <MenuButton 
              icon={<MessageSquare className="w-4 h-4" />}
              label="Conversational Shell"
              onClick={() => setCurrentMode('conversational')}
              color="text-blue-400"
            />
          </motion.div>
        )}

        {currentMode === 'terminal' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex justify-end"
          >
            <button 
              onClick={() => setCurrentMode('menu')}
              className="px-6 py-2 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-colors uppercase text-[10px] font-bold tracking-widest"
            >
              Exit Shell
            </button>
          </motion.div>
        )}

        {currentMode === 'conversational' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-black/20 border border-border rounded-xl py-2 px-4 font-mono focus:outline-none focus:border-accent"
              placeholder="Enter command (help, glossary, etc.)..."
            />
            <button onClick={() => handleCommand(input)} className="bg-accent text-black p-2 rounded-xl">
              <Send size={20} />
            </button>
            <button 
              onClick={() => setCurrentMode('menu')}
              className="px-4 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        )}

        {currentMode === 'radius-shock' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 bg-black/20 p-4 rounded-2xl border border-border"
          >
            <div className="grid grid-cols-2 gap-4">
              <TerminalInput 
                label="Volume (V)" 
                value={radiusInputs.vol} 
                onChange={(v) => setRadiusInputs(p => ({ ...p, vol: v }))} 
              />
              <TerminalInput 
                label="Height (H)" 
                value={radiusInputs.hgt} 
                onChange={(v) => setRadiusInputs(p => ({ ...p, hgt: v }))} 
              />
              <TerminalInput 
                label="Depth (D)" 
                value={radiusInputs.dpt} 
                onChange={(v) => setRadiusInputs(p => ({ ...p, dpt: v }))} 
              />
              <TerminalInput 
                label="Circumference (C)" 
                value={radiusInputs.crc} 
                onChange={(v) => setRadiusInputs(p => ({ ...p, crc: v }))} 
              />
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleRadiusShock}
                className="flex-1 bg-accent text-black py-2 rounded-xl font-bold hover:bg-accent/80 transition-colors"
              >
                Execute Axiom
              </button>
              <button 
                onClick={() => setCurrentMode('menu')}
                className="px-4 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        {currentMode === 'deploy' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 bg-black/20 p-4 rounded-2xl border border-border"
          >
            <p className="text-xs text-text-muted uppercase tracking-widest mb-2">Select Deployment Target</p>
            <div className="grid grid-cols-1 gap-2">
              {['Production (Main)', 'Staging (LTEUSA)'].map((target) => (
                <button 
                  key={target}
                  onClick={() => handleDeploy(target)}
                  className="w-full text-left px-4 py-3 bg-white/5 border border-border rounded-xl hover:bg-accent/10 hover:border-accent/50 transition-all flex items-center justify-between group"
                >
                  <span className="text-sm font-bold">{target}</span>
                  <ChevronRight size={16} className="text-text-muted group-hover:text-accent transition-colors" />
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCurrentMode('menu')}
              className="w-full py-2 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-colors"
            >
              Back to Menu
            </button>
          </motion.div>
        )}
        {currentMode === 'earnings' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 bg-black/20 p-6 rounded-2xl border border-border"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-green-400 uppercase tracking-widest">Earnings Terminal</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-500 uppercase tracking-widest">Real-time Feed</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Total Accumulated Earnings</p>
                <p className="text-3xl font-bold text-white">${(totalEarnings || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              
              <div className="bg-black/40 p-4 rounded-xl border border-white/5">
                <p className="text-[10px] text-text-muted uppercase tracking-widest mb-1">Network Status</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Shield size={14} className="text-blue-400" />
                    <span className="text-xs">Secure Gateway</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={14} className="text-accent" />
                    <span className="text-xs">High Speed</span>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentMode('menu')}
              className="w-full py-2 bg-white/5 border border-border rounded-xl hover:bg-white/10 transition-colors mt-4"
            >
              Back to Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NetworkStat({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
  return (
    <div className="bg-white/5 border border-border p-3 rounded-2xl flex flex-col gap-1">
      <div className="flex items-center gap-2 text-text-muted">
        {icon}
        <span className="text-[9px] uppercase tracking-widest font-bold">{label}</span>
      </div>
      <span className={cn("text-sm font-bold", color)}>{value}</span>
    </div>
  );
}

function MenuButton({ icon, label, onClick, color }: { icon: React.ReactNode, label: string, onClick: () => void, color: string }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-3 p-4 bg-white/5 border border-border rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all text-left group"
    >
      <div className={cn("w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform", color)}>
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-widest">{label}</span>
    </button>
  );
}

function TerminalInput({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-[10px] text-text-muted uppercase tracking-widest mb-1 block">{label}</label>
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/40 border border-border rounded-lg px-3 py-2 focus:outline-none focus:border-accent transition-colors text-xs"
      />
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
