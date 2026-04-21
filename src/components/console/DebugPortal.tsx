import { useState, useEffect } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SyncIcon from '@mui/icons-material/Sync';
import { useA0M } from '../../core/A0MContext';

export default function DebugPortal() {
  const { state } = useA0M();
  const [lastSync, setLastSync] = useState(new Date().toLocaleTimeString());

  // Force refresh of state display
  const refresh = () => setLastSync(new Date().toLocaleTimeString());

  return (
    <div className="h-full bg-black p-10 flex flex-col gap-8 font-mono">
       <div className="flex justify-between items-center border-b border-white/10 pb-6">
          <h2 className="text-3xl font-black uppercase tracking-widest text-white flex items-center gap-4">
             <SecurityIcon className="w-8 h-8 text-accent" /> Sovereign DebugPortal
          </h2>
          <button onClick={refresh} className="flex items-center gap-2 bg-accent/20 text-accent px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-accent hover:text-black">
             <SyncIcon className="w-4 h-4" /> Refresh Kernel State
          </button>
       </div>

       <div className="grid grid-cols-2 gap-8 flex-1">
          {/* Kernel State */}
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/5">
             <h3 className="text-xs font-black uppercase text-gray-500 mb-6 flex items-center gap-2">
                <MemoryIcon className="w-4 h-4" /> Runtime State
             </h3>
             <pre className="text-xs text-accent whitespace-pre-wrap">
                {JSON.stringify(state, null, 2)}
             </pre>
          </div>

          {/* VFS Audit */}
          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/5">
             <h3 className="text-xs font-black uppercase text-gray-500 mb-6 flex items-center gap-2">
                <StorageIcon className="w-4 h-4" /> VFS Audit Log
             </h3>
             <div className="text-[10px] text-gray-400 space-y-2">
                <p>[INIT] Kernel Mount Point: /sec/alpha</p>
                <p>[OK] {state.ide.activeFile || 'No file locked'}</p>
                <p>[SYNC] Vault Commit: A#0M-Vault-SECURE-2026.4</p>
                <p className="text-accent underline">Last refresh: {lastSync}</p>
             </div>
          </div>
       </div>
    </div>
  );
}
