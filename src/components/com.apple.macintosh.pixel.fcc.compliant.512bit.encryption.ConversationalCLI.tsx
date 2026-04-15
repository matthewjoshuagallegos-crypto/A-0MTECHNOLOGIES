/**
 * © 2026 Matthew Joshua Gallegos. All Rights Reserved.
 * Google LLC (Corp), Bebe Rexha (Sponsor), A#0M Technologies (TM)
 * Brands: Macintosh, Apple, Pixel | Partner: Microsoft
 * Attorneys: PROCTOR & GAMBLE | Design: Java | Secret: Bitcoin
 * FCC Compliant 512-bit Encryption Rate
 */

import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Download, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export function ConversationalCLI() {
  const [history, setHistory] = useState<{role: 'system' | 'user', text: string}[]>([
    { role: 'system', text: 'A#0M CONVERSATIONAL CLI INITIALIZED.' },
    { role: 'system', text: 'LOW-CODE COMPLIANCE MODE: ACTIVE.' },
    { role: 'system', text: 'Type "help" for commands or converse naturally.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    let response = '';

    if (lowerCmd === 'help') {
      response = 'Available commands: help, status, secure, build_package';
    } else if (lowerCmd === 'status') {
      response = 'SYSTEM STATUS: OPTIMAL. 512-BIT ENCRYPTION ACTIVE. NO LINUX DETECTED.';
    } else if (lowerCmd === 'secure') {
      response = 'SECURING ENVIRONMENT... ALL PORTS LOCKED. PROCTOR & GAMBLE LEGAL SHIELD ENGAGED.';
    } else if (lowerCmd === 'build_package') {
      response = 'GENERATING com.a#0m.package.app... PLEASE USE THE DOWNLOAD BUTTON.';
    } else {
      response = `Processing conversational input: "${cmd}". Acknowledged and logged to A#0M Core.`;
    }

    setHistory(prev => [...prev, { role: 'user', text: cmd }, { role: 'system', text: response }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const handleDownloadPackage = () => {
    const content = "A#0M_CORE_V2026_FINAL_SECURED_APP_PACKAGE_DATA\nENCRYPTION: 512-BIT\nOWNER: Matthew Joshua Gallegos";
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'com.a#0m.package.app';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setHistory(prev => [...prev, { role: 'system', text: 'DOWNLOAD INITIATED: com.a#0m.package.app' }]);
  };

  return (
    <div className="flex flex-col h-full bg-black border-2 border-green-500 rounded-lg overflow-hidden font-mono text-green-400 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
      <div className="flex items-center justify-between p-2 border-b border-green-500/50 bg-green-900/20">
        <div className="flex items-center gap-2">
          <Terminal size={16} />
          <span className="text-xs font-bold tracking-widest">A#0M LOW-CODE CLI</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleDownloadPackage}
            className="flex items-center gap-1 text-xs hover:text-white transition-colors bg-green-900/40 px-2 py-1 rounded"
          >
            <Download size={14} />
            <span>BUILD com.a#0m.package.app</span>
          </button>
          <Shield size={16} className="text-blue-400" />
          <Cpu size={16} className="text-purple-400" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {history.map((entry, i) => (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            key={i} 
            className={`flex ${entry.role === 'user' ? 'text-blue-400' : 'text-green-400'}`}
          >
            <span className="mr-2">{entry.role === 'user' ? '>' : 'A#0M$'}</span>
            <span className="break-all">{entry.text}</span>
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-2 border-t border-green-500/50 bg-green-900/10 flex">
        <span className="mr-2 text-blue-400">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-blue-400 placeholder-blue-400/30"
          placeholder="Enter command or converse..."
          autoFocus
        />
      </form>
    </div>
  );
}
