/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * ==========================================
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Cpu, 
  Database, 
  Globe, 
  ShieldCheck, 
  Clock,
  Users
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SystemStatus {
  cpuUsage: string;
  memUsage: string;
  uptime: number;
  activeConnections: number;
  apnStatus: string;
}

export default function SystemMonitor({ status, wsStatus, onSync }: { status: SystemStatus | null, wsStatus: string, onSync: () => void }) {
  const formatUptime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return `${h}h ${m}m ${s}s`;
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-6 border-b border-border bg-accent/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center border transition-colors",
            wsStatus === 'connected' ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-500" :
            wsStatus === 'connecting' ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-500" :
            "bg-red-500/20 border-red-500/50 text-red-500"
          )}>
            <Activity size={20} className={cn(wsStatus === 'connecting' && "animate-pulse")} />
          </div>
          <div>
            <h3 className="font-bold text-lg uppercase tracking-tighter">Sovereign System Monitor</h3>
            <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
              Real-time WebSocket Telemetry
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onSync}
            disabled={wsStatus !== 'connected'}
            className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-lg text-[10px] font-bold text-accent uppercase tracking-widest hover:bg-accent/20 transition-all disabled:opacity-50"
          >
            Broadcast Sync
          </button>
          <div className="flex items-center gap-2">
            <div className={cn("w-2 h-2 rounded-full", wsStatus === 'connected' ? "bg-emerald-500" : "bg-red-500")} />
            <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">{wsStatus}</span>
          </div>
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard 
          icon={<Cpu size={16} />} 
          label="CPU Load" 
          value={status ? `${status.cpuUsage}%` : '---'} 
          trend={status ? (parseFloat(status.cpuUsage) > 10 ? 'up' : 'down') : null}
        />
        <StatusCard 
          icon={<Database size={16} />} 
          label="Memory" 
          value={status ? `${status.memUsage}%` : '---'} 
        />
        <StatusCard 
          icon={<Users size={16} />} 
          label="Active Nodes" 
          value={status ? `${status.activeConnections}` : '---'} 
        />
        <StatusCard 
          icon={<Clock size={16} />} 
          label="Uptime" 
          value={status ? formatUptime(status.uptime) : '---'} 
        />
      </div>

      <div className="px-6 pb-6">
        <div className="p-4 bg-black/40 border border-white/10 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Globe className="text-accent" size={18} />
            <div>
              <p className="text-[10px] font-mono text-text-muted uppercase">APN Tunnel Status</p>
              <p className="text-xs font-bold text-white">{status?.apnStatus || 'INITIALIZING...'}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-500">
            <ShieldCheck size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">AES-512 Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ icon, label, value, trend }: { icon: React.ReactNode, label: string, value: string, trend?: 'up' | 'down' | null }) {
  return (
    <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
      <div className="flex items-center justify-between text-text-muted">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-[9px] font-mono uppercase tracking-widest">{label}</span>
        </div>
        {trend && (
          <div className={cn("text-[10px] font-bold", trend === 'up' ? "text-red-400" : "text-emerald-400")}>
            {trend === 'up' ? '↑' : '↓'}
          </div>
        )}
      </div>
      <div className="text-xl font-black italic tracking-tighter text-white">
        {value}
      </div>
    </div>
  );
}
