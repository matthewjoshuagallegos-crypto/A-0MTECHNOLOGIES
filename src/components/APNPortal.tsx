/**
 * A#0M APN & Wireless Data Management
 * Copyright (c) 2026 Matthew Joshua Gallegos
 */

import { useState } from 'react';
import WifiIcon from '@mui/icons-material/Wifi';
import RadioIcon from '@mui/icons-material/Radio';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import GppGoodIcon from '@mui/icons-material/GppGood';
import BoltIcon from '@mui/icons-material/Bolt';

export default function APNPortal() {
  const [profiles] = useState([
    { name: 'A#0M USA LTE', apn: 'a0m.lteusa.network', mcc: '310', mnc: '260', type: 'default,mms,supl' },
    { name: 'SKU_HYPER_GATE', apn: 'sku.gate.auth', mcc: '311', mnc: '480', type: 'ia,fota' },
    { name: 'NANO_ENGINEERING', apn: 'nano.lab.private', mcc: '999', mnc: '001', type: 'internal' },
  ]);

  return (
    <div className="p-10 bg-black min-h-full overflow-y-auto custom-scrollbar">
       <header className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-accent mb-2 italic">AURAL SIGNAL ENGINE</h2>
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">APN PROFilling</h1>
        </div>
        <div className="bg-accent/10 border border-accent/20 p-6 rounded-3xl flex items-center gap-6">
           <SignalCellularAltIcon className="w-10 h-10 text-accent animate-pulse" />
           <div>
              <p className="text-[9px] font-black text-white uppercase tracking-widest">Active Uplink</p>
              <p className="text-xl font-black text-accent font-mono leading-none">A#0M_USA_512</p>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
         <div className="space-y-6">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-white mb-8 flex items-center gap-4">
               <RadioIcon className="w-4 h-4 text-accent" /> Configured Profiles
            </h3>
            {profiles.map((p, i) => (
              <div key={i} className="premium-card p-8 bg-zinc-900/20 group hover:border-accent/40 transition-all cursor-pointer">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                       <h4 className="text-lg font-black text-white tracking-tight group-hover:text-accent transition-colors">{p.name}</h4>
                       <p className="text-[10px] font-mono text-gray-500 uppercase">{p.apn}</p>
                    </div>
                    <SettingsIcon className="w-4 h-4 text-gray-700 hover:text-white transition-colors" />
                 </div>
                 <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
                    <div>
                       <p className="text-[8px] font-mono text-gray-500 uppercase mb-1">MCC</p>
                       <p className="text-sm font-bold text-white font-mono">{p.mcc}</p>
                    </div>
                    <div>
                       <p className="text-[8px] font-mono text-gray-500 uppercase mb-1">MNC</p>
                       <p className="text-sm font-bold text-white font-mono">{p.mnc}</p>
                    </div>
                    <div>
                       <p className="text-[8px] font-mono text-gray-500 uppercase mb-1">TYPE</p>
                       <p className="text-[10px] font-bold text-accent font-mono truncate">{p.type.toUpperCase()}</p>
                    </div>
                 </div>
              </div>
            ))}
         </div>

         <div className="space-y-12">
            <div className="p-10 premium-card bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5 grayscale">
                  <WifiIcon className="w-64 h-64" />
               </div>
               <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-2">Carrier Tunneling</h3>
               <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-10">Bypassing legacy routing barriers...</p>
               
               <div className="space-y-4 relative">
                  {[
                    { label: 'Uplink Verification', status: 'SUCCESS' },
                    { label: 'Carrier Handshake', status: 'ENCRYPTED' },
                    { label: 'Proxy Stabilization', status: 'ACTIVE' },
                    { label: 'FCC Compliance Audit', status: 'PASSED' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black/40 border border-white/5 rounded-2xl">
                       <span className="text-[10px] font-black text-white tracking-widest">{row.label.toUpperCase()}</span>
                       <div className="flex items-center gap-3">
                          <GppGoodIcon className="w-3 h-3 text-green-500" />
                          <span className="text-[9px] font-mono text-green-500 font-bold">{row.status}</span>
                       </div>
                    </div>
                  ))}
               </div>

               <button className="w-full mt-10 bg-accent text-black font-black uppercase text-[10px] tracking-[0.2em] py-5 rounded-2xl shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Synchronize Wireless Segment
               </button>
            </div>

            <div className="p-10 border border-white/10 rounded-[40px] bg-zinc-950/50 flex items-center gap-8">
               <div className="p-6 bg-accent/20 rounded-full">
                  <BoltIcon className="w-8 h-8 text-accent animate-pulse" />
               </div>
               <div>
                  <h4 className="text-white font-bold text-lg leading-tight">Hyper-Speed Tuning</h4>
                  <p className="text-[11px] text-gray-500 font-mono italic">Adjusting MTU and RWIN for maximum cellular throughput on the 512-bit kernel.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
