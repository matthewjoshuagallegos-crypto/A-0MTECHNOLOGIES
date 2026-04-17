/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL
 * ==========================================
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Smartphone,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function AndroidSystemWebView() {
  const [url, setUrl] = useState('https://www.google.com');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState<string[]>(['https://www.google.com']);
  const [historyIndex, setHistoryIndex] = useState(0);

  const handleNavigate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.startsWith('http')) {
      const secureUrl = `https://${url}`;
      setUrl(secureUrl);
      navigate(secureUrl);
    } else {
      navigate(url);
    }
  };

  const navigate = (newUrl: string) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newUrl);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setUrl(history[historyIndex - 1]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setUrl(history[historyIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0A0A0A] text-zinc-300 font-mono overflow-hidden">
      {/* Chrome Header - Hardware Tool Recipe */}
      <div className="p-4 bg-zinc-900/50 border-b border-white/5 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button 
            disabled={historyIndex === 0}
            onClick={goBack}
            className="p-1.5 hover:bg-white/10 rounded-md disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            disabled={historyIndex === history.length - 1}
            onClick={goForward}
            className="p-1.5 hover:bg-white/10 rounded-md disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
          <button 
            onClick={() => { setIsLoading(true); setTimeout(() => setIsLoading(false), 800); }}
            className="p-1.5 hover:bg-white/10 rounded-md"
          >
            <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
          </button>
        </div>

        <form onSubmit={handleNavigate} className="flex-1 relative group">
          <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={14} />
          <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-[#050505] border border-white/10 rounded-lg pl-9 pr-24 py-2 text-xs font-mono text-white focus:outline-none focus:border-accent/40"
            placeholder="system_url_request..."
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 rounded text-[9px] font-bold text-green-400 border border-green-500/20">
              <Lock size={8} />
              SSL-Verified
            </div>
          </div>
        </form>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-accent tracking-tighter uppercase italic">Android System WebView</span>
            <span className="text-[8px] text-zinc-500 tracking-widest uppercase">com.google.android.webview</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
            <Smartphone size={16} />
          </div>
        </div>
      </div>

      {/* Embedded Viewport */}
      <div className="flex-1 relative bg-black/40 overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-[2px] bg-white/10 overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="w-full h-full bg-accent"
              />
            </div>
            <p className="text-[10px] font-mono tracking-[0.5em] text-accent uppercase animate-pulse">Initializing WebView Instance...</p>
          </div>
        )}

        <div className="h-full w-full overflow-auto">
          {/* Simulated content as real iframes are often blocked by CSP */}
          <div className="p-8 max-w-4xl mx-auto space-y-8">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-4xl font-display font-black tracking-tighter uppercase italic text-white flex items-center gap-3">
                   {url.replace('https://', '').split('/')[0]}
                   <ExternalLink size={24} className="text-accent" />
                </h1>
                <p className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">
                   Request Timestamp: {new Date().toISOString()} | 512-Bit Encrypted Secure Tunnel
                </p>
              </div>
              <div className="p-4 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-sm">
                 <ShieldCheck className="text-accent mb-2" size={32} />
                 <div className="text-[9px] font-mono text-zinc-500 leading-tight uppercase">
                    FCC ID: A21S30I19GP13<br />
                    SECURE ENVIRONMENT<br />
                    KNOX VERIFIED
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="p-6 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-accent/30 transition-all cursor-pointer group">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                    {i === 1 ? <Smartphone size={20} /> : i === 2 ? <Globe size={20} /> : i === 3 ? <Lock size={20} /> : <Info size={20} />}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase mb-1">Android Resource Hub 0{i}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Integrated 512-bit secure delivery for the Wireless World dashboard. 
                    System-level compliance active for Android SKU.
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-accent/5 border border-accent/20 rounded-3xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Smartphone size={120} />
               </div>
               <div className="relative z-10">
                  <h2 className="text-2xl font-black italic tracking-tighter uppercase text-white mb-2">System Broadcast Logic</h2>
                  <p className="text-sm text-zinc-400 max-w-lg leading-relaxed mb-6">
                    This component operates as an installable package for com.google.android.webview, 
                    providing the necessary bridge between web-based interfaces and localized Knox hardware security.
                  </p>
                  <button className="px-6 py-2 bg-accent text-black font-black uppercase text-xs rounded-full hover:scale-105 active:scale-95 transition-transform">
                    Deploy Update Package
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="px-6 py-2 bg-black border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
        <span>ARTIFACT: com.google.android.webview.fcc.compliant.512bit.encryption</span>
        <div className="flex items-center gap-4">
           <span>ENCRYPTION: 512-R4</span>
           <span>STATUS: FEDERATED_SECURE</span>
        </div>
      </div>
    </div>
  );
}
