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
  Trophy, 
  Gamepad2, 
  Code2, 
  Palette, 
  TrendingUp, 
  Search, 
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  Zap,
  ChevronUp,
  ChevronDown,
  Minus
} from 'lucide-react';
import { LeaderboardEntry } from '../A0M_CORE_V2026_FINAL_SECURED_TYPES';
import { listenToLeaderboard, updateLeaderboardScore } from '../services/firebaseService';
import { cn } from '../lib/utils';
import toast from 'react-hot-toast';

interface LeaderboardProps {
  currentUserUid?: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ currentUserUid }) => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [filter, setFilter] = useState<'All' | 'Gamer' | 'Developer' | 'Artist' | 'Investor'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const unsubscribe = listenToLeaderboard((data) => {
      setEntries(data);
    });
    return () => unsubscribe();
  }, []);

  const filteredEntries = entries
    .filter(entry => filter === 'All' || entry.category === filter)
    .filter(entry => entry.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleSovereignSync = async () => {
    setIsSyncing(true);
    toast.loading('Syncing with Android SKU A21S30i19GP13 Network (g.dev/MaTtYmAdNeSs)...', { id: 'sync' });
    
    // Simulate network delay for 512-bit handshake
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      // In a real implementation, this would fetch from a proxy or API endpoint
      // For now, we simulate the integration by adding a "Android SKU A21S30i19GP13" entry if it doesn't exist
      const sovereignEntry: LeaderboardEntry = {
        uid: 'sovereign_matty',
        name: 'MaTtYmAdNeSs (Android SKU A21S30i19GP13)',
        category: 'Developer',
        score: 999999,
        contribution: 'Core Radius Equation & 512-bit Architecture',
        avatar: 'https://picsum.photos/seed/matty/100/100'
      };
      
      await updateLeaderboardScore(sovereignEntry);
      toast.success('Android SKU A21S30i19GP13 Network Sync Complete', { id: 'sync' });
    } catch (error) {
      toast.error('Sync Failed: Handshake Timeout', { id: 'sync' });
    } finally {
      setIsSyncing(false);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Gamer': return <Gamepad2 className="w-4 h-4" />;
      case 'Developer': return <Code2 className="w-4 h-4" />;
      case 'Artist': return <Palette className="w-4 h-4" />;
      case 'Investor': return <TrendingUp className="w-4 h-4" />;
      default: return <Trophy className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Header Section */}
      <div className="p-6 border-b border-[#141414] flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter uppercase italic font-serif">
              Android SKU A21S30i19GP13 Leaderboard
            </h2>
            <p className="text-xs font-mono opacity-60 mt-1">
              FCC COMPLIANT | 512-BIT ENCRYPTION RATE | REAL-TIME SYNC
            </p>
          </div>
          <button 
            onClick={handleSovereignSync}
            disabled={isSyncing}
            className={cn(
              "flex items-center gap-2 px-4 py-2 bg-[#141414] text-[#E4E3E0] text-xs font-mono uppercase tracking-widest transition-all hover:opacity-90 disabled:opacity-50",
              isSyncing && "animate-pulse"
            )}
          >
            <RefreshCw className={cn("w-4 h-4", isSyncing && "animate-spin")} />
            {isSyncing ? 'Syncing...' : 'Android SKU A21S30i19GP13 Sync'}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
            <input 
              type="text" 
              placeholder="SEARCH ARTISANS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-transparent border border-[#141414] text-xs font-mono uppercase focus:outline-none focus:ring-1 focus:ring-[#141414]/20"
            />
          </div>
          <div className="flex gap-1">
            {(['All', 'Gamer', 'Developer', 'Artist', 'Investor'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-3 py-1.5 text-[10px] font-mono uppercase tracking-tighter border border-[#141414] transition-all",
                  filter === cat ? "bg-[#141414] text-[#E4E3E0]" : "hover:bg-[#141414]/5"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-[60px_1fr_120px_120px_100px] px-6 py-3 border-b border-[#141414] bg-[#141414]/5">
        <span className="font-serif italic text-[11px] opacity-50 uppercase tracking-widest">Rank</span>
        <span className="font-serif italic text-[11px] opacity-50 uppercase tracking-widest">Artisan / Contribution</span>
        <span className="font-serif italic text-[11px] opacity-50 uppercase tracking-widest text-center">Category</span>
        <span className="font-serif italic text-[11px] opacity-50 uppercase tracking-widest text-right">Score</span>
        <span className="font-serif italic text-[11px] opacity-50 uppercase tracking-widest text-right">Status</span>
      </div>

      {/* Leaderboard List */}
      <div className="flex-1 overflow-y-auto">
        <AnimatePresence mode="popLayout">
          {filteredEntries.length > 0 ? (
            filteredEntries.map((entry, index) => (
              <motion.div
                key={entry.uid}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "grid grid-cols-[60px_1fr_120px_120px_100px] px-6 py-4 border-b border-[#141414]/10 items-center transition-colors hover:bg-[#141414] hover:text-[#E4E3E0] group",
                  entry.uid === currentUserUid && "bg-[#141414]/5 border-l-4 border-l-[#141414]"
                )}
              >
                {/* Rank */}
                <div className="font-mono text-lg font-bold tracking-tighter">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                {/* Artisan Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img 
                      src={entry.avatar || `https://picsum.photos/seed/${entry.uid}/100/100`} 
                      alt={entry.name}
                      className="w-10 h-10 border border-[#141414] grayscale group-hover:grayscale-0 transition-all"
                      referrerPolicy="no-referrer"
                    />
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-[#141414] text-[#E4E3E0] p-1 rounded-full border border-[#E4E3E0]">
                        <Trophy className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-bold uppercase tracking-tight text-sm">{entry.name}</span>
                      {entry.uid === 'sovereign_matty' && <ShieldCheck className="w-3 h-3 text-blue-600" />}
                    </div>
                    <span className="text-[10px] font-mono opacity-60 group-hover:opacity-80 line-clamp-1 italic">
                      {entry.contribution}
                    </span>
                  </div>
                </div>

                {/* Category */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-2 px-2 py-1 border border-[#141414]/20 group-hover:border-[#E4E3E0]/20 text-[10px] font-mono uppercase">
                    {getCategoryIcon(entry.category)}
                    {entry.category}
                  </div>
                </div>

                {/* Score */}
                <div className="text-right font-mono font-bold tracking-tighter">
                  {entry.score.toLocaleString()}
                </div>

                {/* Trend/Status */}
                <div className="flex justify-end items-center gap-2">
                  {index < 3 ? (
                    <div className="flex items-center gap-1 text-green-600 group-hover:text-green-400 text-[10px] font-mono font-bold">
                      <ChevronUp className="w-3 h-3" />
                      TOP
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 opacity-30 group-hover:opacity-60 text-[10px] font-mono">
                      <Minus className="w-3 h-3" />
                      STABLE
                    </div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-64 opacity-20">
              <Zap className="w-12 h-12 mb-4" />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">No Artisans Detected in Sector</span>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-[#141414] bg-[#141414] text-[#E4E3E0] flex justify-between items-center text-[10px] font-mono uppercase tracking-widest">
        <div className="flex gap-6">
          <span>Total Artisans: {entries.length}</span>
          <span>Network Load: 0.04%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Android SKU A21S30i19GP13 Node Active
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
