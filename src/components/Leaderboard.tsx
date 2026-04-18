/**
 * A#0M Global Leaderboard & Contribution Matrix
 * Copyright (c) 2026 Matthew Joshua Gallegos
 */

import { Trophy, Medal, Award, User, Target } from 'lucide-react';

interface Entry {
  rank: number;
  name: string;
  category: string;
  contribution: string;
  points: number;
}

export default function Leaderboard() {
  const entries: Entry[] = [
    { rank: 1, name: "MATTHEW J. GALLEGOS", category: "KERNEL_ENGINEER", contribution: "SOVEREIGN_AUTHORITY", points: 999999 },
    { rank: 2, name: "AI STUDIO AGENT", category: "AUTONOMOUS_DEV", contribution: "APP_RECONSTRUCTION", points: 450200 },
    { rank: 3, name: "BEBE REXHA", category: "SPONSOR", contribution: "GLOBAL_SYNDICATE", points: 305100 },
    { rank: 4, name: "PIXEL_TECH_01", category: "HARDWARE", contribution: "SKU_DISTRIBUTION", points: 89000 },
    { rank: 5, name: "APPLE_CORE_DEV", category: "SOFTWARE", contribution: "IOS_INTEGRATION", points: 76000 },
  ];

  return (
    <div className="p-10 bg-black h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-accent mb-4">Contribution Matrix</h2>
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase">Global Leaderboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           {entries.slice(1, 4).map((entry, i) => (
             <div key={i} className="premium-card p-10 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Trophy className="w-20 h-20" />
                </div>
                <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                   {i === 0 ? <Medal className="w-10 h-10 text-accent" /> : <Award className="w-10 h-10 text-gray-500" />}
                </div>
                <h4 className="text-[9px] font-mono text-accent uppercase tracking-widest mb-2">Rank #0{entry.rank}</h4>
                <p className="text-lg font-black text-white mb-1">{entry.name}</p>
                <p className="text-[11px] font-mono text-gray-500 mb-6">{entry.contribution}</p>
                <div className="bg-black/50 px-6 py-2 rounded-full border border-white/5">
                   <span className="text-white font-black text-lg">{entry.points.toLocaleString()}</span>
                   <span className="text-[9px] text-accent ml-2 uppercase font-mono">Tokens</span>
                </div>
             </div>
           ))}
        </div>

        <div className="premium-card bg-zinc-900/10">
          <div className="p-8 border-b border-white/5 bg-black/40">
             <h3 className="text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-4">
                <Target className="w-4 h-4 text-accent" /> Full Segment Registry
             </h3>
          </div>
          <div className="divide-y divide-white/5">
             {entries.map((entry) => (
               <div key={entry.rank} className="p-6 flex items-center gap-8 hover:bg-white/5 transition-colors">
                  <span className="w-8 text-[11px] font-mono text-gray-500">#{entry.rank.toString().padStart(2, '0')}</span>
                  <div className="flex-1 flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center font-black text-accent">
                        {entry.name[0]}
                     </div>
                     <div>
                        <p className="text-sm font-bold text-white tracking-tight">{entry.name}</p>
                        <p className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">{entry.category}</p>
                     </div>
                  </div>
                  <div className="text-right">
                     <p className="text-sm font-black text-white">{entry.points.toLocaleString()}</p>
                     <p className="text-[8px] font-mono text-accent uppercase tracking-tighter">Verified Contribution</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
