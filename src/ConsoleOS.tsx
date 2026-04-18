import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Gamepad2, Coins, Settings, Radio, Activity, Music, Layers, DownloadCloud, Store, Server, Check } from 'lucide-react';
import GamingHub from './components/console/GamingHub';
import DataVault from './components/console/DataVault';
import NetworkConnect from './components/console/NetworkConnect';
import MediaStation from './components/console/MediaStation';
import RendererEngine from './components/console/RendererEngine';
import LibraryMigration from './components/console/LibraryMigration';
import MarketStorefront from './components/console/MarketStorefront';
import { useA0M } from './core/A0MContext';

export default function ConsoleOS() {
  const { isSaving } = useA0M();
  const [view, setView] = useState('GAMES');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'STORE', icon: <Store className="w-6 h-6"/>, label: 'Store' },
    { id: 'MIGRATE', icon: <DownloadCloud className="w-6 h-6"/>, label: 'Migration' },
    { id: 'RENDERER', icon: <Layers className="w-6 h-6"/>, label: '15-Grade' },
    { id: 'GAMES', icon: <Gamepad2 className="w-6 h-6"/>, label: 'Library' },
    { id: 'DATA VAULT', icon: <Coins className="w-6 h-6"/>, label: 'Yield' },
  ];

  return (
    <div className="h-screen w-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden select-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,rgba(0,0,0,1)_100%)]">
      {/* 10-Foot UI Header */}
      <header className="px-16 py-12 flex justify-between items-center z-20 w-full relative">
         <div className="flex items-center gap-16">
           <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center font-black text-black text-2xl shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                A#
             </div>
             <div>
               <h1 className="text-3xl font-black uppercase tracking-widest text-white leading-none mb-1">Authority</h1>
               <p className="text-lg font-mono text-accent uppercase tracking-widest leading-none">Console TV // Lvl 21</p>
             </div>
           </div>
           
           <nav className="flex gap-4 ml-8 overflow-x-auto custom-scrollbar pb-2">
             {navItems.map(item => (
               <button
                 key={item.id}
                 onClick={() => setView(item.id)}
                 className={`flex items-center gap-3 px-6 py-3 rounded-full font-black uppercase transition-all duration-300 text-sm outline-none whitespace-nowrap ${
                   view === item.id 
                    ? 'bg-white text-black scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.2)]' 
                    : 'text-gray-500 hover:text-white hover:bg-white/10 focus:bg-white/10 focus:text-white'
                 }`}
               >
                 {item.icon} <span className="tracking-widest">{item.id}</span>
               </button>
             ))}
           </nav>
         </div>

         {/* Status Indicators */}
         <div className="flex items-center gap-10 text-2xl font-bold text-gray-300">
           {isSaving ? (
             <div className="flex items-center gap-3 text-accent bg-accent/10 px-5 py-2 rounded-full border border-accent/20">
               <Server className="w-5 h-5 animate-pulse" /> <span className="text-sm font-bold uppercase tracking-widest">Saving to Vault...</span>
             </div>
           ) : (
             <div className="flex items-center gap-3 text-green-500 bg-green-500/10 px-5 py-2 rounded-full border border-green-500/20">
               <Check className="w-5 h-5" /> <span className="text-sm font-bold uppercase tracking-widest">System Saved</span>
             </div>
           )}
           <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-green-500 animate-pulse" />
           </div>
           <div className="flex items-center gap-3">
              <Wifi className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="font-mono text-xl mr-2">LTEUSA</span>
           </div>
           <div className="font-mono">{time}</div>
         </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden mt-4">
         <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {view === 'GAMES' && <GamingHub />}
              {view === 'DATA VAULT' && <DataVault />}
              {view === 'PLAYLIST' && <MediaStation />}
              {view === 'NETWORK' && <NetworkConnect />}
              {view === 'STORE' && <MarketStorefront />}
              {view === 'MIGRATE' && <LibraryMigration />}
              {view === 'RENDERER' && <RendererEngine />}
              {view === 'SETTINGS' && (
                <div className="h-full flex items-center justify-center flex-col opacity-50">
                  <Settings className="w-32 h-32 mb-8 animate-[spin_10s_linear_infinite]" />
                  <h2 className="text-4xl font-black uppercase tracking-widest">Sovereign Settings</h2>
                  <p className="text-xl font-mono mt-4 text-gray-400">Android Build A21S30i19GP13</p>
                </div>
              )}
            </motion.div>
         </AnimatePresence>
      </main>
    </div>
  );
}
