/**
 * A#0M Messenger - Courier Stream Interface
 * Copyright (c) 2026 Matthew Joshua Gallegos
 */

import { useState } from 'react';
import { Send, User, MessageSquare, Terminal, Eye, MoreHorizontal } from 'lucide-react';

export default function Messenger() {
  const [messages] = useState([
    { user: 'MATTHEW GALLEGOS', role: 'AUTHORITY', text: '512-bit encryption handshake successful in current segment.', time: '14:20' },
    { user: 'VAI_INTEL', role: 'INTELLIGENCE', text: 'Registry mapping complete. Trend analysis suggest high-volatility in the Wireless sector.', time: '14:22' },
    { user: 'SKU_MANAGER', role: 'SYSTEM', text: 'New SKU initiated for ANDROID-LVL-21 target.', time: '14:25' },
    { user: 'GUEST_SOVEREIGN', role: 'USER', text: 'Confirmed. Data packet received through secure tunnel.', time: '14:30' },
  ]);

  return (
    <div className="p-10 bg-black h-full flex flex-col">
      <header className="mb-12 flex justify-between items-end border-b border-white/5 pb-8">
        <div>
          <p className="sourcing-label mb-2">Segment: Messenger-Link</p>
          <h1 className="text-5xl font-black text-white tracking-tighter uppercase font-display">Courier Stream</h1>
        </div>
        <div className="flex gap-8">
           <div className="text-right">
              <p className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center justify-end gap-2">
                 <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" /> Channel: Encrypted
              </p>
              <p className="text-[8px] font-mono text-gray-600 mt-1 italic">Handshake: 0xFF2A1C</p>
           </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-10 pr-6 mb-10">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-8 group">
             <div className="w-px bg-white/5 relative">
                <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-accent/40" />
             </div>
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                   <h5 className="text-[10px] font-black text-white tracking-[0.3em] uppercase">{msg?.user}</h5>
                   <div className="h-px flex-1 bg-white/5" />
                   <span className="text-[8px] font-mono text-gray-700 italic">{msg?.time}</span>
                </div>
                <div className="p-8 bg-zinc-950/20 instrument-border group-hover:bg-zinc-950/40 transition-all duration-500">
                   <p className="text-[13px] text-gray-400 font-mono leading-relaxed tracking-tight">{msg?.text || ''}</p>
                </div>
                <div className="mt-2 flex gap-4">
                   <span className="text-[7px] font-mono text-accent/40 uppercase tracking-widest">Target: {msg?.role}</span>
                </div>
             </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-zinc-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 flex items-center gap-4">
         <div className="p-3 bg-black rounded-2xl text-accent border border-white/5">
            <Terminal className="w-5 h-5" />
         </div>
         <input 
           type="text" 
           placeholder="Broadcast to Courier Stream..." 
           className="flex-1 bg-transparent text-sm font-mono text-white outline-none px-4"
         />
         <button className="p-4 bg-accent text-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Send className="w-5 h-5" />
         </button>
      </div>
    </div>
  );
}
