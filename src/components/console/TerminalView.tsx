import { useEffect, useRef, useState } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';
import { Terminal as TerminalIcon, Cpu, ShieldAlert, CpuIcon } from 'lucide-react';

export default function TerminalView() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<Terminal | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [currentInput, setCurrentInput] = useState('');

  const handleCommand = async (input: string) => {
    const term = xtermRef.current;
    if (!term) return;

    const cmdLine = input.trim();
    if (!cmdLine) {
      term.write('\r\n A#0M > ');
      return;
    }

    term.writeln(`\r\n\x1b[1;30m[EXEC] \x1b[0m\x1b[37m${cmdLine}\x1b[0m`);

    // Backend Execution Proxy
    try {
      let commandToExecute = cmdLine;
      if (cmdLine.startsWith('a0m ')) {
        const subCmd = cmdLine.substring(4);
        commandToExecute = `node cli.js ${subCmd}`;
      }

      const response = await fetch('/api/explorer/shell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: commandToExecute })
      });
      
      const data = await response.json();
      
      if (data.stdout && data.stdout.trim()) {
        term.write(`\x1b[32m${data.stdout.replace(/\n/g, '\r\n')}\x1b[0m`);
      }
      if (data.stderr && data.stderr.trim()) {
        term.write(`\r\n\x1b[1;31m[ERROR] \x1b[0m\x1b[31m${data.stderr.replace(/\n/g, '\r\n')}\x1b[0m`);
      }
      if (data.error) {
        term.write(`\r\n\x1b[1;31m[CRITICAL] \x1b[0m\x1b[31;1m${data.error}\x1b[0m\r\n`);
      }
    } catch (err) {
      term.write(`\r\n\x1b[1;31m[SYSTEM CRITICAL] \x1b[0m\x1b[31mConnection Failure: ${err}\x1b[0m\r\n`);
    }

    term.write('\r\n A#0M > ');
  };

  useEffect(() => {
    if (!terminalRef.current) return;

    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: '#0a0a0a',
        foreground: '#D4AF37',
        cursor: '#ffffff',
        selectionBackground: 'rgba(212, 175, 55, 0.3)',
      },
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 18,
      letterSpacing: 1,
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    
    setTimeout(() => {
      if (terminalRef.current && terminalRef.current.clientWidth > 0) {
        fitAddon.fit();
      }
    }, 100);

    term.writeln('\x1b[1;33m---------------------------------------------------------\x1b[0m');
    term.writeln('\x1b[1;37mA#0M AUTHORITY OS v2026.4 [KERNEL INITIALIZED]\x1b[0m');
    term.writeln('\x1b[1;37mAUTHOR, CREATOR & ENGINEER: Matthew Joshua Gallegos\x1b[0m');
    term.writeln('\x1b[1;33m---------------------------------------------------------\x1b[0m');
    term.writeln('Type \x1b[1;36m"a0m help"\x1b[0m to list available protocols.\r\n');

    term.onKey(({ key, domEvent }) => {
      if (domEvent.keyCode === 13) { // Enter
        term.write('\r\n');
        handleCommand(currentInput);
        setCurrentInput('');
      } else if (domEvent.keyCode === 8) { // Backspace
        if (currentInput.length > 0) {
          setCurrentInput(prev => prev.slice(0, -1));
          term.write('\b \b');
        }
      } else if (!domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey) {
        setCurrentInput(prev => prev + key);
        term.write(key);
      }
    });

    term.write(' A#0M > ');
    xtermRef.current = term;
    fitAddonRef.current = fitAddon;
    setIsReady(true);

    const handleResize = () => {
      try { fitAddon.fit(); } catch (e) {}
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      term.dispose();
    };
  }, [currentInput]);

  return (
    <div className="h-full flex flex-col p-16 gap-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-6">
          <div className="p-5 bg-accent text-black rounded-2xl shadow-lg">
             <TerminalIcon className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white leading-tight">Sovereignty Terminal</h2>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">Direct Kernel Interface // Secure Layer 5</p>
          </div>
        </div>
        <div className="flex gap-8">
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">CPU LOAD</span>
              <div className="flex gap-1 mt-2">
                 {[...Array(8)].map((_, i) => (
                    <div key={i} className={`w-3 h-5 rounded-sm ${i < 3 ? 'bg-green-500' : 'bg-zinc-800'}`} />
                 ))}
              </div>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">AES-512</span>
              <ShieldAlert className="w-8 h-8 text-accent mt-1" />
           </div>
        </div>
      </div>

      <div className="flex-1 bg-black rounded-[3.5rem] border border-white/10 p-10 overflow-hidden shadow-2xl relative group">
        <div ref={terminalRef} className="h-full w-full opacity-90 group-focus-within:opacity-100 transition-opacity" />
        
        <div className="absolute bottom-10 right-10 flex gap-4">
           <button 
             onClick={() => {
               if (currentInput.trim()) {
                 xtermRef.current?.write('\r\n');
                 handleCommand(currentInput);
                 setCurrentInput('');
               }
             }}
             className="bg-accent text-black font-black px-6 py-3 rounded-full hover:bg-white transition-all shadow-lg flex items-center gap-2"
           >
             RUN COMMAND
           </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 p-10 pointer-events-none opacity-20">
           <CpuIcon className="w-32 h-32 text-accent" />
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-black text-gray-600 uppercase tracking-[0.3em]">
         <div className="flex gap-10">
            <span>ADB STACK: OPERATIONAL</span>
            <span>LTEUSA: CONNECTED</span>
         </div>
         <div className="flex gap-10">
            <span>KRNL_REV: 2026.4.19.GP</span>
            <span className="text-accent animate-pulse">READY_FOR_PROTOCOL_INPUT</span>
         </div>
      </div>
    </div>
  );
}
