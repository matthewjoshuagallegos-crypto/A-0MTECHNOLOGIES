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

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  Shield, 
  Activity, 
  Lock, 
  Globe, 
  Cpu,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Trash2,
  Download,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { cn } from '../lib/utils';

interface LogEntry {
  id: string;
  timestamp: string;
  level: 'INFO' | 'WARN' | 'CRITICAL' | 'SECURE';
  source: string;
  message: string;
  details?: any;
}

export default function CommandLog() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [levelFilter, setLevelFilter] = useState<string>('ALL');
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mock initial logs
    const initialLogs: LogEntry[] = [
      { id: '1', timestamp: new Date().toISOString(), level: 'SECURE', source: 'GATEWAY', message: '512-Bit Encryption Handshake Successful' },
      { id: '2', timestamp: new Date().toISOString(), level: 'INFO', source: 'SYSTEM', message: 'Android SKU A21S30i19GP13 Node v2026.4 Initialized' },
      { id: '3', timestamp: new Date().toISOString(), level: 'INFO', source: 'APN', message: 'LTE-USA Tunnel Established: a0m.lteusa.network' },
    ];
    setLogs(initialLogs);

    // Simulate incoming logs
    const interval = setInterval(() => {
      const levels: LogEntry['level'][] = ['INFO', 'WARN', 'SECURE'];
      const sources = ['GATEWAY', 'SYSTEM', 'APN', 'FIREWALL', 'DATABASE'];
      const messages = [
        'Packet Inspection Complete',
        'Node Synchronization Active',
        'Heartbeat Detected',
        'Audit Log Rotated',
        'Encryption Key Rotated',
        'Unauthorized Access Attempt Blocked',
        'Resource Allocation Optimized'
      ];

      const newLog: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        level: Math.random() > 0.9 ? 'CRITICAL' : levels[Math.floor(Math.random() * levels.length)],
        source: sources[Math.floor(Math.random() * sources.length)],
        message: messages[Math.floor(Math.random() * messages.length)]
      };

      setLogs(prev => [newLog, ...prev].slice(0, 500));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.message.toLowerCase().includes(filter.toLowerCase()) || 
                         log.source.toLowerCase().includes(filter.toLowerCase());
    const matchesLevel = levelFilter === 'ALL' || log.level === levelFilter;
    return matchesSearch && matchesLevel;
  });

  const downloadLogs = () => {
    const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `a0m_android_logs_${new Date().getTime()}.json`;
    a.click();
  };

  return (
    <div className={cn(
      "premium-card flex flex-col transition-all duration-500",
      isExpanded ? "fixed inset-4 z-50 h-[calc(100vh-32px)]" : "h-[400px]"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-border bg-black/40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
            <Terminal size={20} />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-tighter italic">Android SKU A21S30i19GP13 Command Log</h3>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">A#0M CAPTIVE PORTAL // REAL-TIME AUDIT</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white/5 rounded-lg border border-white/10 px-3 py-1.5">
            <Search size={14} className="text-text-muted mr-2" />
            <input 
              type="text" 
              placeholder="FILTER LOGS..." 
              className="bg-transparent border-none outline-none text-[10px] font-mono uppercase tracking-widest w-32"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          <select 
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest outline-none cursor-pointer"
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="ALL">ALL LEVELS</option>
            <option value="INFO">INFO</option>
            <option value="WARN">WARN</option>
            <option value="CRITICAL">CRITICAL</option>
            <option value="SECURE">SECURE</option>
          </select>

          <button 
            onClick={downloadLogs}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-muted hover:text-accent"
            title="Download Logs"
          >
            <Download size={16} />
          </button>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors text-text-muted hover:text-accent"
          >
            {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Log Body */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-[11px] space-y-1 custom-scrollbar" ref={scrollRef}>
        <AnimatePresence initial={false}>
          {filteredLogs.map((log) => (
            <motion.div 
              key={log.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="group flex items-start gap-4 py-1 border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <span className="text-text-muted shrink-0 w-20">[{new Date(log.timestamp).toLocaleTimeString()}]</span>
              <span className={cn(
                "shrink-0 w-16 font-bold text-center rounded px-1",
                log.level === 'INFO' && "text-blue-400 bg-blue-400/10",
                log.level === 'WARN' && "text-yellow-400 bg-yellow-400/10",
                log.level === 'CRITICAL' && "text-red-400 bg-red-400/10 animate-pulse",
                log.level === 'SECURE' && "text-accent bg-accent/10"
              )}>
                {log.level}
              </span>
              <span className="text-accent-silver shrink-0 w-20">[{log.source}]</span>
              <span className="text-white/80 flex-1">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border bg-black/40 flex items-center justify-between text-[9px] font-mono text-text-muted uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live Stream Active</span>
          </div>
          <span>Total Entries: {logs.length}</span>
          <span>Filtered: {filteredLogs.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={10} className="text-accent" />
          <span>AES-512 SECURED</span>
        </div>
      </div>
    </div>
  );
}
