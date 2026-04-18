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
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-accent mb-2">Courier Stream</h2>
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">Authority Comms</h1>
        </div>
        <div className="flex gap-4">
           <div className="flex flex-col items-end">
              <p className="text-[9px] font-black text-green-500 uppercase flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Stream: Encrypted
              </p>
              <p className="text-[8px] font-mono text-gray-500">Latency: 1.4ms</p>
           </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto custom-scrollbar space-y-8 pr-6 mb-10">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-6 group">
             <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black ${
               msg?.role === 'AUTHORITY' ? 'bg-accent text-black' : msg?.role === 'INTELLIGENCE' ? 'bg-white/10 text-white' : 'bg-zinc-900 text-gray-500'
             }`}>
                {msg?.user?.[0]}
             </div>
             <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                   <h5 className="text-sm font-black text-white tracking-widest">{msg?.user}</h5>
                   <span className="text-[8px] font-mono bg-white/5 px-2 py-0.5 rounded text-gray-500 uppercase tracking-tighter border border-white/5">{msg?.role}</span>
                   <span className="text-[9px] font-mono text-gray-700 ml-auto">{msg?.time}</span>
                </div>
                <div className="p-6 bg-zinc-900/30 rounded-3xl border border-white/5 group-hover:border-accent/20 transition-all">
                   <p className="text-sm text-gray-400 font-mono leading-relaxed">{msg?.text || ''}</p>
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
