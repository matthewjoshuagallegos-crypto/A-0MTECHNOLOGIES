import { useState } from 'react';
import { Package as PackageIcon, Zap, Cpu, Terminal, CheckCircle2, Loader2, HardDrive, Share2 } from 'lucide-react';
import { useA0M } from '../../core/A0MContext';

export default function BuildStation() {
  const { isSaving } = useA0M();
  const [buildStep, setBuildStep] = useState<'IDLE' | 'COMPRESSING' | 'COOKING' | 'PACKAGING' | 'DEPLOYING' | 'SUCCESS'>('IDLE');
  const [logs, setLog] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const startBuild = () => {
    setBuildStep('COMPRESSING');
    setLog(['Initiating ASTC Texture Compression...', 'Optimizing Substance/ZBrush assets for ARM64-V8A...']);
    
    // Step 1: ASTC
    setTimeout(() => {
      setBuildStep('COOKING');
      setLog(p => [...p, 'ASTC COMPLETE.', 'Cooking Content: Baking UE4 Photorealistic Shaders...', 'Compiling C++ RealmsFighter Kernels...']);
      
      // Step 2: Cooking
      setTimeout(() => {
        setBuildStep('PACKAGING');
        setLog(p => [...p, 'COOKING COMPLETE.', 'Generating Android App Bundle (.aab)...', 'Signing com.lteenterprise.realmscollide...']);
        
        // Step 3: Packaging
        setTimeout(() => {
          setBuildStep('DEPLOYING');
          setLog(p => [...p, 'PACKAGING COMPLETE.', 'Establishing ADB Bridge (Port 5555)...', 'Command Exec: adb install -r RealmsCollide.apk']);
          
          // Step 4: ADB Deployment
          setTimeout(() => {
            setBuildStep('SUCCESS');
            setLog(p => [...p, 'DEPLOYMENT SUCCESSFUL.', 'Realms Collide is live on LTE Enterprise Console.']);
          }, 2500);

        }, 2000);
      }, 2000);
    }, 2000);

    // Progress bar simulation
    let p = 0;
    const interval = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p >= 100) clearInterval(interval);
    }, 85);
  };

  return (
    <div className="h-full flex px-16 pb-16 gap-10">
       
       {/* Instruction Panel */}
       <div className="w-1/3 flex flex-col gap-6">
          <h2 className="text-4xl font-black uppercase text-white mb-4">Pipeline Protocol</h2>
          
          <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 tv-focus" tabIndex={0}>
             <h3 className="text-xl font-black text-accent uppercase mb-4 flex items-center gap-3">
                <Cpu className="w-6 h-6" /> ASTC Compression
             </h3>
             <p className="text-gray-400 font-mono text-sm leading-relaxed">
                Standard format for modern TV chips. Ensures high-res ZBrush/Substance textures remain crisp without exhausting the console's RAM.
             </p>
          </div>

          <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 tv-focus" tabIndex={0}>
             <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-3">
                <Terminal className="w-6 h-6" /> ADB Sideloading
             </h3>
             <p className="text-gray-400 font-mono text-sm leading-relaxed">
                Developer Protocol: Connect via Android Debug Bridge and execute <span className="text-accent">adb install -r</span> to push the APK to the enterprise node.
             </p>
          </div>

          <button 
            disabled={buildStep !== 'IDLE'}
            onClick={startBuild}
            className={`mt-auto p-10 rounded-[2.5rem] font-black text-3xl uppercase tracking-widest flex items-center justify-center gap-6 transition-all shadow-2xl ${
                buildStep === 'IDLE' ? 'bg-white text-black hover:scale-105' : 'bg-zinc-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            {buildStep === 'IDLE' ? (
              <><Zap className="w-10 h-10 fill-current" /> Build APK</>
            ) : (
              <><Loader2 className="w-10 h-10 animate-spin" /> {buildStep}...</>
            )}
          </button>
       </div>

       {/* Deployment Console */}
       <div className="w-2/3 bg-black border border-white/10 rounded-[3.5rem] p-12 flex flex-col relative overflow-hidden tv-focus" tabIndex={0}>
          <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-10">
             <div className="flex items-center gap-6">
                <div className={`p-5 rounded-2xl ${buildStep === 'SUCCESS' ? 'bg-green-500' : 'bg-accent'} text-black shadow-lg`}>
                  {buildStep === 'SUCCESS' ? <CheckCircle2 className="w-10 h-10" /> : <PackageIcon className="w-10 h-10" />}
                </div>
                <div>
                   <h3 className="text-3xl font-black uppercase tracking-tight">Deployment Terminal</h3>
                   <p className="text-gray-500 font-mono">Status: {buildStep}</p>
                </div>
             </div>
             <div className="text-right">
                <div className="text-5xl font-mono font-black text-white">{progress}%</div>
                <p className="text-accent font-black text-xs uppercase tracking-widest mt-2">Baking Assets</p>
             </div>
          </div>

          <div className="flex-1 font-mono text-xl space-y-4 overflow-y-hidden text-gray-400">
             {logs.map((l, i) => (
                <div key={i} className="flex gap-4 animate-[slideIn_0.2s_ease-out]">
                   <span className="text-blue-500 font-bold">[*]</span>
                   <span className={i === logs.length - 1 ? 'text-white' : ''}>{l}</span>
                </div>
             ))}
             {buildStep === 'IDLE' && (
                <div className="h-full flex flex-col items-center justify-center opacity-20">
                   <HardDrive className="w-32 h-32 mb-6" />
                   <p className="text-center">Awaiting Build Trigger...<br/>Ready to cook Android (ASTC) content</p>
                </div>
             )}
          </div>

          {buildStep === 'SUCCESS' && (
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center animate-[fadeIn_0.5s_ease-out] z-20">
               <div className="w-40 h-40 bg-green-500 rounded-full flex items-center justify-center mb-10 shadow-[0_0_60px_rgba(34,197,94,0.4)]">
                 <Share2 className="w-20 h-20 text-black translate-x-1" />
               </div>
               <h1 className="text-7xl font-black uppercase tracking-widest text-white mb-6">Device Ready</h1>
               <p className="text-3xl text-gray-300 font-mono text-center max-w-3xl leading-relaxed">
                 Realms Collide successfully sideloaded to the LTE Enterprise TV Node. 
                 <br/><span className="text-accent">ASTC Textures Live // Controller Ready.</span>
               </p>
               <button onClick={() => {setBuildStep('IDLE'); setLog([]); setProgress(0);}} className="mt-16 bg-white text-black px-16 py-6 rounded-full font-black text-2xl uppercase tracking-widest hover:scale-110 transition-transform">
                  Close Terminal
               </button>
            </div>
          )}

          {/* Progress Bar Footer */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-white/5">
             <div className="h-full bg-accent shadow-[0_-5px_20px_#D4AF37] transition-all duration-150" style={{ width: `${progress}%` }} />
          </div>
       </div>

    </div>
  );
}
