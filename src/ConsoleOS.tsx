import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WifiIcon from '@mui/icons-material/Wifi';
import GamepadIcon from '@mui/icons-material/Gamepad';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import RadioIcon from '@mui/icons-material/Radio';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LayersIcon from '@mui/icons-material/Layers';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import StoreIcon from '@mui/icons-material/Store';
import DnsIcon from '@mui/icons-material/Dns';
import CheckIcon from '@mui/icons-material/Check';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import MemoryIcon from '@mui/icons-material/Memory';
import SearchIcon from '@mui/icons-material/Search';
import GamingHub from './components/console/GamingHub';
import DataVault from './components/console/DataVault';
import NetworkConnect from './components/console/NetworkConnect';
import MediaStation from './components/console/MediaStation';
import RendererEngine from './components/console/RendererEngine';
import LibraryMigration from './components/console/LibraryMigration';
import MarketStorefront from './components/console/MarketStorefront';
import DevKit from './components/console/DevKit';
import BuildStation from './components/console/BuildStation';
import TerminalView from './components/console/TerminalView';
import UnifiedIDE from './components/console/UnifiedIDE';
import ErrorBoundary from './components/ErrorBoundary';
import { useA0M } from './core/A0MContext';

import VirtualKeyboard from './components/VirtualKeyboard';

/**
 * The master Controller Interface for the A#0M System TV Mode.
 * Functions as the top-level operating layout managing primary navigation, status bar updates, 
 * and orchestration between large layout views like the IDE, Games, and Development interfaces.
 *
 * @returns {JSX.Element} The rendered global Console OS structural wrapper.
 */
export default function ConsoleOS() {
  const { isSaving } = useA0M();
  const [view, setView] = useState('GAMES');
  const [time, setTime] = useState('');
  const [search, setSearch] = useState('');

  /**
   * Catches user keyboard inputs originating from the dashboard's system search node.
   * Maps explicit routing keywords to internal OS views.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - Exposes physical input actions
   */
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (search.trim().toLowerCase() === 'explorer') {
        setView('TERMINAL'); // Assuming Terminal is the view for Exploring backend
        setSearch('');
      } else {
        console.log("Search term:", search);
      }
    }
  };

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'STORE', icon: <StoreIcon className="w-6 h-6"/>, label: 'Store' },
    { id: 'MIGRATE', icon: <CloudDownloadIcon className="w-6 h-6"/>, label: 'Migration' },
    { id: 'RENDERER', icon: <LayersIcon className="w-6 h-6"/>, label: '15-Grade' },
    { id: 'BUILD', icon: <Inventory2Icon className="w-6 h-6"/>, label: 'Deploy' },
    { id: 'IDE', icon: <CodeIcon className="w-6 h-6"/>, label: 'Sovereign IDE' },
    { id: 'DEV KIT', icon: <MemoryIcon className="w-6 h-6"/>, label: 'SDK Docs' },
    { id: 'TERMINAL', icon: <TerminalIcon className="w-6 h-6"/>, label: 'Kernel' },
    { id: 'GAMES', icon: <GamepadIcon className="w-6 h-6"/>, label: 'Library' },
    { id: 'DATA VAULT', icon: <MonetizationOnIcon className="w-6 h-6"/>, label: 'Yield' },
  ];

  return (
    <div className="h-screen w-screen bg-[#050505] text-white flex flex-col font-sans overflow-hidden select-none bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,rgba(0,0,0,1)_100%)]">
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
           
           <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleSearch}
                className="bg-zinc-900 text-white pl-12 pr-4 py-3 rounded-full border border-white/10 focus:border-accent outline-none text-sm w-64 uppercase tracking-widest font-mono"
              />
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

         <div className="flex items-center gap-10 text-2xl font-bold text-gray-300">
           {isSaving ? (
             <div className="flex items-center gap-3 text-accent bg-accent/10 px-5 py-2 rounded-full border border-accent/20">
               <DnsIcon className="w-5 h-5 animate-pulse" /> <span className="text-sm font-bold uppercase tracking-widest">Saving to Vault...</span>
             </div>
           ) : (
             <div className="flex items-center gap-3 text-green-500 bg-green-500/10 px-5 py-2 rounded-full border border-green-500/20">
               <CheckIcon className="w-5 h-5" /> <span className="text-sm font-bold uppercase tracking-widest">System Saved</span>
             </div>
           )}
           <div className="flex items-center gap-3">
              <ShowChartIcon className="w-6 h-6 text-green-500 animate-pulse" />
           </div>
           <div className="flex items-center gap-3">
              <WifiIcon className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <span className="font-mono text-xl mr-2">LTEUSA</span>
           </div>
           <div className="font-mono">{time}</div>
         </div>
      </header>

      <main className="flex-1 relative overflow-hidden mt-4">
         <VirtualKeyboard />
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
              {view === 'BUILD' && <BuildStation />}
              {view === 'IDE' && <UnifiedIDE />}
              {view === 'DEV KIT' && <DevKit />}
              {view === 'TERMINAL' && <TerminalView />}
              {view === 'SETTINGS' && (
                <div className="h-full flex items-center justify-center flex-col opacity-50">
                  <SettingsIcon className="w-32 h-32 mb-8 animate-[spin_10s_linear_infinite]" />
                  <h2 className="text-4xl font-black uppercase tracking-widest">Sovereign Settings</h2>
                  <p className="text-xl font-mono mt-4 text-gray-400">Android Build A21S30i19GP13</p>
                </div>
              )}
            </motion.div>
         </AnimatePresence>
      </main>

      <footer className="px-16 py-6 bg-black/80 backdrop-blur-xl border-t border-white/5 flex justify-between items-center z-30 text-[10px] uppercase font-black tracking-[0.2em] text-gray-500">
         <div className="flex gap-10">
            <span>© 2026 A#0M Technologies / Google LLC</span>
            <span className="text-white">Author, Creator & Engineer: Matthew Joshua Gallegos</span>
            <span>Sponsor: Bebe Rexha</span>
         </div>
         <div className="flex gap-10 text-right">
            <span>Attorney: Proctor & Gamble</span>
            <span>Design: Java</span>
            <span>Secret: Bitcoin</span>
            <span>Arch: Macintosh / Apple / Pixel / Microsoft</span>
            <span className="text-accent">Encryption: 512-bit AES // FCC Compliant</span>
         </div>
      </footer>
    </div>
  );
}
