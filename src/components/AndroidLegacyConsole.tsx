/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL
 * Device: ANDROID_LEGACY_ENTERPRISE_GAMING_CONSOLE_HOME_STUDIO_TV_DEVICE
 * ==========================================
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  Tv, 
  Music, 
  Video, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Terminal,
  Cast,
  Settings,
  Play,
  Cloud,
  Waves,
  Monitor,
  Volume2,
  VolumeX,
  Wifi,
  LayoutDashboard,
  ShoppingBag,
  Wallet,
  Shield,
  Globe2,
  Database
} from 'lucide-react';
import { cn } from '../lib/utils';
import NetworkPerformanceMetrics from './NetworkPerformanceMetrics';

interface LibraryStatus {
  name: string;
  status: 'online' | 'offline' | 'syncing';
  version: string;
  icon: React.ReactNode;
}

interface AndroidLegacyConsoleProps {
  setCurrentView?: (view: any) => void;
}

const AndroidLegacyConsole: React.FC<AndroidLegacyConsoleProps> = ({ setCurrentView }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'gaming' | 'studio' | 'monitoring' | 'apps'>('home');
  const [isBooted, setIsBooted] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [libraries, setLibraries] = useState<LibraryStatus[]>([
    { name: 'Google Play Services', status: 'online', version: 'v26.4.12', icon: <Play size={16} /> },
    { name: 'PlayStation Library', status: 'online', version: 'v6.0.0', icon: <Gamepad2 size={16} /> },
    { name: 'XBOX Library', status: 'online', version: 'v2026.1', icon: <Gamepad2 size={16} /> },
    { name: 'Windows Media Core STE', status: 'online', version: 'v1.0.0', icon: <Video size={16} /> },
    { name: 'Santza Variance Reverberator', status: 'syncing', version: 'v1.2.0', icon: <Waves size={16} /> },
    { name: 'Steam Pipeline Library', status: 'online', version: 'v3.0.5', icon: <Cloud size={16} /> },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setIsBooted(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-accent/30 overflow-hidden flex flex-col">
      {/* Top Status Bar */}
      <div className="h-12 bg-zinc-900/80 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-widest uppercase">A#0M ANDROID SKU A21S30i19GP13 NODE // ACTIVE</span>
          </div>
          <div className="h-4 w-px bg-white/10" />
          <span className="text-[10px] font-mono text-text-muted uppercase">ANDROID_LEGACY_ENTERPRISE_GAMING_CONSOLE_HOME_STUDIO_TV_DEVICE</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
            <Wifi size={12} className="text-accent" />
            <span>512-BIT ENCRYPTED</span>
          </div>
          <div className="text-[10px] font-mono font-bold">{new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Vertical Navigation */}
        <div className="w-20 bg-zinc-900/50 border-r border-white/5 flex flex-col items-center py-8 gap-8">
          <NavIcon 
            icon={<Tv size={24} />} 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
            label="Home"
          />
          <NavIcon 
            icon={<Gamepad2 size={24} />} 
            active={activeTab === 'gaming'} 
            onClick={() => setActiveTab('gaming')} 
            label="Gaming"
          />
          <NavIcon 
            icon={<Music size={24} />} 
            active={activeTab === 'studio'} 
            onClick={() => setActiveTab('studio')} 
            label="Studio"
          />
          <NavIcon 
            icon={<Activity size={24} />} 
            active={activeTab === 'monitoring'} 
            onClick={() => setActiveTab('monitoring')} 
            label="Monitor"
          />
          <NavIcon 
            icon={<Globe size={24} />} 
            active={activeTab === 'apps'} 
            onClick={() => setActiveTab('apps')} 
            label="Apps"
          />
          <div className="mt-auto">
            <NavIcon 
              icon={<Settings size={24} />} 
              active={false} 
              onClick={() => setCurrentView?.('profile')} 
              label="Config"
            />
          </div>
        </div>

        {/* Content Viewport */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <motion.div 
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Hero Section */}
                  <div className="lg:col-span-2 premium-card p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-50" />
                    <div className="relative z-10">
                      <h1 className="text-6xl font-display font-black italic tracking-tighter rainbow-text mb-4">
                        ANDROID<br />ENTERPRISE
                      </h1>
                      <p className="text-lg text-text-muted max-w-md mb-8 leading-relaxed">
                        Welcome to the first A#0M Android Legacy Enterprise Gaming Console. 
                        Your home studio and TV device are now fully synchronized under Android Kernel Authority.
                      </p>
                      <div className="flex gap-4">
                        <button 
                          onClick={() => setCurrentView?.('gaming-platform')}
                          className="gold-button !px-8 !py-4 flex items-center gap-3"
                        >
                          <Play size={20} />
                          LAUNCH SESSION
                        </button>
                        <button 
                          onClick={() => setCurrentView?.('dashboard')}
                          className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 font-bold transition-all"
                        >
                          QUICK ACCESS
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Library Status Sidebar */}
                  <div className="premium-card p-6 space-y-6">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck size={14} className="text-accent" />
                      INTEGRATED LIBRARIES
                    </h3>
                    <div className="space-y-4">
                      {libraries.map((lib, i) => (
                        <div 
                          key={`${lib.name}-${i}`} 
                          onClick={() => {
                            import('react-hot-toast').then(t => t.default.success(`SYNCING ${lib.name.toUpperCase()}...`));
                          }}
                          className="flex items-center justify-between p-3 bg-black/40 rounded-xl border border-white/5 group hover:border-accent/30 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="text-accent/70 group-hover:text-accent transition-colors">
                              {lib.icon}
                            </div>
                            <div>
                              <p className="text-[11px] font-bold text-white uppercase tracking-tight">{lib.name}</p>
                              <p className="text-[9px] font-mono text-text-muted">{lib.version}</p>
                            </div>
                          </div>
                          <div className={cn(
                            "px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest",
                            lib.status === 'online' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                            lib.status === 'syncing' ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 animate-pulse" :
                            "bg-red-500/10 text-red-500 border border-red-500/20"
                          )}>
                            {lib.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Monitoring Strip */}
                <div className="premium-card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <Activity size={14} className="text-accent" />
                      NETWORK THROUGHPUT
                    </h3>
                    <button onClick={() => setActiveTab('monitoring')} className="text-[10px] font-bold text-accent hover:underline uppercase tracking-widest">
                      View Full Metrics
                    </button>
                  </div>
                  <div className="h-40">
                    <NetworkPerformanceMetrics />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'gaming' && (
              <motion.div 
                key="gaming"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-display font-black italic tracking-tighter uppercase">Gaming Hub</h2>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mt-1">PlayStation // XBOX // STEAM // GOOGLE PLAY</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                      <Gamepad2 size={18} className="text-accent" />
                      <span className="text-xs font-bold">DualSense Connected</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <GameCard title="Cyberpunk 2077" platform="Steam" rating="9.5" image="https://picsum.photos/seed/cyber/800/450" />
                  <GameCard title="God of War" platform="PlayStation" rating="9.8" image="https://picsum.photos/seed/gow/800/450" />
                  <GameCard title="Halo Infinite" platform="XBOX" rating="9.0" image="https://picsum.photos/seed/halo/800/450" />
                  <GameCard title="Genshin Impact" platform="Google Play" rating="9.2" image="https://picsum.photos/seed/genshin/800/450" />
                </div>

                <div className="premium-card p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-accent/20">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-24 h-24 bg-accent/20 rounded-3xl flex items-center justify-center text-accent">
                      <Cloud size={48} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Steam Pipeline Integration</h3>
                      <p className="text-sm text-text-muted mb-4">
                        Direct high-speed data pipeline to Steam servers. Zero-latency asset streaming enabled via A#0M Neural Bridge.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                        <span className="px-3 py-1 bg-black/40 rounded-full text-[10px] font-mono border border-white/10">PIPELINE_ID: 0x512_STEAM</span>
                        <span className="px-3 py-1 bg-black/40 rounded-full text-[10px] font-mono border border-white/10">BANDWIDTH: UNLIMITED</span>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-500 rounded-full text-[10px] font-mono border border-emerald-500/20">STATUS: OPTIMIZED</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        import('react-hot-toast').then(t => t.default.success('STEAM PIPELINE OPTIMIZATION COMPLETE'));
                      }}
                      className="gold-button !px-8"
                    >
                      MANAGE PIPELINE
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'studio' && (
              <motion.div 
                key="studio"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-display font-black italic tracking-tighter uppercase">Home Studio</h2>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mt-1">Windows Media Core STE // Santza Variance Reverberator</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <div className="premium-card p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <Waves size={24} className="text-accent" />
                          <h3 className="font-bold uppercase tracking-widest">Santza Variance Reverberator</h3>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-text-muted">BYPASS</span>
                            <div className="w-8 h-4 bg-zinc-800 rounded-full relative">
                              <div className="absolute left-1 top-1 w-2 h-2 bg-white/20 rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <Knob label="Decay" value="2.4s" percent={65} />
                        <Knob label="Size" value="85%" percent={85} />
                        <Knob label="Damping" value="12kHz" percent={45} />
                        <Knob label="Mix" value="35%" percent={35} />
                      </div>

                      <div className="mt-12 h-32 bg-black/60 rounded-2xl border border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-full h-full flex items-center gap-1 px-4">
                              {Array.from({ length: 40 }).map((_, i) => (
                                <motion.div 
                                  key={i}
                                  animate={{ height: [20, 60, 30, 80, 20][i % 5] }}
                                  transition={{ repeat: Infinity, duration: 1 + Math.random(), ease: "easeInOut" }}
                                  className="flex-1 bg-accent/40 rounded-full"
                                />
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>

                    <div className="premium-card p-6">
                      <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Video size={14} className="text-accent" />
                        Windows Media Core STE
                      </h3>
                      <div className="aspect-video bg-black rounded-xl border border-white/5 flex items-center justify-center group relative overflow-hidden">
                        <Play 
                          size={48} 
                          className="text-white/20 group-hover:text-accent transition-colors cursor-pointer" 
                          onClick={() => {
                            import('react-hot-toast').then(t => t.default.success('INITIALIZING MEDIA STREAM...'));
                          }}
                        />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-1/3 h-full bg-accent" />
                          </div>
                          <span className="text-[10px] font-mono">04:20 / 12:00</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="premium-card p-6">
                      <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Master Output</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between text-[10px] font-mono text-text-muted">
                          <span>L</span>
                          <span>R</span>
                        </div>
                        <div className="h-40 flex gap-2">
                          <div className="flex-1 bg-black/40 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-yellow-500 h-3/4" />
                          </div>
                          <div className="flex-1 bg-black/40 rounded-lg relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500 to-yellow-500 h-2/3" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <button onClick={() => setIsMuted(!isMuted)}>
                            {isMuted ? <VolumeX size={16} className="text-red-500" /> : <Volume2 size={16} className="text-text-muted" />}
                          </button>
                          <div className="flex-1 mx-4 h-1 bg-white/10 rounded-full relative cursor-pointer" onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            setVolume(Math.round((x / rect.width) * 100));
                          }}>
                            <div className="h-full bg-accent transition-all" style={{ width: `${isMuted ? 0 : volume}%` }} />
                          </div>
                          <span className="text-xs font-bold">{isMuted ? 0 : volume}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'monitoring' && (
              <motion.div 
                key="monitoring"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-display font-black italic tracking-tighter uppercase">Network Intelligence</h2>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mt-1">Android SKU A21S30i19GP13 Node Monitoring // 512-Bit Encrypted Data Stream</p>
                  </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          import('react-hot-toast').then(t => t.default.success('LOGS EXPORTED TO ENCRYPTED STORAGE'));
                        }}
                        className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 text-xs font-bold uppercase tracking-widest"
                      >
                        Export Logs
                      </button>
                      <button 
                        onClick={() => {
                          import('react-hot-toast').then(t => t.default.success('NODE REFRESHED: ALL SYSTEMS NOMINAL'));
                        }}
                        className="px-4 py-2 bg-accent text-black rounded-xl font-bold text-xs uppercase tracking-widest"
                      >
                        Refresh Node
                      </button>
                    </div>
                </div>

                <NetworkPerformanceMetrics />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="premium-card p-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                      <ShieldCheck size={14} className="text-accent" />
                      Security Audit
                    </h3>
                    <div className="space-y-3">
                      <AuditItem label="Encryption" status="AES-512 ACTIVE" />
                      <AuditItem label="Firewall" status="ANDROID_SHIELD_ON" />
                      <AuditItem label="Auth Layer" status="BIOMETRIC_VERIFIED" />
                      <AuditItem label="IP Masking" status="GLOBAL_STEALTH_ACTIVE" />
                    </div>
                  </div>
                  <div className="premium-card p-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Terminal size={14} className="text-accent" />
                      System Console
                    </h3>
                    <div className="bg-black/60 rounded-xl p-4 font-mono text-[10px] text-emerald-500/80 h-32 overflow-y-auto">
                      <p>{">"} INITIALIZING ANDROID_KERNEL_A21S30i19GP13...</p>
                      <p>{">"} SYNCING WITH GOOGLE PLAY SERVICES...</p>
                      <p>{">"} ESTABLISHING STEAM PIPELINE...</p>
                      <p>{">"} SANTZA REVERB ENGINE: READY</p>
                      <p className="animate-pulse">{">"} LISTENING ON PORT 512...</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === 'apps' && (
              <motion.div 
                key="apps"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-4xl font-display font-black italic tracking-tighter uppercase">Android App Store</h2>
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mt-1">Enterprise Grade Applications // A#0M Certified</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  <AppIcon icon={<LayoutDashboard size={32} />} label="Dashboard" color="text-blue-400" onClick={() => setCurrentView?.('dashboard')} />
                  <AppIcon icon={<ShoppingBag size={32} />} label="Market" color="text-emerald-400" onClick={() => setCurrentView?.('marketplace')} />
                  <AppIcon icon={<Wallet size={32} />} label="Portfolio" color="text-amber-400" onClick={() => setCurrentView?.('portfolio')} />
                  <AppIcon icon={<Shield size={32} />} label="Iron Safe" color="text-zinc-400" onClick={() => setCurrentView?.('safe')} />
                  <AppIcon icon={<Zap size={32} />} label="AI Studio" color="text-purple-400" onClick={() => setCurrentView?.('ai-studio')} />
                  <AppIcon icon={<Globe2 size={32} />} label="Imager" color="text-cyan-400" onClick={() => setCurrentView?.('global-imager')} />
                  <AppIcon icon={<Database size={32} />} label="Chronos" color="text-indigo-400" onClick={() => setCurrentView?.('chronos-archive')} />
                  <AppIcon icon={<Terminal size={32} />} label="Shell" color="text-red-400" onClick={() => setCurrentView?.('developer-shell')} />
                  <AppIcon icon={<Cloud size={32} />} label="Cloud" color="text-sky-400" onClick={() => setCurrentView?.('cloud-orchestrator')} />
                  <AppIcon icon={<Settings size={32} />} label="Settings" color="text-zinc-500" onClick={() => setCurrentView?.('profile')} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="h-16 bg-zinc-900/80 backdrop-blur-xl border-t border-white/5 flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <Cpu size={18} />
              </div>
              <div>
                <p className="text-[9px] font-mono text-text-muted uppercase">Processor</p>
                <p className="text-xs font-bold">A#0M NEURAL X1</p>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                <Monitor size={18} />
              </div>
              <div>
                <p className="text-[9px] font-mono text-text-muted uppercase">Display</p>
                <p className="text-xs font-bold">8K ULTRA HDR</p>
              </div>
           </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-[9px] font-mono text-text-muted uppercase">Copyright © 2026</p>
            <p className="text-[9px] font-mono text-accent uppercase">Matthew Joshua Gallegos // A#0M TECH</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <ShieldCheck size={20} className="text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavIcon: React.FC<{ icon: React.ReactNode; active: boolean; onClick: () => void; label: string }> = ({ icon, active, onClick, label }) => (
  <button 
    onClick={onClick}
    className={cn(
      "flex flex-col items-center gap-1 transition-all group",
      active ? "text-accent" : "text-text-muted hover:text-white"
    )}
  >
    <div className={cn(
      "p-3 rounded-2xl transition-all",
      active ? "bg-accent/20 shadow-[0_0_20px_rgba(212,175,55,0.2)]" : "bg-transparent group-hover:bg-white/5"
    )}>
      {icon}
    </div>
    <span className="text-[8px] font-bold uppercase tracking-widest">{label}</span>
  </button>
);

const GameCard: React.FC<{ title: string; platform: string; rating: string; image: string }> = ({ title, platform, rating, image }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    onClick={() => {
      import('react-hot-toast').then(t => t.default.success(`LAUNCHING ${title.toUpperCase()}...`));
    }}
    className="premium-card overflow-hidden group cursor-pointer"
  >
    <div className="aspect-video relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[9px] font-bold border border-white/10">
        ★ {rating}
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-mono text-text-muted uppercase">{platform}</span>
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
      </div>
    </div>
  </motion.div>
);

const Knob: React.FC<{ label: string; value: string; percent: number }> = ({ label, value, percent }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="relative w-16 h-16">
      <svg className="w-full h-full -rotate-90">
        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
        <circle 
          cx="32" 
          cy="32" 
          r="28" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="4" 
          strokeDasharray={175.9} 
          strokeDashoffset={175.9 - (175.9 * percent) / 100} 
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 bg-zinc-800 rounded-full border border-white/10 shadow-lg flex items-center justify-center">
          <div className="w-1 h-4 bg-accent/50 rounded-full" style={{ transform: `rotate(${(percent / 100) * 270 - 135}deg)` }} />
        </div>
      </div>
    </div>
    <div className="text-center">
      <p className="text-[9px] font-mono text-text-muted uppercase mb-0.5">{label}</p>
      <p className="text-[10px] font-bold text-white">{value}</p>
    </div>
  </div>
);

const AuditItem: React.FC<{ label: string; status: string }> = ({ label, status }) => (
  <div className="flex items-center justify-between p-2 bg-black/40 rounded-lg border border-white/5">
    <span className="text-[9px] font-mono text-text-muted uppercase">{label}</span>
    <span className="text-[9px] font-mono text-accent font-bold">{status}</span>
  </div>
);

const AppIcon: React.FC<{ icon: React.ReactNode; label: string; color: string; onClick?: () => void }> = ({ icon, label, color, onClick }) => (
  <motion.button 
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex flex-col items-center gap-3 p-6 bg-zinc-900/50 border border-white/5 rounded-3xl hover:bg-white/5 hover:border-white/10 transition-all group"
  >
    <div className={cn("p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors", color)}>
      {icon}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted group-hover:text-white transition-colors">{label}</span>
  </motion.button>
);

export default AndroidLegacyConsole;
