import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Terminal, 
  Activity, 
  Lock, 
  Cpu, 
  List, 
  Search, 
  Download, 
  RefreshCw,
  Eye,
  Settings,
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

interface AuditLogEntry {
  timestamp: string;
  level: 'INFO' | 'WARN' | 'CRITICAL';
  ip: string;
  message: string;
}

export default function A0M_SecurityIntelligenceCenter({ isKnoxSecured }: { isKnoxSecured?: boolean }) {
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'ALL' | 'INFO' | 'WARN' | 'CRITICAL'>('ALL');
  const [search, setSearch] = useState('');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const fetchLogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/audit/logs');
      const data = await response.json();
      
      const parsedLogs: AuditLogEntry[] = data.logs
        .split('\n')
        .filter((line: string) => line.trim())
        .map((line: string) => {
          const match = line.match(/\[(.*?)\] \[(.*?)\] \[IP: (.*?)\] (.*)/);
          if (match) {
            return {
              timestamp: match[1],
              level: match[2],
              ip: match[3],
              message: match[4]
            };
          }
          return null;
        })
        .filter((l: any) => l !== null);
      
      setLogs(parsedLogs.reverse()); // Latest first
    } catch (e) {
      console.error('Failed to fetch audit logs:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
    let interval: NodeJS.Timeout;
    if (autoRefresh) {
      interval = setInterval(fetchLogs, 10000);
    }
    return () => clearInterval(interval);
  }, [autoRefresh]);

  const filteredLogs = logs.filter(log => {
    const matchesFilter = filter === 'ALL' || log.level === filter;
    const matchesSearch = log.message.toLowerCase().includes(search.toLowerCase()) || 
                          log.ip.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full bg-[#030303] text-zinc-300 font-mono">
      {/* Security Status Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-900/40 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
            <ShieldCheck className="text-emerald-500" size={20} />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white uppercase tracking-tighter">Security Intelligence Center</h2>
            <div className="flex items-center gap-3 text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Nodes Secure</span>
              <span className="flex items-center gap-1"><Lock size={10} className="text-accent" /> 512-Bit Active</span>
              <span className="flex items-center gap-1 text-zinc-600">Compliance: Android SKU A21S30i19GP13</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
            <Clock size={14} className="text-zinc-500" />
            <span className="text-[10px] font-bold text-white">{new Date().toLocaleTimeString()}</span>
          </div>
          <button 
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={cn(
              "p-2 rounded-lg border transition-all",
              autoRefresh ? "bg-accent/20 border-accent/40 text-accent" : "bg-white/5 border-white/10 text-zinc-500"
            )}
            title="Auto-refresh"
          >
            <RefreshCw size={18} className={autoRefresh ? "animate-spin-slow" : ""} />
          </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
        {/* Sidebar: Stats & Metrics */}
        <div className="lg:col-span-1 border-r border-white/5 p-6 space-y-8 overflow-y-auto custom-scrollbar bg-black/40">
          <section>
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Security Overview</h3>
            <div className="grid grid-cols-1 gap-4">
              <LogStatCard 
                label="Critical Events" 
                value={logs.filter(l => l.level === 'CRITICAL').length.toString()} 
                color="text-red-500"
                icon={<ShieldAlert size={16} />} 
              />
              <LogStatCard 
                label="Active Blocks" 
                value="12" 
                color="text-amber-500"
                icon={<AlertCircle size={16} />} 
              />
              <LogStatCard 
                label="Encrypted Uptime" 
                value="4d 12h" 
                color="text-accent"
                icon={<Activity size={16} />} 
              />
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">System Components</h3>
            <div className="space-y-3">
              <ComponentStatus label="Web App Firewall (WAF)" status="Operational" />
              <ComponentStatus label="Rate Limiter" status="Operational" />
              <ComponentStatus label="File Integrity (FIM)" status="Operational" />
              <ComponentStatus label="Knox Hardware" status={isKnoxSecured ? "Upgraded" : "Standard"} />
              <ComponentStatus label="Neural Kernel" status="Secured" />
              <ComponentStatus label="512-Bit Cipher" status="Active" />
            </div>
          </section>

          <section>
            <h3 className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-4">Legal Compliance</h3>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <div className="text-[9px] text-zinc-500 leading-relaxed uppercase">
                THIS SYSTEM IS SUBJECT TO THE FEDERAL COMMUNICATIONS COMMISSION (FCC) ACT OF 2026. ALL TELEMETRY IS LOGGED IN COMPLIANCE WITH DOLBY MEDIA COPYRIGHT AMENDMENT.
              </div>
              <button className="flex items-center justify-between w-full p-2 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-all">
                <span className="text-[10px] font-bold flex items-center gap-2 uppercase"><Eye size={12} /> View Manifest</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </section>
        </div>

        {/* Main Log Terminal */}
        <div className="lg:col-span-3 flex flex-col overflow-hidden bg-[#050505]">
          {/* Filters & Search */}
          <div className="flex items-center justify-between gap-4 p-4 border-b border-white/5">
            <div className="flex items-center gap-2 p-1 bg-white/5 rounded-xl border border-white/5">
              {(['ALL', 'INFO', 'WARN', 'CRITICAL'] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setFilter(lvl)}
                  className={cn(
                    "px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all uppercase tracking-widest",
                    filter === lvl ? "bg-accent text-black shadow-lg" : "text-zinc-500 hover:text-white"
                  )}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
              <input 
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="SEARCH IP OR MESSAGE..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-9 py-2 text-[10px] font-mono text-white placeholder:text-zinc-700 focus:outline-none focus:border-accent/40"
              />
            </div>
            <button 
              onClick={fetchLogs}
              className="p-2 bg-white/5 border border-white/10 rounded-xl text-zinc-400 hover:text-white transition-all"
            >
              <RefreshCw size={18} className={isLoading ? "animate-spin" : ""} />
            </button>
          </div>

          {/* Logs List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar font-mono">
            {filteredLogs.length > 0 ? (
              filteredLogs.map((log, idx) => (
                <motion.div 
                  key={`${log.timestamp}-${idx}`}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "grid grid-cols-[160px_80px_140px_1fr] gap-4 p-3 rounded-xl border transition-all text-[11px]",
                    log.level === 'CRITICAL' ? "bg-red-500/10 border-red-500/20 text-red-200" :
                    log.level === 'WARN' ? "bg-amber-500/10 border-amber-500/20 text-amber-200" :
                    "bg-white/5 border-white/5 text-zinc-300"
                  )}
                >
                  <span className="text-zinc-600 font-bold tracking-tighter">{log.timestamp}</span>
                  <span className={cn(
                    "font-black uppercase tracking-widest px-2 py-0.5 rounded text-[9px] w-fit",
                    log.level === 'CRITICAL' ? "bg-red-500 text-white" :
                    log.level === 'WARN' ? "bg-amber-500 text-black" :
                    "bg-emerald-500/20 text-emerald-400"
                  )}>{log.level}</span>
                  <span className="text-zinc-500 font-bold">{log.ip}</span>
                  <span className="break-words font-medium">{log.message}</span>
                </motion.div>
              ))
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-zinc-600 space-y-4">
                <Terminal size={48} className="opacity-10" />
                <p className="text-[10px] uppercase tracking-[0.5em]">No log entries detected matching criteria</p>
              </div>
            )}
            <div ref={logsEndRef} />
          </div>

          <div className="p-4 bg-[#080808] border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
            <div className="flex gap-4">
              <span>Artifact ID: com.a#0m.secure.audit_v2</span>
              <span>Total Entries: {logs.length}</span>
            </div>
            <div className="flex items-center gap-1 text-accent animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              Intelligence Core Connected
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogStatCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-default">
      <div className="flex items-center justify-between mb-4">
        <div className={cn("p-1.5 rounded-lg bg-black/40 border border-white/10", color)}>
          {icon}
        </div>
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">REAL-TIME</div>
      </div>
      <div className={cn("text-2xl font-black italic tracking-tighter mb-1", color)}>
        {value}
      </div>
      <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{label}</div>
    </div>
  );
}

function ComponentStatus({ label, status }: { label: string, status: string }) {
  const isHealthy = status === 'Operational' || status === 'Secured' || status === 'Active' || status === 'Upgraded';
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{label}</span>
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-[9px] font-black uppercase tracking-widest",
          isHealthy ? "text-emerald-500" : "text-red-500"
        )}>{status}</span>
        <div className={cn(
          "w-1.5 h-1.5 rounded-full shadow-[0_0_8px]",
          isHealthy ? "bg-emerald-500 shadow-emerald-500/50" : "bg-red-500 shadow-red-500/50"
        )} />
      </div>
    </div>
  );
}
