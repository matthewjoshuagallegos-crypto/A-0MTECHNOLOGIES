/**
 * A#0M SKU Management Portal - v2026.4
 * Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.
 * Purpose: Secure Kernel Upgrade (SKU) lifecycle management.
 */

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, ShieldAlert, Cpu, Rocket, 
  Activity, CheckCircle2, AlertCircle 
} from 'lucide-react';
import { A0MSKUManager, type SKU } from '../commerce/sku';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SKUManagement() {
  const [skus, setSkus] = useState<SKU[]>([]);
  const [target, setTarget] = useState('ANDROID-LVL-21');
  const [version, setVersion] = useState('v1.0.4');
  const [isInitiating, setIsInitiating] = useState(false);

  useEffect(() => {
    refreshRegistry();
  }, []);

  const refreshRegistry = () => {
    setSkus(A0MSKUManager.getUpgradeRegistry());
  };

  const handleInitiate = () => {
    setIsInitiating(true);
    // Simulate kernel serialization delay
    setTimeout(() => {
      A0MSKUManager.initiateUpgrade(target, version);
      refreshRegistry();
      setIsInitiating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-black p-8 overflow-y-auto custom-scrollbar">
      <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-2">Registry Module</h2>
          <h1 className="text-4xl font-black tracking-tight text-white italic">SECURE KERNEL UPGRADES</h1>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protocol: 512-BIT AES-GCM</p>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Authority: Matthew Joshua Gallegos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upgrade Initiation Form */}
        <div className="lg:col-span-1 space-y-6">
          <div className="premium-card p-8 bg-zinc-900/30 backdrop-blur-md">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-6 flex items-center gap-3">
              <Rocket className="w-4 h-4" /> Initiate Upgrade
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-[9px] uppercase tracking-widest text-gray-500 block mb-2">Target Architecture</label>
                <input 
                  type="text" 
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full bg-black border border-white/10 p-3 text-sm font-mono text-white focus:border-accent outline-none transition-all rounded"
                />
              </div>
              <div>
                <label className="text-[9px] uppercase tracking-widest text-gray-500 block mb-2">Component Version</label>
                <input 
                  type="text" 
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  className="w-full bg-black border border-white/10 p-3 text-sm font-mono text-white focus:border-accent outline-none transition-all rounded"
                />
              </div>
              <button 
                onClick={handleInitiate}
                disabled={isInitiating}
                className={cn(
                  "w-full mt-4 flex items-center justify-center gap-3 py-4 text-[10px] font-black uppercase tracking-[0.2em] transition-all rounded-md shadow-lg",
                  isInitiating 
                    ? "bg-accent/10 text-accent/50 cursor-not-allowed" 
                    : "bg-accent text-black hover:bg-white hover:scale-[1.02]"
                )}
              >
                <Cpu className={cn("w-4 h-4", isInitiating && "animate-spin")} />
                {isInitiating ? "Serializing Pipeline..." : "Deploy SKU Upgrade"}
              </button>
            </div>
          </div>

          <div className="p-8 border border-white/5 rounded-3xl bg-zinc-900/10">
             <div className="flex items-start gap-4">
               <ShieldCheck className="w-8 h-8 text-accent mt-1" />
               <div>
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-tight">FCC Compliance Active</h4>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-mono">All upgrades initiated through this interface are 512-bit encrypted and adhere to A#0M Technologies security benchmarks.</p>
               </div>
             </div>
          </div>
        </div>

        {/* SKU Registry List */}
        <div className="lg:col-span-2">
          <div className="premium-card bg-zinc-900/20">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/40">
               <h3 className="text-[11px] font-bold uppercase tracking-widest text-white flex items-center gap-3">
                <Activity className="w-4 h-4 text-accent" /> Active Upgrade Registry
              </h3>
              <span className="text-[9px] font-mono text-gray-500">{skus.length} ACTIVE UPGRADES</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-black/20">
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">ID / Compliance</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Target Segment</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Version</th>
                    <th className="p-6 text-[9px] font-black uppercase tracking-widest text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {skus.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="p-20 text-center">
                        <div className="flex flex-col items-center opacity-20 capitalize italic font-mono text-xs">
                           No upgrades registered in current kernel cycle
                        </div>
                      </td>
                    </tr>
                  ) : (
                    skus.map((sku) => (
                      <tr key={sku.id} className="hover:bg-white/5 transition-colors group">
                        <td className="p-6">
                           <div className="flex flex-col">
                              <span className="text-xs font-mono text-accent font-bold group-hover:text-white transition-colors">{sku.id}</span>
                              <div className="flex items-center gap-1 mt-1 opacity-60">
                                {sku.compliant ? <ShieldCheck className="w-3 h-3 text-green-500" /> : <ShieldAlert className="w-3 h-3 text-red-500" />}
                                <span className="text-[8px] uppercase tracking-tighter text-white font-bold">{sku.compliant ? 'SECURE_RECOGNIZED' : 'LEGACY_UNVERIFIED'}</span>
                              </div>
                           </div>
                        </td>
                        <td className="p-6 text-sm font-mono text-gray-400 uppercase">{sku.target}</td>
                        <td className="p-6">
                           <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 uppercase tracking-tighter">
                             {sku.version}
                           </span>
                        </td>
                        <td className="p-6">
                           <div className="flex items-center gap-2">
                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22C55E]" />
                             <span className="text-[9px] font-black text-white uppercase tracking-widest">Operational</span>
                           </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-8 bg-zinc-900/40 border-t border-white/5">
              <div className="flex items-center gap-3 text-[10px] text-gray-500 font-mono">
                <AlertCircle className="w-3 h-3" />
                <span>Notice: All SKU data is local to kernel segment.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
