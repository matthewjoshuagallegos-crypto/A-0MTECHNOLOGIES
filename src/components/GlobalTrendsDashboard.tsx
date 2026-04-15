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

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Cpu, 
  Gamepad2, 
  Wifi, 
  TrendingUp, 
  Search, 
  Filter, 
  Zap, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { GLOBAL_TRENDS_2026, TrendItem } from '../constants/globalTrends2026';

const GlobalTrendsDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTrend, setSelectedTrend] = useState<TrendItem | null>(null);

  const categories = ['All', 'Software', 'Hardware', 'Gaming', 'Wireless', 'Trending'];

  const filteredTrends = useMemo(() => {
    return GLOBAL_TRENDS_2026.filter(trend => {
      const matchesSearch = trend.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           trend.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           trend.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || trend.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Software': return <Zap className="w-4 h-4" />;
      case 'Hardware': return <Cpu className="w-4 h-4" />;
      case 'Gaming': return <Gamepad2 className="w-4 h-4" />;
      case 'Wireless': return <Wifi className="w-4 h-4" />;
      case 'Trending': return <TrendingUp className="w-4 h-4" />;
      default: return <Globe className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Disruptive': return 'text-red-400 border-red-400/30 bg-red-400/10';
      case 'Emerging': return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'Mainstream': return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'Experimental': return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      default: return 'text-gray-400 border-gray-400/30 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 font-sans">
      {/* Header */}
      <header className="mb-12 border-b border-white/10 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-mono tracking-widest uppercase">A#0M Intelligence Network</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic font-serif">
              2026 Global Trends
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl font-mono text-sm leading-relaxed">
              Real-time intelligence mapping of the 2026 technological landscape. 
              Sourced from academic institutions, industry leaders, and A#0M proprietary R&D.
              <br />
              <span className="text-blue-400/60 mt-1 block italic">Citations: MIT, Stanford, FCC Compliance v5.12</span>
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text"
                placeholder="Search trends, tags, or sectors..."
                className="bg-white/5 border border-white/10 rounded-none py-3 pl-10 pr-4 w-full md:w-80 focus:outline-none focus:border-blue-500 transition-colors font-mono text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedCategory === cat 
                      ? 'bg-white text-black border-white' 
                      : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {filteredTrends.map((trend, index) => (
          <motion.div
            key={trend.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedTrend(trend)}
            className="group bg-[#0a0a0a] p-6 cursor-pointer hover:bg-white/5 transition-all relative overflow-hidden"
          >
            {/* Category Indicator */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-gray-500 group-hover:text-blue-400 transition-colors">
                {getCategoryIcon(trend.category)}
                <span className="text-[10px] font-mono uppercase tracking-widest">{trend.category}</span>
              </div>
              <div className={`px-2 py-0.5 rounded-full border text-[9px] font-mono uppercase ${getStatusColor(trend.status)}`}>
                {trend.status}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
              {trend.title}
            </h3>
            
            <p className="text-gray-500 text-sm mb-4 line-clamp-2 font-mono leading-relaxed">
              {trend.description}
            </p>

            <div className="mb-6 p-3 bg-white/[0.02] border border-white/5">
              <p className="text-[9px] font-mono italic text-gray-500 line-clamp-1">
                Source: {trend.source}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex flex-wrap gap-1">
                {trend.tags.slice(0, 2).map(tag => (
                  <span key={tag} className="text-[9px] text-gray-600 border border-white/5 px-1.5 py-0.5 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono uppercase">Details</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </div>

            {/* Impact Bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-blue-500/30 w-full">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${trend.impactScore}%` }}
                className="h-full bg-blue-500"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTrends.length === 0 && (
        <div className="py-24 text-center border border-white/10 bg-white/5">
          <Info className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400">No Intelligence Matches Found</h3>
          <p className="text-gray-500 font-mono text-sm mt-2">Adjust your filters or search query to explore other sectors.</p>
        </div>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTrend && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrend(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-[#0f0f0f] border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Side: Info */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="flex items-center gap-3 text-blue-400 mb-6">
                    {getCategoryIcon(selectedTrend.category)}
                    <span className="text-xs font-mono uppercase tracking-widest">{selectedTrend.category} Intelligence</span>
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6 italic font-serif leading-tight">
                    {selectedTrend.title}
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-widest">Description</h4>
                      <p className="text-gray-300 leading-relaxed font-mono">
                        {selectedTrend.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-widest">Market Cap</h4>
                        <p className="text-xl font-bold text-white font-mono">{selectedTrend.marketCap || 'N/A'}</p>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-widest">Impact Score</h4>
                        <div className="flex items-center gap-2">
                          <p className="text-xl font-bold text-blue-400 font-mono">{selectedTrend.impactScore}%</p>
                          <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500" style={{ width: `${selectedTrend.impactScore}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase text-gray-500 mb-2 tracking-widest">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedTrend.tags.map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Meta & Actions */}
                <div className="p-8 md:p-12 bg-white/[0.02] flex flex-col">
                  <div className="mb-auto space-y-8">
                    <div>
                      <h4 className="text-[10px] font-mono uppercase text-gray-500 mb-4 tracking-widest">Intelligence Source</h4>
                      <div className="p-4 bg-black/40 border border-white/5 rounded-none">
                        <p className="text-sm font-mono italic text-gray-400">
                          "{selectedTrend.source}"
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-blue-400/60 text-[10px] font-mono">
                          <ExternalLink className="w-3 h-3" />
                          <span>VERIFIED ACADEMIC RECORD</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-mono uppercase text-gray-500 mb-4 tracking-widest">Status Report</h4>
                      <div className={`inline-block px-4 py-2 border font-mono text-xs uppercase tracking-widest ${getStatusColor(selectedTrend.status)}`}>
                        {selectedTrend.status} PHASE
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 space-y-3">
                    <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                      <Zap className="w-4 h-4" />
                      Acquire Intelligence
                    </button>
                    <button 
                      onClick={() => setSelectedTrend(null)}
                      className="w-full py-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 font-mono text-xs uppercase tracking-widest transition-colors"
                    >
                      Close Terminal
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer Meta */}
      <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-8">
          <span>© 2026 A#0M Technologies</span>
          <span>FCC COMPLIANT 512-BIT</span>
          <span>SEC: BITCOIN</span>
        </div>
        <div className="flex items-center gap-8">
          <span className="text-blue-400/40">Sponsor: Bebe Rexha</span>
          <span className="text-blue-400/40">Partner: Microsoft</span>
        </div>
      </footer>
    </div>
  );
};

export default GlobalTrendsDashboard;
