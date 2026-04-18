/**
 * A#0M Digital Marketplace & Physical Asset Registry
 * Copyright (c) 2026 Matthew Joshua Gallegos
 */

import { useState } from 'react';
import { ShoppingCart, Tag, Filter, Search, TrendingUp, Package } from 'lucide-react';

interface PhysicalAsset {
  id: string;
  name: string;
  category: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legacy';
  price: number;
  image: string;
}

export default function Marketplace() {
  const [assets] = useState<PhysicalAsset[]>([
    { id: 'AST-A1', name: 'Macintosh Classic Kernel Node', category: 'Hardware', rarity: 'Legacy', price: 15400, image: 'https://picsum.photos/seed/mac/400/400' },
    { id: 'AST-A2', name: '512bit Encrypted Data Shard', category: 'Software', rarity: 'Epic', price: 2100, image: 'https://picsum.photos/seed/data/400/400' },
    { id: 'AST-A3', name: 'FCC Compliant Cell Router v25', category: 'Wireless', rarity: 'Rare', price: 950, image: 'https://picsum.photos/seed/router/400/400' },
    { id: 'AST-A4', name: 'A#0M Elite Gaming Profile SKU', category: 'Gaming', rarity: 'Rare', price: 4500, image: 'https://picsum.photos/seed/gaming/400/400' },
  ]);

  return (
    <div className="p-10 bg-black min-h-full overflow-y-auto custom-scrollbar">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-accent mb-2 italic">A#0M EXCHANGE</h2>
          <h1 className="text-4xl font-black tracking-tight text-white uppercase italic">Sovereign Asset Registry</h1>
        </div>
        <div className="flex gap-4">
           <div className="bg-white/5 border border-white/10 flex items-center gap-3 px-4 py-2 rounded-full">
              <Search className="w-4 h-4 text-gray-500" />
              <input type="text" placeholder="Search Kernel Shards..." className="bg-transparent text-xs font-mono outline-none text-white w-48" />
           </div>
           <button className="bg-accent text-black font-black uppercase text-[10px] tracking-widest px-6 py-2 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Syndicate Listing +
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {assets.map(asset => (
          <div key={asset.id} className="premium-card group">
            <div className="relative aspect-square overflow-hidden">
               <img src={asset.image} alt={asset.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
               <div className="absolute top-4 left-4">
                 <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded ${
                   asset.rarity === 'Legacy' ? 'bg-accent text-black' : 'bg-white/20 text-white backdrop-blur-md'
                 }`}>
                   {asset.rarity}
                 </span>
               </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                 <span className="text-[9px] font-mono text-accent uppercase tracking-tighter">{asset.category}</span>
                 <span className="text-[9px] font-mono text-gray-500">#{asset.id}</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-6 tracking-tight line-clamp-1 group-hover:text-accent transition-colors">{asset.name.toUpperCase()}</h3>
              <div className="flex justify-between items-center bg-black/40 p-3 rounded-xl border border-white/5">
                 <div>
                    <p className="text-[8px] font-mono text-gray-500 uppercase">Valuation</p>
                    <p className="text-sm font-black text-white">{asset.price.toLocaleString()} A0M</p>
                 </div>
                 <button className="p-2 bg-accent/10 rounded-lg hover:bg-accent text-accent hover:text-black transition-all">
                    <ShoppingCart className="w-4 h-4" />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 p-8 bg-zinc-900/10 rounded-3xl border border-white/5 flex flex-col justify-center">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] mb-4 flex items-center gap-3">
              <TrendingUp className="w-4 h-4" /> Market Telemetry
            </h4>
            <div className="h-48 flex items-end gap-2 overflow-hidden">
               {[40, 60, 30, 80, 50, 90, 70, 45, 85, 30, 50, 75, 95].map((h, i) => (
                 <div key={i} className="flex-1 bg-accent/20 border-t border-accent rounded-t-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
               ))}
            </div>
         </div>
         <div className="p-8 premium-card flex flex-col items-center justify-center text-center">
            <Package className="w-12 h-12 text-accent mb-6" />
            <h4 className="text-white font-bold text-lg mb-2">Sovereign Custody</h4>
            <p className="text-[10px] text-gray-500 font-mono leading-relaxed px-4">All marketplace assets are tokenized on-kernel. No third-party custodians are recognized in this segment.</p>
         </div>
      </section>
    </div>
  );
}
