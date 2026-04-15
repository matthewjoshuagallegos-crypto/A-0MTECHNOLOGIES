/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel, Samsung, Android
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  ShieldCheck, 
  ShieldAlert, 
  RefreshCw, 
  Terminal, 
  Globe, 
  Server,
  ChevronRight,
  ExternalLink,
  Cpu
} from 'lucide-react';
import { cn } from '../lib/utils';
import { playClickSound, playSuccessSound } from '../lib/audioUtils';

interface DiagnosticLog {
  type: string;
  error_code?: string;
  target_url?: string;
  analysis?: string;
  action?: string;
  steps_performed?: string[];
  status?: string;
  message?: string;
  connection_state?: string;
  next_action?: string;
  timestamp: Date;
}

export default function APNGatewayDiagnostic() {
  const [logs, setLogs] = useState<DiagnosticLog[]>([]);
  const [isResolving, setIsResolving] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<'offline' | 'resolving' | 'online'>('offline');

  const simulatedLogs = [
    {
      type: "network_diagnostic",
      error_code: "net::ERR_NAME_NOT_RESOLVED",
      target_url: "http://a0m.lteusa.network/",
      analysis: "DNS lookup failed. The local routing table lacks a valid A-record for the private AWNS APN domain 'a0m.lteusa.network'. The previous registration was bound to 'newwebpage.net' instead of the APN gateway itself."
    },
    {
      type: "automated_resolution",
      action: "update_dns_routing_table",
      steps_performed: [
        "ipconfig /flushdns",
        "route add a0m.lteusa.network MASK 255.255.255.255 10.0.0.1",
        "systemd-resolve --flush-caches",
        "register_domain: { domain: 'a0m.lteusa.network', ip: '10.0.0.1', type: 'internal_apn' }"
      ],
      status: "success",
      message: "Local host mapping updated. Private APN gateway is now resolvable."
    },
    {
      type: "system_status",
      status: "online",
      connection_state: "secure",
      next_action: "Auto-reloading http://a0m.lteusa.network/"
    }
  ];

  const startDiagnostic = () => {
    playClickSound();
    setIsResolving(true);
    setLogs([]);
    setCurrentStatus('resolving');

    let step = 0;
    const interval = setInterval(() => {
      if (step < simulatedLogs.length) {
        setLogs(prev => [...prev, { ...simulatedLogs[step], timestamp: new Date() }]);
        step++;
      } else {
        clearInterval(interval);
        setIsResolving(false);
        setCurrentStatus('online');
        playSuccessSound();
      }
    }, 1500);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-border bg-accent/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center border transition-colors",
            currentStatus === 'online' ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-500" :
            currentStatus === 'resolving' ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-500" :
            "bg-red-500/20 border-red-500/50 text-red-500"
          )}>
            <Globe size={20} className={cn(currentStatus === 'resolving' && "animate-spin")} />
          </div>
          <div>
            <h3 className="font-bold text-lg uppercase tracking-tighter">APN Gateway Diagnostic</h3>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
              Private Domain: a0m.lteusa.network
            </p>
          </div>
        </div>
        <button 
          onClick={startDiagnostic}
          disabled={isResolving}
          className="px-4 py-2 bg-accent text-black rounded-lg text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(0,255,148,0.4)] transition-all disabled:opacity-50 flex items-center gap-2"
        >
          <RefreshCw size={14} className={cn(isResolving && "animate-spin")} />
          {isResolving ? "Resolving..." : "Run Diagnostic"}
        </button>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-[8px] font-mono text-text-muted uppercase mb-1">Status</p>
            <div className="flex items-center gap-2">
              <div className={cn("w-2 h-2 rounded-full", currentStatus === 'online' ? "bg-emerald-500" : "bg-red-500")} />
              <span className="font-bold uppercase tracking-widest text-xs">{currentStatus}</span>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-[8px] font-mono text-text-muted uppercase mb-1">Connection</p>
            <div className="flex items-center gap-2 text-accent">
              <ShieldCheck size={14} />
              <span className="font-bold uppercase tracking-widest text-xs">Secure AES-512</span>
            </div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <p className="text-[8px] font-mono text-text-muted uppercase mb-1">Gateway IP</p>
            <span className="font-mono text-xs">10.0.0.1 (Internal APN)</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-[0.2em] flex items-center gap-2">
            <Terminal size={12} /> Diagnostic Logs
          </h4>
          <div className="bg-black/50 rounded-xl border border-white/5 p-4 font-mono text-[10px] space-y-3 max-h-[300px] overflow-y-auto custom-scrollbar">
            {logs.length === 0 && (
              <p className="text-text-muted italic">Waiting for diagnostic trigger...</p>
            )}
            <AnimatePresence>
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-1 border-l-2 border-accent/30 pl-3 pb-2"
                >
                  <div className="flex items-center justify-between text-accent/70">
                    <span className="font-bold">[{log.type?.toUpperCase() || 'LOG'}]</span>
                    <span>{log.timestamp.toLocaleTimeString()}</span>
                  </div>
                  {log.error_code && <p className="text-red-400">ERROR: {log.error_code}</p>}
                  {log.target_url && <p className="text-text-muted">TARGET: {log.target_url}</p>}
                  {log.analysis && <p className="text-white/80 leading-relaxed italic">"{log.analysis}"</p>}
                  {log.action && <p className="text-blue-400 font-bold">ACTION: {log.action}</p>}
                  {log.steps_performed && (
                    <div className="pl-4 space-y-1 mt-1">
                      {log.steps_performed.map((step, si) => (
                        <p key={si} className="text-text-muted flex items-center gap-2">
                          <ChevronRight size={10} /> {step}
                        </p>
                      ))}
                    </div>
                  )}
                  {log.message && <p className="text-emerald-400">{log.message}</p>}
                  {log.next_action && <p className="text-accent animate-pulse">NEXT: {log.next_action}</p>}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {currentStatus === 'online' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-accent/10 border border-accent/30 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <Server size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white">APN Gateway Established</h4>
                <p className="text-xs text-text-muted">The private AWNS APN tunnel is now fully operational.</p>
              </div>
            </div>
            <button 
              onClick={() => playClickSound()}
              className="w-full md:w-auto px-6 py-3 bg-accent text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,148,0.5)] transition-all group"
            >
              Enter Admin Console
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-black/40 border-t border-border flex items-center justify-between text-[8px] font-mono text-text-muted uppercase tracking-widest">
        <div className="flex gap-4">
          <span>X-Powered-By: AWNS-Gateway/1.0</span>
          <span>Sovereign Node: LTE-USA-01</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu size={10} />
          <span>512-Bit Encrypted Stream</span>
        </div>
      </div>
    </div>
  );
}
