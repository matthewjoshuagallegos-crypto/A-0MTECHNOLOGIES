import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useState } from 'react';
import NeonDrifter from './games/NeonDrifter';
import { useA0M } from '../../core/A0MContext';

export default function GamingHub() {
  const { state, setState } = useA0M();
  const [downloadingGame, setDownloadingGame] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [playingGame, setPlayingGame] = useState<number | null>(null);

  const installed = state.library.filter(g => g.downloaded);
  const available = state.library.filter(g => !g.downloaded);
  
  const categories = [
    { title: "Ready To Play", games: installed },
    { title: "Android Vault Access", games: available }
  ].filter(c => c.games.length > 0);

  const handleGameAction = (gameId: number, downloaded: boolean) => {
    if (downloaded) {
      setPlayingGame(gameId);
    } else {
      setDownloadingGame(gameId);
      setProgress(0);
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setDownloadingGame(null);
              // Save the game as downloaded to state/disk
              setState(s => ({
                  ...s,
                  library: s.library.map(g => g.id === gameId ? { ...g, downloaded: true, type: 'Local Engine' } : g)
              }));
              setPlayingGame(gameId);
            }, 500);
            return 100;
          }
          return p + Math.floor(Math.random() * 15) + 5;
        });
      }, 500);
    }
  };

  if (playingGame) {
    // For now, mapping all launches to the custom Neon Drifter engine since it's the playable canvas demo
    return <NeonDrifter onClose={() => setPlayingGame(null)} />;
  }

  return (
    <div className="h-full overflow-y-auto pb-32 mask-bottom">
       {/* Download Overlay */}
       {downloadingGame && (
         <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center font-sans">
            <div className="bg-zinc-900 border border-white/10 p-16 rounded-[3rem] text-center w-[800px] shadow-2xl">
               <AutorenewIcon className="w-24 h-24 text-accent animate-spin mx-auto mb-8" />
               <h2 className="text-5xl font-black uppercase tracking-widest text-white mb-4">Allocating Kernel Memory...</h2>
               <p className="text-2xl text-gray-400 font-mono mb-12">Downloading 512-Bit Game Assets</p>
               
               <div className="w-full bg-black h-8 rounded-full overflow-hidden border border-white/5 relative">
                  <div className="h-full bg-accent transition-all duration-300 shadow-[0_0_20px_#D4AF37]" style={{ width: `${progress}%` }} />
               </div>
               <div className="text-right mt-4 text-3xl font-black font-mono text-white">{Math.min(100, progress)}%</div>
            </div>
         </div>
       )}

       {categories.map((row, index) => (
         <div key={row.title} className="mb-16 relative">
           <h2 className="text-4xl font-black text-white px-16 mb-6 tracking-tight uppercase shadow-white drop-shadow-lg">{row.title}</h2>
           
           <div className="tv-scroll-row">
             {row.games.map((game, i) => (
               <div key={game.id} className="tv-item group" tabIndex={0} autoFocus={index === 0 && i === 0}>
                 <img src={game.art} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110" />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity p-8 flex flex-col justify-end">
                    <div className="transform translate-y-8 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
                      <span className="text-accent font-bold uppercase tracking-widest text-sm mb-2 block">{game.type}</span>
                      <h3 className="text-3xl font-black text-white mb-4 line-clamp-1">{game.title}</h3>
                      
                      <div className="flex gap-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 delay-100">
                         <button 
                           onClick={() => handleGameAction(game.id, game.downloaded)}
                           className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 font-bold uppercase focus:ring-4 ring-accent"
                         >
                            {game.downloaded ? (
                              <><PlayArrowIcon className="w-5 h-5 fill-black" /> Play Kernel</>
                            ) : (
                              <><CloudDownloadIcon className="w-5 h-5 text-black" /> Download Node</>
                            )}
                         </button>
                         <button className="bg-zinc-800/80 backdrop-blur-md text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold uppercase focus:ring-4 ring-white">
                            <AddIcon className="w-5 h-5" /> Details
                         </button>
                      </div>
                    </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
       ))}
    </div>
  )
}
