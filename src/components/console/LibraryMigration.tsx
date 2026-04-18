import { useState, useEffect } from 'react';
import { DownloadCloud, Play, Code2, Server, CheckCircle2, ChevronRight } from 'lucide-react';

export default function LibraryMigration() {
  const [migrationState, setMigrationState] = useState<'IDLE' | 'SCANNING' | 'MIGRATING' | 'COMPLETE'>('IDLE');
  const [log, setLog] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const targets = [
    { name: 'XBOX NETWORK', icon: <Server className="w-8 h-8 text-green-500" /> },
    { name: 'PLAYSTATION NETWORK', icon: <Server className="w-8 h-8 text-blue-500" /> },
    { name: 'STEAM GRID', icon: <Server className="w-8 h-8 text-gray-300" /> },
  ];

  const triggerMigration = () => {
    setMigrationState('SCANNING');
    setLog(['Authenticating external marketplace tokens...', 'Bypassing DRM structures...', 'Handshake complete.']);
    
    setTimeout(() => {
       setMigrationState('MIGRATING');
       let currentProg = 0;
       
       const interval = setInterval(() => {
          currentProg += Math.floor(Math.random() * 8) + 2;
          
          if (currentProg >= 100) {
             currentProg = 100;
             clearInterval(interval);
             setMigrationState('COMPLETE');
             setLog(prev => [...prev, 'ALL DEPENDENCIES SECURED.', 'ANDROID 512-VIRTUALIZATION COMPLETE.']);
          } else {
             const logs = [
               `Transcompiling x86 binaries block ${currentProg}x...`,
               `Rewriting rendering pipeline to 15-Grade Imager...`,
               `Adapting IO to Sovereign Android Controller Protocol...`,
               `Stripping telemetry for offline vaulting...`
             ];
             setLog(prev => [...prev, logs[Math.floor(Math.random() * logs.length)]].slice(-6));
          }
          setProgress(currentProg);
       }, 400);

    }, 2000);
  };

  return (
    <div className="h-full flex px-16 pb-16 gap-10">
       
       {/* Left: Accounts */}
       <div className="w-1/3 flex flex-col gap-6">
          <h2 className="text-4xl font-black uppercase text-white mb-4">Major Label Connectors</h2>
          
          {targets.map(target => (
            <div key={target.name} className="bg-zinc-900 border border-white/5 rounded-3xl p-6 tv-focus flex items-center justify-between group" tabIndex={0}>
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    {target.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold uppercase">{target.name}</h3>
                    <p className="text-gray-500 text-sm font-mono mt-1 group-focus:text-accent transition-colors">Waiting for Sync Request</p>
                  </div>
               </div>
               <ChevronRight className="w-8 h-8 text-gray-600 group-focus:text-white transition-all transform group-focus:translate-x-2" />
            </div>
          ))}

          <button 
             onClick={triggerMigration}
             disabled={migrationState !== 'IDLE'}
             className={`mt-auto tv-focus py-8 rounded-[2rem] font-black text-2xl uppercase tracking-widest flex items-center justify-center gap-4 transition-all ${
               migrationState === 'IDLE' ? 'bg-white text-black hover:scale-[1.02]' : 'bg-gray-800 text-gray-500 opacity-50'
             }`}
             tabIndex={0}
          >
             <DownloadCloud className="w-8 h-8" />
             Initiate Migration Rewrite
          </button>
       </div>

       {/* Right: Compiler Output */}
       <div className="w-2/3 bg-black border border-white/10 rounded-[3rem] p-10 overflow-hidden flex flex-col relative tv-focus" tabIndex={0}>
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/10 flex-shrink-0">
             <div className="flex items-center gap-4">
                <Code2 className="w-10 h-10 text-accent" />
                <h2 className="text-3xl font-black uppercase">Android Rewrite Compiler</h2>
             </div>
             <div className="text-right">
                <div className="text-4xl font-mono font-bold text-white transition-all">{progress}%</div>
                <div className="text-sm font-bold uppercase text-accent tracking-widest">Master Progress</div>
             </div>
          </div>

          <div className="flex-1 font-mono text-xl space-y-4 overflow-y-hidden text-gray-400">
             {migrationState === 'IDLE' && (
               <div className="h-full flex items-center justify-center text-center opacity-30">
                  Awaiting Migration Request.<br/>Ready to transpile foreign architecture.
               </div>
             )}
             
             {log.map((line, i) => (
                <div key={i} className="animate-[slideIn_0.3s_ease-out] flex gap-4">
                   <span className="text-accent">{'>'}</span>
                   <span className={i === log.length - 1 ? 'text-white font-bold' : ''}>{line}</span>
                </div>
             ))}
          </div>

          {migrationState === 'COMPLETE' && (
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center z-10 animate-[fadeIn_0.5s_ease-out]">
               <CheckCircle2 className="w-32 h-32 text-green-500 mb-8 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]" />
               <h1 className="text-6xl font-black uppercase tracking-tighter text-white mb-4">Library Ported Successfully</h1>
               <p className="text-2xl text-gray-400 font-mono text-center max-w-2xl">
                 Mortal Kombat, Street Fighter 6, and 142 other titles have been successfully rewritten and optimized for the A#0M Android TV Kernel.
               </p>
               <button onClick={() => {setMigrationState('IDLE'); setLog([]); setProgress(0);}} className="mt-12 tv-focus bg-accent text-black px-12 py-4 rounded-full font-black uppercase tracking-widest hover:scale-110 transition-transform">
                  Acknowledge
               </button>
            </div>
          )}
       </div>
    </div>
  );
}
