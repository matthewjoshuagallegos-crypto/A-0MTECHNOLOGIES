/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Publisher: BeBe Rexa
 * Editor: Sonia Lopez
 * Legal: Dolby Media Copyright Amendment of 1954 to the Third Amendment of 1854
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wifi, Lock, ShieldCheck, Settings, CheckCircle, Key, ChevronRight, Terminal } from 'lucide-react';

const TERMINAL_LOGS = [
  "BOOTLOADER AUTHENTICATED VIA CAPTIVE PORTAL v2026.4.",
  "MEMBER OF CONGRESS HONOR PROTOCOL: AUTHORIZED.",
  "INITIALIZING QWERYLINE XUS NEURAL KERNEL (FIRMWARE 52.1)...",
  "VERIFYING ANDROID_BOOTLOADER_EMULATED_APP_STORAGE.LIB... [OK]",
  "VERIFYING IOS_NAWS_v22.DLL... [OK]",
  "VERIFYING GPLAY_SERVICES_ULTRA.LIB... [OK]",
  "VERIFYING GOOGLE_CHROMEOS_QUALCOMM_EDITION.SO... [OK]",
  "VERIFYING QUALCOMMAC_NEURAL_PROCESSOR.PKG... [OK]",
  "VERIFYING 6G_WIRELESS_STACK.SO... [OK]",
  "VERIFYING GAMING_ENGINE_OMEGA.DLL... [OK]",
  "LOADING CORE CITATION & LICENSE MANIFEST... [OK]",
  "LICENSE: © APACHE (ADVANCEDCONGRESSIONALTESTINGPRESIDENTIALALUMNICONGRESSIONALHONORELECTORATE) until 2036",
  "ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00",
  "START DATE: 07/06/2026 4:30A.M.",
  "OWNER: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]",
  "PUBLISHER: BeBe Rexa // EDITOR: Sonia Lopez",
  "LEGAL: Dolby Media Copyright Amendment of 1954 to the Third Amendment of 1854",
  "VALIDATING LEI1126OMB06655 CREDENTIALS... [OK]",
  "OPENING PORT 512 (eא& 512-BIT STREAM)... [OK]",
  "INITIATING CHRONOS FINAL DISPATCH...",
  "SYSTEM INTEGRITY VERIFIED. SOVEREIGN USER RECOGNIZED."
];

export default function Bootloader({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState<'captive_portal' | 'terminal' | 'keychain' | 'setup_wizard'>('captive_portal');
  
  // Captive Portal State
  const [portalProgress, setPortalProgress] = useState(0);
  
  // Terminal State
  const [logs, setLogs] = useState<string[]>([]);
  const [termProgress, setTermProgress] = useState(0);

  // Keychain State
  const [keyInput, setKeyInput] = useState('');
  const [keychainStatus, setKeychainStatus] = useState<'idle' | 'verifying' | 'success'>('idle');

  // Wizard State
  const [wizardStep, setWizardStep] = useState(0);

  // 1. Captive Portal Logic
  useEffect(() => {
    if (stage === 'captive_portal') {
      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        setPortalProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage('terminal'), 500);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [stage]);

  // 2. Terminal Logic
  useEffect(() => {
    if (stage === 'terminal') {
      let currentLog = 0;
      const interval = setInterval(() => {
        if (currentLog < TERMINAL_LOGS.length) {
          setLogs(prev => [...prev, TERMINAL_LOGS[currentLog]]);
          setTermProgress(Math.floor(((currentLog + 1) / TERMINAL_LOGS.length) * 100));
          currentLog++;
        } else {
          clearInterval(interval);
          setTimeout(() => setStage('keychain'), 800);
        }
      }, 400);
      return () => clearInterval(interval);
    }
  }, [stage]);

  // 3. Keychain Logic
  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!keyInput) return;
    setKeychainStatus('verifying');
    setTimeout(() => {
      setKeychainStatus('success');
      setTimeout(() => setStage('setup_wizard'), 1000);
    }, 1500);
  };

  // Render
  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono z-[99999] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/matrix/1920/1080?blur=10')] opacity-10 bg-cover bg-center mix-blend-screen pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {stage === 'captive_portal' && (
          <motion.div 
            key="captive"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-10 w-full max-w-md bg-black/80 border border-accent/30 p-8 rounded-2xl backdrop-blur-md text-center"
          >
            <Wifi className="w-16 h-16 text-accent mx-auto mb-6 animate-pulse" />
            <h2 className="text-2xl font-bold text-white mb-2 tracking-widest">CAPTIVE PORTAL</h2>
            <p className="text-accent/70 text-sm mb-8">A#0M.LTEUSA.NETWORK</p>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-accent">
                <span>Authenticating Bootloader...</span>
                <span>{portalProgress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-900 rounded overflow-hidden">
                <motion.div 
                  className="h-full bg-accent"
                  style={{ width: `${portalProgress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {stage === 'terminal' && (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10 w-full max-w-3xl flex flex-col h-full justify-end pb-20 px-8"
          >
            <div className="mb-8 text-center">
              <Terminal className="w-12 h-12 text-accent mx-auto mb-4" />
              <h1 className="text-4xl font-bold tracking-widest text-white drop-shadow-[0_0_15px_rgba(0,255,148,0.8)]">SYSTEM VERIFICATION</h1>
            </div>
            
            <div className="mb-4 h-64 overflow-hidden flex flex-col justify-end">
              {logs.map((log, i) => (
                <div key={i} className="text-sm opacity-80 mb-1">{`> ${log}`}</div>
              ))}
              <div className="animate-pulse text-sm mt-1">{`> _`}</div>
            </div>
            
            <div className="w-full h-2 bg-gray-900 rounded overflow-hidden border border-accent/30">
              <motion.div 
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${termProgress}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>
        )}

        {stage === 'keychain' && (
          <motion.div 
            key="keychain"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-10 w-full max-w-md bg-black/80 border border-accent/30 p-8 rounded-2xl backdrop-blur-md"
          >
            <div className="text-center mb-8">
              <Key className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white tracking-widest">KEYCHAIN LOGIN</h2>
              <p className="text-accent/70 text-sm mt-2">Enter master decryption key to unlock core services.</p>
            </div>

            <form onSubmit={handleKeySubmit} className="space-y-4">
              <div>
                <input 
                  type="password" 
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Enter Key..."
                  disabled={keychainStatus !== 'idle'}
                  className="w-full bg-black/50 border border-accent/50 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                />
              </div>
              <button 
                type="submit"
                disabled={!keyInput || keychainStatus !== 'idle'}
                className="w-full bg-accent text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors disabled:opacity-50"
              >
                {keychainStatus === 'idle' && <><Lock className="w-4 h-4" /> UNLOCK KEYCHAIN</>}
                {keychainStatus === 'verifying' && <><ShieldCheck className="w-4 h-4 animate-pulse" /> VERIFYING...</>}
                {keychainStatus === 'success' && <><CheckCircle className="w-4 h-4" /> ACCESS GRANTED</>}
              </button>
            </form>
          </motion.div>
        )}

        {stage === 'setup_wizard' && (
          <motion.div 
            key="wizard"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="relative z-10 w-full max-w-2xl bg-black/80 border border-accent/30 rounded-2xl backdrop-blur-md overflow-hidden flex flex-col md:flex-row"
          >
            <div className="bg-accent/10 p-8 md:w-1/3 border-r border-accent/20">
              <Settings className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-xl font-bold text-white tracking-widest mb-6">SETUP WIZARD</h2>
              <div className="space-y-4">
                {[
                  { step: 0, label: 'Network Config' },
                  { step: 1, label: 'Security Protocols' },
                  { step: 2, label: 'Finalize' }
                ].map((s) => (
                  <div key={s.step} className={`flex items-center gap-3 text-sm ${wizardStep >= s.step ? 'text-accent' : 'text-gray-600'}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${wizardStep >= s.step ? 'border-accent bg-accent/20' : 'border-gray-600'}`}>
                      {wizardStep > s.step ? <CheckCircle className="w-3 h-3" /> : s.step + 1}
                    </div>
                    {s.label}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 md:w-2/3 flex flex-col justify-between min-h-[300px]">
              <div>
                {wizardStep === 0 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-bold text-white mb-2">Configure Network</h3>
                    <p className="text-accent/70 text-sm mb-4">Establishing secure connection to A#0M.LTEUSA.NETWORK and optimizing routing tables.</p>
                    <div className="bg-black/50 p-4 rounded border border-accent/20 font-mono text-xs text-accent/50">
                      &gt; Ping: 12ms<br/>
                      &gt; Route: Optimal<br/>
                      &gt; Encryption: AES-256-GCM
                    </div>
                  </motion.div>
                )}
                {wizardStep === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-bold text-white mb-2">Security Protocols</h3>
                    <p className="text-accent/70 text-sm mb-4">Applying core citation manifest and verifying mathematical foundation signatures.</p>
                    <div className="bg-black/50 p-4 rounded border border-accent/20 font-mono text-xs text-accent/50">
                      &gt; Signature: MaTtYmAdNeSs<br/>
                      &gt; Status: Verified<br/>
                      &gt; License: Active
                    </div>
                  </motion.div>
                )}
                {wizardStep === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <h3 className="text-lg font-bold text-white mb-2">System Ready</h3>
                    <p className="text-accent/70 text-sm mb-4">All core services, libraries, and Android system services have been successfully initialized.</p>
                    <div className="flex items-center gap-2 text-accent bg-accent/10 p-3 rounded border border-accent/30">
                      <CheckCircle className="w-5 h-5" />
                      <span>Boot sequence complete.</span>
                    </div>
                  </motion.div>
                )}
              </div>
              
              <div className="flex justify-end mt-8">
                <button 
                  onClick={() => {
                    if (wizardStep < 2) setWizardStep(w => w + 1);
                    else onComplete();
                  }}
                  className="bg-accent text-black px-6 py-2 rounded font-bold flex items-center gap-2 hover:bg-accent/90 transition-colors"
                >
                  {wizardStep < 2 ? 'NEXT' : 'ENTER SYSTEM'} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
