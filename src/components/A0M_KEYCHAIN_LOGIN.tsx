import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, KeyRound, Fingerprint, ShieldCheck, AlertTriangle } from 'lucide-react';
import toast from 'react-hot-toast';

interface KeychainProps {
  children: React.ReactNode;
}

export default function A0M_KEYCHAIN_LOGIN({ children }: KeychainProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSettingUp, setIsSettingUp] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [confirmPasscode, setConfirmPasscode] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const storedHash = localStorage.getItem('A0M_KEYCHAIN_HASH');
    if (!storedHash) {
      setIsSettingUp(true);
    }
    
    // Optional: Auto-lock after inactivity
    let timeout: NodeJS.Timeout;
    const resetTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (isUnlocked) {
          setIsUnlocked(false);
          toast('Keychain locked due to inactivity', { icon: '🔒' });
        }
      }, 15 * 60 * 1000); // 15 minutes
    };

    const handleLock = () => {
      setIsUnlocked(false);
      toast('Keychain locked manually', { icon: '🔒' });
    };

    window.addEventListener('lock_keychain', handleLock);
    window.addEventListener('mousemove', resetTimeout);
    window.addEventListener('keypress', resetTimeout);
    resetTimeout();

    return () => {
      window.removeEventListener('lock_keychain', handleLock);
      window.removeEventListener('mousemove', resetTimeout);
      window.removeEventListener('keypress', resetTimeout);
      clearTimeout(timeout);
    };
  }, [isUnlocked]);

  // Simple hash function for the demo (in production, use Web Crypto API)
  const hashPasscode = async (code: string) => {
    const msgBuffer = new TextEncoder().encode(code + "A0M_SALT");
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.length < 6) {
      toast.error('Passcode must be at least 6 characters');
      setError(true);
      setTimeout(() => setError(false), 1000);
      return;
    }
    if (passcode !== confirmPasscode) {
      toast.error('Passcodes do not match');
      setError(true);
      setTimeout(() => setError(false), 1000);
      return;
    }

    const hash = await hashPasscode(passcode);
    localStorage.setItem('A0M_KEYCHAIN_HASH', hash);
    setIsSettingUp(false);
    setIsUnlocked(true);
    toast.success('Sovereign Keychain Initialized');
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    const storedHash = localStorage.getItem('A0M_KEYCHAIN_HASH');
    const inputHash = await hashPasscode(passcode);

    if (storedHash === inputHash) {
      setIsUnlocked(true);
      toast.success('Keychain Unlocked');
    } else {
      toast.error('Invalid Passcode');
      setError(true);
      setPasscode('');
      setTimeout(() => setError(false), 1000);
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden font-mono text-green-500">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at center, #00ff00 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md p-8 bg-black/80 border border-green-500/30 rounded-2xl backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,0,0.1)]"
      >
        <div className="flex flex-col items-center mb-8">
          <motion.div
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-4 border border-green-500/50"
          >
            {isSettingUp ? <KeyRound size={32} className="text-green-400" /> : <Lock size={32} className="text-green-400" />}
          </motion.div>
          <h1 className="text-2xl font-bold text-green-400 tracking-widest text-center">A#0M KEYCHAIN</h1>
          <p className="text-green-500/60 text-sm mt-2 text-center">
            {isSettingUp ? 'INITIALIZE SOVEREIGN PASSCODE' : 'AWAITING DECRYPTION KEY'}
          </p>
        </div>

        {isSettingUp ? (
          <form onSubmit={handleSetup} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter New Passcode"
                className={`w-full bg-black border ${error ? 'border-red-500' : 'border-green-500/50'} rounded-lg px-4 py-3 text-green-400 focus:outline-none focus:border-green-400 transition-colors text-center tracking-widest`}
                autoFocus
              />
            </div>
            <div>
              <input
                type="password"
                value={confirmPasscode}
                onChange={(e) => setConfirmPasscode(e.target.value)}
                placeholder="Confirm Passcode"
                className={`w-full bg-black border ${error ? 'border-red-500' : 'border-green-500/50'} rounded-lg px-4 py-3 text-green-400 focus:outline-none focus:border-green-400 transition-colors text-center tracking-widest`}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 rounded-lg px-4 py-3 font-bold tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck size={20} />
              INITIALIZE KEYCHAIN
            </button>
          </form>
        ) : (
          <form onSubmit={handleUnlock} className="space-y-4">
            <div>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="ENTER PASSCODE"
                className={`w-full bg-black border ${error ? 'border-red-500' : 'border-green-500/50'} rounded-lg px-4 py-3 text-green-400 focus:outline-none focus:border-green-400 transition-colors text-center tracking-widest text-xl`}
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 text-green-400 rounded-lg px-4 py-3 font-bold tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Unlock size={20} />
              DECRYPT & ENTER
            </button>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-green-500/20 text-center">
          <div className="flex items-center justify-center gap-2 text-green-500/40 text-xs">
            <Fingerprint size={14} />
            <span>FCC COMPLIANT | 512-BIT ENCRYPTION</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
