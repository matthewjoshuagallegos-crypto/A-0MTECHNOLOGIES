/**
 * A#0M Core Bootloader Interface
 * Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.
 */

import { useState, useEffect, useMemo } from 'react';
import SecurityIcon from '@mui/icons-material/Security';
import MemoryIcon from '@mui/icons-material/Memory';
import BoltIcon from '@mui/icons-material/Bolt';
import LockIcon from '@mui/icons-material/Lock';
import { motion, AnimatePresence } from 'framer-motion';

export default function Bootloader({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const steps = useMemo(() => [
    { text: "SERIALIZING KERNEL PARAMETERS [ULTIMATE]...", delay: 100 },
    { text: "INITIALIZING 512-BIT ENCRYPTION HANDSHAKE", delay: 250 },
    { text: "DECRYPTING BOOT SECTOR: SKU A21S30i19GP13", delay: 400 },
    { text: "ENGAGING FCC COMPLIANCE ENGINE", delay: 550 },
    { text: "CONNECTING TO VAI INTELLIGENCE SHARD", delay: 700 },
    { text: "SOCIETY AUTHENTICATION GRANTED", delay: 850 },
    { text: "ULTIMATE BOOT SEQUENCE SUCCESSFUL", delay: 1000 }
  ], []);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      const currentStep = steps[current];

      if (currentStep && typeof currentStep.text === 'string') {
        setLogs(prev => [...prev, currentStep.text]);
        if (steps.length > 0) {
          setProgress(((current + 1) / steps.length) * 100);
        }
        current++;
      }
      
      if (current >= steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof onComplete === 'function') {
            onComplete();
          }
        }, 300); // Sharp transition
      }
    }, 120); // Accelerated boot sequence

    return () => clearInterval(interval);
  }, [onComplete, steps]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center p-12 overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative flex flex-col items-center text-center"
      >
        <div className="relative mb-12">
          <MemoryIcon className="w-24 h-24 text-accent animate-pulse" />
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
             className="absolute inset-[-20px] border border-accent/20 rounded-full border-dashed" 
          />
        </div>
        
        <h1 className="text-2xl font-black tracking-[0.6em] text-white uppercase mb-2">A#0M AUTHORITY</h1>
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.4em] mb-12">Booting 512-Bit Kernel v2026.4</p>
        
        <div className="w-96 space-y-4">
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
               className="h-full bg-accent"
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="h-64 overflow-hidden mask-gradient-b">
            <AnimatePresence mode="popLayout">
              {logs.map((log, i) => (
                <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="flex items-center gap-3 text-left mb-2"
                >
                  <BoltIcon className="w-3 h-3 text-accent" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{log}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-12 flex gap-12 text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
        <div className="flex items-center gap-2 italic">
          <SecurityIcon className="w-3 h-3" /> SECURITY_ENFORCED
        </div>
        <div className="flex items-center gap-2 italic">
          <LockIcon className="w-3 h-3" /> FCC_COMPLIANT
        </div>
      </div>
    </div>
  );
}
