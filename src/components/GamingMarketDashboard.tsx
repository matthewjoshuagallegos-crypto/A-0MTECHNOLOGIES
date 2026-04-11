/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * ==========================================
 */

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Globe, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  Search, 
  Filter, 
  Download,
  ExternalLink,
  BarChart3,
  PieChart,
  Layers,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { POPULAR_GAMES_MARKET_DATA, GameMarketData } from '../constants/gamingMarketData';
import { cn } from '../lib/utils';

export default function GamingMarketDashboard({ setCurrentView }: { setCurrentView: (view: any) => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('All');
  const [selectedGame, setSelectedGame] = useState<GameMarketData | null>(null);

  const genres = ['All', ...new Set(POPULAR_GAMES_MARKET_DATA.map(g => g.genre))];

  const filteredGames = POPULAR_GAMES_MARKET_DATA.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         game.publisher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = filterGenre === 'All' || game.genre === filterGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-[#E4E3E0] text-[#141414] font-sans selection:bg-[#141414] selection:text-[#E4E3E0]">
      {/* Vendor Header */}
      <header className="border-b border-[#141414] p-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
            <Layers size={12} />
            A#0M Market Intelligence // Unit 403
          </div>
          <h1 className="text-6xl font-display italic tracking-tighter leading-[0.85] uppercase">
            Gaming Market <br />
            <span className="text-accent">Sovereign Data</span>
          </h1>
          <p className="font-mono text-xs opacity-60 max-w-md italic">
            Comprehensive analysis of global gaming assets, player demographics, and market availability for major vendor distribution.
          </p>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentView('global-trends')}
              className="px-4 py-2 border border-[#141414] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#141414] hover:text-[#E4E3E0] transition-all flex items-center gap-2"
            >
              <Globe size={12} /> Global Trends
            </button>
            <button className="px-4 py-2 border border-[#141414] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#141414] hover:text-[#E4E3E0] transition-all flex items-center gap-2">
              <Download size={12} /> Export CSV
            </button>
            <button className="px-4 py-2 bg-[#141414] text-[#E4E3E0] rounded-full text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all flex items-center gap-2">
              <ShieldCheck size={12} /> Verified Data
            </button>
          </div>
          <div className="text-right font-mono text-[9px] opacity-40 uppercase tracking-widest">
            © 2026 A#0M Technologies // FCC Compliant // 512-Bit Encrypted
          </div>
        </div>
      </header>

      {/* Controls Bar */}
      <div className="border-b border-[#141414] p-4 flex flex-col md:flex-row gap-4 items-center bg-white/50 backdrop-blur-sm sticky top-0 z-30">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30" size={16} />
          <input 
            type="text"
            placeholder="SEARCH MARKET ASSETS (TITLE, PUBLISHER, GENRE)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-none focus:ring-0 font-mono text-xs placeholder:opacity-30 p-2 pl-12 uppercase tracking-widest"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          {genres.map(genre => (
            <button
              key={genre}
              onClick={() => setFilterGenre(genre)}
              className={cn(
                "px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all border border-[#141414]",
                filterGenre === genre ? "bg-[#141414] text-[#E4E3E0]" : "hover:bg-[#141414]/5"
              )}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Investment Intelligence Alert */}
      <div className="bg-accent/10 border-b border-[#141414] p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-accent flex items-center justify-center text-[#141414] rounded-full animate-pulse">
            <Zap size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase tracking-tighter italic">2026 Sovereign Investment Intelligence</h3>
            <p className="text-[10px] font-mono opacity-60 uppercase tracking-widest">
              Sony PS6 (Cell-2) vs Microsoft XBOX2 (Azure-Native) // Major Stakeholders: BlackRock, Vanguard, SoftBank, A#0M Ventures
            </p>
          </div>
        </div>
        <button 
          onClick={() => setCurrentView('global-trends')}
          className="px-6 py-2 bg-[#141414] text-[#E4E3E0] text-[10px] font-bold uppercase tracking-widest hover:opacity-80 transition-all"
        >
          View Full Intelligence Report
        </button>
      </div>

      {/* Data Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#141414] bg-[#141414]/5">
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50 border-r border-[#141414]">ID</th>
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50 border-r border-[#141414]">Asset Title</th>
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50 border-r border-[#141414]">Publisher</th>
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50 border-r border-[#141414]">MAU (Est)</th>
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50 border-r border-[#141414]">Valuation</th>
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50 border-r border-[#141414]">Availability</th>
              <th className="p-4 text-left font-serif italic text-[11px] uppercase tracking-widest opacity-50">Interest</th>
            </tr>
          </thead>
          <tbody>
            {filteredGames.map((game, idx) => (
              <motion.tr 
                key={game.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedGame(game)}
                className="border-b border-[#141414] hover:bg-[#141414] hover:text-[#E4E3E0] transition-all cursor-pointer group"
              >
                <td className="p-4 font-mono text-[11px] border-r border-[#141414] opacity-40">0{idx + 1}</td>
                <td className="p-4 font-bold tracking-tight uppercase border-r border-[#141414]">
                  <div className="flex items-center justify-between">
                    {game.title}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </td>
                <td className="p-4 font-mono text-[11px] border-r border-[#141414]">{game.publisher}</td>
                <td className="p-4 font-mono text-[11px] border-r border-[#141414]">{game.mau}</td>
                <td className="p-4 font-mono text-[11px] border-r border-[#141414]">{game.marketValuation}</td>
                <td className="p-4 border-r border-[#141414]">
                  <span className={cn(
                    "px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                    game.availability === 'High' ? "border-emerald-500 text-emerald-600 group-hover:text-emerald-400" :
                    game.availability === 'Medium' ? "border-amber-500 text-amber-600 group-hover:text-amber-400" :
                    "border-blue-500 text-blue-600 group-hover:text-blue-400"
                  )}>
                    {game.availability}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1 bg-[#141414]/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${game.vendorInterestScore}%` }}
                        className="h-full bg-accent"
                      />
                    </div>
                    <span className="font-mono text-[10px]">{game.vendorInterestScore}%</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedGame && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGame(null)}
              className="absolute inset-0 bg-[#141414]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-[#E4E3E0] border border-[#141414] shadow-2xl overflow-hidden rounded-sm"
            >
              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                {/* Visual Side */}
                <div className="w-full md:w-1/3 bg-[#141414] p-8 text-[#E4E3E0] flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-[#141414]">
                      <TrendingUp size={32} />
                    </div>
                    <div>
                      <h2 className="text-4xl font-display italic tracking-tighter uppercase leading-none mb-2">
                        {selectedGame.title}
                      </h2>
                      <p className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
                        Asset ID: {selectedGame.id.toUpperCase()}_SEC_2026
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center">
                        <Globe size={16} />
                      </div>
                      <div>
                        <p className="text-[9px] opacity-40 uppercase font-mono">Region Dominance</p>
                        <p className="text-xs font-bold uppercase">{selectedGame.regionDominance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center">
                        <Users size={16} />
                      </div>
                      <div>
                        <p className="text-[9px] opacity-40 uppercase font-mono">Peak Concurrent</p>
                        <p className="text-xs font-bold uppercase">{selectedGame.peakConcurrent}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Side */}
                <div className="flex-1 p-8 overflow-y-auto custom-scrollbar">
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-1">
                      <h3 className="font-serif italic text-sm opacity-50 uppercase tracking-widest">Market Intelligence Report</h3>
                      <p className="text-[10px] font-mono uppercase tracking-widest">Status: {selectedGame.status} // Released: {selectedGame.releaseDate}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedGame(null)}
                      className="p-2 hover:bg-[#141414]/5 rounded-full transition-all"
                    >
                      <Zap size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#141414] pb-2 flex items-center gap-2">
                        <BarChart3 size={12} /> Core Metrics
                      </h4>
                      <div className="space-y-2">
                        <DetailItem label="Developer" value={selectedGame.developer} />
                        <DetailItem label="Publisher" value={selectedGame.publisher} />
                        <DetailItem label="Genre" value={selectedGame.genre} />
                        <DetailItem label="MAU" value={selectedGame.mau} />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#141414] pb-2 flex items-center gap-2">
                        <PieChart size={12} /> Financial Analysis
                      </h4>
                      <div className="space-y-2">
                        <DetailItem label="Valuation" value={selectedGame.marketValuation} />
                        <DetailItem label="Vendor Interest" value={`${selectedGame.vendorInterestScore}%`} />
                        <DetailItem label="Market Tier" value={selectedGame.vendorInterestScore > 95 ? "Tier S" : "Tier A"} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest border-b border-[#141414] pb-2">Platform Distribution</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedGame.platforms.map(p => (
                        <span key={p} className="px-3 py-1 bg-[#141414] text-[#E4E3E0] text-[9px] font-bold uppercase tracking-widest rounded-sm">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 p-4 border border-[#141414] bg-[#141414]/5 rounded-sm">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mb-2">
                      <DollarSign size={14} className="text-accent" /> Vendor Acquisition Note
                    </div>
                    <p className="text-[11px] italic opacity-70 leading-relaxed">
                      This asset demonstrates high liquidity and strong retention metrics within the {selectedGame.regionDominance} territories. Recommended for immediate vendor integration and cross-platform licensing.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-[#141414] p-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
        <div className="flex items-center gap-4">
          <div className="font-mono text-[9px] uppercase tracking-widest">A#0M Market Intel v2.6</div>
          <div className="w-1 h-1 bg-[#141414] rounded-full" />
          <div className="font-mono text-[9px] uppercase tracking-widest">FCC ID: LEI1126OMB06655</div>
        </div>
        <div className="font-serif italic text-[11px] uppercase tracking-widest">
          Matthew Joshua Gallegos // Bebe Rexha // A#0M Technologies
        </div>
      </footer>
    </div>
  );
}

function DetailItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-end border-b border-[#141414]/10 pb-1">
      <span className="text-[9px] font-mono uppercase opacity-50">{label}</span>
      <span className="text-xs font-bold uppercase tracking-tight">{value}</span>
    </div>
  );
}
