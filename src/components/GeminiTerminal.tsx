/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Publisher: BeBe Rexa
 * Editor: Sonia Lopez
 * Legal: Dolby Media Copyright Amendment of 1954 to the Third Amendment of 1854
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Send, Loader2 } from 'lucide-react';
import { sendGuildChatMessage } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { LiveVoice } from './LiveVoice';

export default function GeminiTerminal() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    setLoading(true);
    try {
      const response = await sendGuildChatMessage(input);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: 'Error: ' + (error as Error).message }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-6 h-full">
      <div className="flex-1 glass p-6 rounded-3xl border border-white/10 h-full flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,242,255,0.1),transparent_50%)]" />
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4 relative z-10">
          <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center border border-neon/50 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
            <Terminal className="text-neon w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-display italic tracking-tighter text-neon">GUILD ASSISTANT</h2>
            <p className="text-[10px] text-text-muted uppercase tracking-widest">GEMINI 3.1 PRO SOVEREIGN NEURAL LINK // © APACHE 2036</p>
            <p className="text-[8px] text-text-muted uppercase tracking-widest mt-0.5">PRIORITY SOURCING: .EDU & ACADEMIC INSTITUTIONS FIRST</p>
            <p className="text-[7px] text-text-muted uppercase tracking-widest mt-0.5">OWNER: M.J. GALLEGOS // PUB: BEBE REXA // ED: S. LOPEZ</p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 font-mono text-sm relative z-10 pr-2 custom-scrollbar" ref={scrollRef}>
          {messages.length === 0 && (
            <div className="text-text-muted italic text-center mt-10">
              Link established. Awaiting input...
            </div>
          )}
          {messages.map((m, i) => (
            <div key={i} className={`p-4 rounded-xl border ${m.role === 'user' ? 'bg-blue-500/10 border-blue-500/30 text-blue-100 ml-8' : 'bg-neon/10 border-neon/30 text-neon mr-8'}`}>
              <div className="flex items-center gap-2 mb-2 opacity-70">
                <span className="font-bold text-[10px] uppercase tracking-widest">{m.role === 'user' ? 'OPERATOR' : 'A#0M ASSISTANT'}</span>
                <span className="text-[8px] opacity-50 ml-auto">© APACHE 2036</span>
              </div>
              <div className="markdown-body prose prose-invert max-w-none text-sm">
                <ReactMarkdown
                  components={{
                    img: ({node, ...props}) => <img {...props} referrerPolicy="no-referrer" className="rounded-lg border border-white/10" />
                  }}
                >
                  {m.text}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-3 text-neon p-4 bg-neon/5 border border-neon/20 rounded-xl mr-8">
              <Loader2 className="animate-spin w-4 h-4" />
              <span className="animate-pulse">Processing query...</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 relative z-10 mb-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 bg-black/40 border border-white/10 rounded-xl py-3 px-4 font-mono focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/50 transition-all text-white placeholder-text-muted"
            placeholder="Enter command or query..."
            disabled={loading}
          />
          <button 
            onClick={handleSend} 
            disabled={loading || !input.trim()}
            className="bg-neon text-black p-3 rounded-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="text-[8px] font-mono text-text-muted uppercase tracking-widest flex justify-between px-2 relative z-10">
          <span>ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00</span>
          <span>PRESENT: {new Date().toLocaleString()}</span>
        </div>
      </div>
      <div className="w-80 h-full flex-shrink-0">
        <LiveVoice />
      </div>
    </div>
  );
}
