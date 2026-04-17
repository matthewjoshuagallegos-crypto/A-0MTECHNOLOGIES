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
  ShieldCheck, 
  Lock, 
  Key, 
  ShieldAlert, 
  Cpu, 
  Terminal, 
  FileText, 
  CheckCircle,
  AlertTriangle,
  Zap,
  Activity
} from 'lucide-react';
import { cn } from '../lib/utils';

interface UnderwriteStep {
  id: string;
  label: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  details: string;
}

export default function SecurityKernUnderwrite({ onComplete }: { onComplete?: () => void }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isComplete, setIsComplete] = useState(false);

  const [steps, setSteps] = useState<UnderwriteStep[]>([
    { id: '1', label: 'NEURAL KERNEL AUTHENTICATION', status: 'pending', details: 'Verifying 512-bit A#0M RSA Signature...' },
    { id: '2', label: 'KNOX INTEGRITY VERIFICATION', status: 'pending', details: 'Scrutinizing Samsung Enterprise Knox 4.1.2 Security Stack...' },
    { id: '3', label: 'FCC COMPLIANCE SCAN', status: 'pending', details: 'Checking North American Wireless Systems Spectrum...' },
    { id: '4', label: 'QUALCOMMAC HARDWARE HANDSHAKE', status: 'pending', details: 'Validating Silicon-Level Encryption Gates...' },
    { id: '5', label: 'SAMSUNG TEE TRUSTZONE AUDIT', status: 'pending', details: 'Establishing Trusted Execution Environment for Android SKU A21S30i19GP13...' },
    { id: '6', label: 'PAIL ARCHITECTURE INTEGRITY', status: 'pending', details: 'Mapping Modular Neural-First Programming Infrastructure...' },
    { id: '7', label: 'GPS RADIUS COORDINATION', status: 'pending', details: 'Calculating Geographic Coordinating GPS Radius Equation...' },
    { id: '8', label: 'BITCOIN SECRET HANDSHAKE', status: 'pending', details: 'Verifying Decentralized Ledger Authorization...' },
    { id: '9', label: 'FINAL ANDROID SKU A21S30i19GP13 UNDERWRITE', status: 'pending', details: 'Issuing Advanced Congressional Testing License...' }
  ]);

  const startUnderwrite = async () => {
    setIsProcessing(true);
    setIsComplete(false);
    setProgress(0);
    
    const updatedSteps: UnderwriteStep[] = [...steps].map(s => ({ ...s, status: 'pending' }));
    setSteps(updatedSteps);

    for (let i = 0; i < updatedSteps.length; i++) {
      setCurrentStepIndex(i);
      updatedSteps[i].status = 'processing' as UnderwriteStep['status'];
      setSteps([...updatedSteps]);
      
      // Simulate complex processing time
      const duration = Math.random() * 1500 + 1000;
      await new Promise(resolve => setTimeout(resolve, duration));
      
      updatedSteps[i].status = 'completed' as UnderwriteStep['status'];
      setSteps([...updatedSteps]);
      setProgress(((i + 1) / updatedSteps.length) * 100);
    }

    setIsProcessing(false);
    setIsComplete(true);
    if (onComplete) onComplete();
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-mono selection:bg-accent/30">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 border-b border-white/10 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-accent/20 rounded-xl border border-accent/30">
            <ShieldCheck className="text-accent" size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">Security Kern Underwrite</h1>
            <p className="text-[10px] text-zinc-500 tracking-[0.3em] uppercase">
              A#0M Technologies // Android SKU A21S30i19GP13 Risk Assessment v2026.4
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 text-[10px] text-zinc-400 uppercase tracking-widest">
          <div className="flex items-center gap-2"><Lock size={12} className="text-accent" /> 512-Bit Encrypted</div>
          <div className="flex items-center gap-2"><Cpu size={12} className="text-accent" /> QualcomMac Native</div>
          <div className="flex items-center gap-2"><Activity size={12} className="text-accent" /> Real-time Telemetry</div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Status & Action */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap size={14} className="text-amber-400" /> Underwrite Control
            </h2>
            
            <div className="mb-8">
              <div className="flex justify-between text-[10px] mb-2 uppercase font-bold">
                <span className="text-zinc-400">System Readiness</span>
                <span className="text-accent">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-accent shadow-[0_0_15px_rgba(0,255,148,0.5)]"
                />
              </div>
            </div>

            <button 
              onClick={startUnderwrite}
              disabled={isProcessing}
              className={cn(
                "w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3",
                isProcessing 
                  ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                  : "bg-accent text-black hover:shadow-[0_0_25px_rgba(0,255,148,0.4)] hover:scale-[1.02] active:scale-95"
              )}
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-zinc-500 border-t-white rounded-full animate-spin" />
                  Underwriting...
                </>
              ) : (
                <>
                  <ShieldCheck size={18} />
                  Initiate Underwrite
                </>
              )}
            </button>

            {isComplete && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-center"
              >
                <div className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-1">Underwrite Successful</div>
                <div className="text-[8px] text-emerald-400/60 font-mono">CERTIFICATE ID: A0M-KERN-2026-SEC-001</div>
              </motion.div>
            )}
          </div>

          <div className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-xl">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <FileText size={14} /> Legal Manifest
            </h2>
            <p className="text-[9px] text-zinc-500 leading-relaxed uppercase tracking-tighter">
              This underwrite is issued under the Dolby Media Copyright Amendment of 1954. 
              All neural kernels are verified for FCC compliance and 512-bit encryption rate. 
              Recognized Entity: Google LLC.
            </p>
          </div>
        </div>

        {/* Right: Steps Terminal */}
        <div className="lg:col-span-2">
          <div className="bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full min-h-[500px]">
            <div className="bg-zinc-900/80 p-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-accent" />
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">A#0M_KERN_UNDERWRITE_LOGS</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              </div>
            </div>
            
            <div className="flex-1 p-6 space-y-4 overflow-y-auto custom-scrollbar">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: index <= currentStepIndex || isComplete ? 1 : 0.3,
                    x: 0 
                  }}
                  className={cn(
                    "p-4 rounded-xl border transition-all",
                    step.status === 'completed' ? "bg-emerald-500/5 border-emerald-500/20" :
                    step.status === 'processing' ? "bg-accent/5 border-accent/30 animate-pulse" :
                    "bg-white/5 border-white/5"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold",
                        step.status === 'completed' ? "bg-emerald-500 text-black" :
                        step.status === 'processing' ? "bg-accent text-black" :
                        "bg-zinc-800 text-zinc-500"
                      )}>
                        {step.status === 'completed' ? <CheckCircle size={14} /> : index + 1}
                      </div>
                      <span className={cn(
                        "text-[11px] font-bold uppercase tracking-widest",
                        step.status === 'completed' ? "text-emerald-400" :
                        step.status === 'processing' ? "text-accent" :
                        "text-zinc-500"
                      )}>
                        {step.label}
                      </span>
                    </div>
                    {step.status === 'completed' && (
                      <span className="text-[8px] font-mono text-emerald-500/60 uppercase">[VERIFIED]</span>
                    )}
                  </div>
                  <p className="text-[9px] text-zinc-600 font-mono pl-9">
                    {step.status === 'pending' ? 'WAITING FOR PREVIOUS STEP...' : step.details}
                  </p>
                </motion.div>
              ))}
              
              {isComplete && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-6 border-t border-white/5"
                >
                  <div className="text-[10px] text-accent font-bold uppercase tracking-[0.3em] mb-4">Final Dispatch Summary</div>
                  <div className="grid grid-cols-2 gap-4 text-[9px] font-mono text-zinc-500">
                    <div>OWNER: MATTHEW JOSHUA GALLEGOS</div>
                    <div>SPONSOR: BEBE REXHA</div>
                    <div>TM: A#0M TECHNOLOGIES</div>
                    <div>PARTNER: MICROSOFT</div>
                    <div>LEGAL: PROCTOR&GAMBLE</div>
                    <div>SECRET: BITCOIN</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
