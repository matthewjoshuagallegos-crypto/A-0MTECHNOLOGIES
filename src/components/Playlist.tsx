/**
 * A#0M Global Playlist Interface
 * Copyright (c) 2026 Matthew Joshua Gallegos
 */

import { Play, SkipBack, SkipForward, Music, Volume2, ListMusic } from 'lucide-react';

export default function Playlist() {
  const songs = [
    { title: "SOVEREIGN DATA KERNEL", artist: "A#0M SOUND-SHARD", duration: "03:45" },
    { title: "512-BIT ENCRYPTION BEAT", artist: "GALLEGOS_RECON", duration: "04:12" },
    { title: "BEBE REXHA SYNC", artist: "A#0M SYNDICATE", duration: "02:58" },
    { title: "FCC COMPLIANT NOISE", artist: "SPECTRUM_ANALYZER", duration: "05:20" },
    { title: "AMERICAN PIONEERING FLOW", artist: "SOVEREIGN_SOUL", duration: "03:15" },
  ];

  return (
    <div className="p-10 bg-black h-full flex flex-col">
      <div className="flex-1 overflow-y-auto custom-scrollbar mb-10">
        <header className="mb-12">
          <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-accent mb-4">Aural Telemetry</h2>
          <h1 className="text-5xl font-black text-white italic tracking-tighter uppercase">Global Playlist</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="relative aspect-square premium-card flex flex-col items-center justify-center p-20 bg-gradient-to-br from-zinc-900 to-black overflow-hidden group">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] border-[20px] border-accent/20 rounded-full animate-[spin_60s_linear_infinite]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] border-[10px] border-accent/10 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
              </div>
              <Music className="w-32 h-32 text-accent mb-12 relative animate-bounce" />
              <div className="text-center relative">
                 <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Initializing Waveform...</h3>
                 <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-2">Source: A#0M AUTHORITY BROADCAST</p>
              </div>
           </div>

           <div className="space-y-4">
              <h4 className="text-[11px] font-black uppercase tracking-widest text-[#D4AF37] mb-6 flex items-center gap-3">
                 <ListMusic className="w-4 h-4" /> SECURE QUEUE
              </h4>
              {songs.map((song, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer border border-transparent hover:border-white/10">
                   <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-xs font-black text-gray-500 group-hover:bg-accent group-hover:text-black transition-all">
                      {i + 1}
                   </div>
                   <div className="flex-1">
                      <h5 className="text-sm font-bold text-white tracking-tight">{song.title}</h5>
                      <p className="text-[10px] font-mono text-gray-500 uppercase">{song.artist}</p>
                   </div>
                   <span className="text-[10px] font-mono text-gray-500">{song.duration}</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      <div className="p-10 bg-zinc-900/50 backdrop-blur-3xl rounded-3xl border border-white/10 flex items-center gap-12 shadow-2xl">
         <div className="flex items-center gap-10">
            <SkipBack className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer" />
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]">
               <Play className="w-8 h-8 text-black fill-current ml-1" />
            </div>
            <SkipForward className="w-6 h-6 text-gray-500 hover:text-white cursor-pointer" />
         </div>
         
         <div className="flex-1 px-8 border-x border-white/10">
            <div className="flex justify-between items-center mb-4">
               <div>
                  <h6 className="text-[10px] font-black text-white tracking-widest">SOVEREIGN DATA KERNEL</h6>
                  <p className="text-[8px] font-mono text-accent uppercase">A#0M SOUND-SHARD</p>
               </div>
               <span className="text-[9px] font-mono text-gray-500">01:45 / 03:45</span>
            </div>
            <div className="h-1.5 bg-black rounded-full overflow-hidden border border-white/5">
               <div className="h-full bg-accent w-[45%]" />
            </div>
         </div>

         <div className="flex items-center gap-4">
            <Volume2 className="w-5 h-5 text-gray-500" />
            <div className="w-32 h-1 bg-black rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-accent w-[80%]" />
            </div>
         </div>
      </div>
    </div>
  );
}
