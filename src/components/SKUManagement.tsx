/**
 * A#0M SKU Management Portal - v2026.4
 * Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.
 * Purpose: Secure Kernel Upgrade (SKU) lifecycle management.
 */

import { useState, useEffect } from 'react';
import GppGoodIcon from '@mui/icons-material/GppGood';
import SecurityUpdateWarningIcon from '@mui/icons-material/SecurityUpdateWarning';
import MemoryIcon from '@mui/icons-material/Memory';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
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
      <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8 relative">
        <div className="absolute top-0 right-0 p-1 bg-accent/20 text-accent text-[8px] font-black uppercase tracking-widest">Sector: Registry</div>
        <div>
          <p className="sourcing-label mb-2">Registry Module</p>
          <h1 className="text-5xl font-black tracking-tighter text-white uppercase font-display">Kernel Upgrades</h1>
        </div>
        <div className="text-right flex flex-col items-end gap-1">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protocol: 512-BIT AES-GCM</p>
          <p className="text-[10px] font-mono text-accent uppercase tracking-widest">Authority: Matthew Joshua Gallegos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upgrade Initiation Form */}
        <div className="lg:col-span-1 space-y-6">
          <div className="instrument-border p-8 bg-zinc-950/20">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] mb-8 flex items-center gap-3">
              <RocketLaunchIcon className="w-4 h-4" /> Initiate Upgrade
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-[8px] uppercase tracking-[0.2em] text-gray-500 block mb-3 font-black">Target Architecture</label>
                <input 
                  type="text" 
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                  className="w-full bg-black border border-white/5 p-4 text-xs font-mono text-white focus:border-accent/40 outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-[8px] uppercase tracking-[0.2em] text-gray-500 block mb-3 font-black">Component Version</label>
                <input 
                  type="text" 
                  value={version}
                  onChange={(e) => setVersion(e.target.value)}
                  className="w-full bg-black border border-white/5 p-4 text-xs font-mono text-white focus:border-accent/40 outline-none transition-all"
                />
              </div>
              <button 
                onClick={handleInitiate}
                disabled={isInitiating}
                className={cn(
                  "w-full mt-4 flex items-center justify-center gap-4 py-5 font-black uppercase tracking-[0.4em] transition-all text-[10px]",
                  isInitiating 
                    ? "bg-accent/5 text-accent/30 cursor-not-allowed border border-white/5" 
                    : "bg-accent text-black hover:bg-white active:scale-[0.98]"
                )}
              >
                <MemoryIcon className={cn("w-4 h-4", isInitiating && "animate-spin")} />
                {isInitiating ? "Serializing..." : "Deploy SKU"}
              </button>
            </div>
          </div>

          <div className="p-8 instrument-border bg-zinc-950/10">
             <div className="flex items-start gap-4">
               <GppGoodIcon className="w-8 h-8 text-accent/50 mt-1" />
               <div>
                  <h4 className="text-white font-black text-[10px] mb-2 uppercase tracking-widest leading-none">FCC Compliance Active</h4>
                  <p className="text-[10px] text-gray-600 leading-relaxed font-mono italic">All upgrades are 512-bit encrypted and adhere to Matthew's 2026 security benchmarks.</p>
               </div>
             </div>
          </div>
        </div>

        {/* SKU Registry List */}
        <div className="lg:col-span-2">
          <div className="instrument-border bg-zinc-950/20">
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-black/40">
               <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white flex items-center gap-3">
                <ShowChartIcon className="w-4 h-4 text-accent" /> Upgrade Registry
              </h3>
              <span className="text-[10px] font-mono text-gray-600 font-bold uppercase tracking-widest">{skus.length} Active Segments</span>
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
                                {sku.compliant ? <GppGoodIcon className="w-3 h-3 text-green-500" /> : <SecurityUpdateWarningIcon className="w-3 h-3 text-red-500" />}
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
                <ErrorIcon className="w-3 h-3" />
                <span>Notice: All SKU data is local to kernel segment.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
