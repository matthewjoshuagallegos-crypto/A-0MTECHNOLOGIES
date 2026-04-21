import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DnsIcon from '@mui/icons-material/Dns';
import SecurityIcon from '@mui/icons-material/Security';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { useA0M } from '../../core/A0MContext';

export default function MarketStorefront() {
  const { state, setState } = useA0M();

  const featured = [
    { id: 301, title: 'NEON DRIFTER: EX', price: 'Free / Node Yield', cost: 0, art: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450' },
    { id: 302, title: 'STREET FIGHTER 6 (ANDROID PORT)', price: '54.99 A#0M', cost: 5499, art: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800&h=450' },
    { id: 303, title: 'MORTAL KOMBAT 1 (ULTRA 8K)', price: '69.99 A#0M', cost: 6999, art: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450' },
  ];

  const handleBuy = (game: any) => {
     if(state.tokens >= game.cost && !state.library.find(g => g.title === game.title)) {
         setState(s => ({
             ...s,
             tokens: s.tokens - game.cost,
             library: [...s.library, { id: game.id, title: game.title, type: 'Purchased Store Port', art: game.art, downloaded: false }]
         }));
     }
  };

  return (
    <div className="h-full flex flex-col px-16 pb-16 mask-bottom">
       
       <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-black uppercase text-white mb-2 tracking-tighter shadow-black">A#0M Exchange Platform</h1>
            <p className="text-xl text-accent font-mono uppercase tracking-widest flex items-center gap-3">
              <DnsIcon className="w-5 h-5" /> Secured by Google Private Host Network
            </p>
          </div>
          <div className="flex gap-4">
             <div className="relative tv-focus rounded-full" tabIndex={0}>
                <input 
                  type="text" 
                  placeholder="SEARCH MARKET..." 
                  className="bg-zinc-900 border border-white/10 text-white font-mono uppercase px-8 py-4 pl-14 rounded-full outline-none w-80 focus:bg-white/10 transition-colors"
                />
                <SearchIcon className="w-6 h-6 text-gray-500 absolute left-5 top-1/2 -translate-y-1/2" />
             </div>
             <button className="bg-white text-black font-black uppercase px-8 py-4 rounded-full tv-focus flex items-center gap-2">
                <ShoppingCartIcon className="w-6 h-6" /> {state.tokens.toLocaleString()} A#0M
             </button>
          </div>
       </div>

       <div className="flex-1 overflow-y-auto w-full pr-4 pb-32">
          <h2 className="text-3xl font-black uppercase mb-6 text-gray-300 tracking-tight">Featured Imager Ports</h2>
          <div className="grid grid-cols-3 gap-8 mb-12">
             {featured.map(game => {
               const owned = !!state.library.find(g => g.title === game.title);
               return (
                 <div 
                   key={game.id} 
                   onClick={() => !owned && handleBuy(game)}
                   className={`tv-item group relative h-[400px] cursor-pointer ${owned ? 'opacity-50 ring-2 ring-green-500' : ''}`} 
                   tabIndex={0}
                 >
                   <img src={game.art} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110" />
                   <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                      <StarIcon className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-white font-bold font-mono">15-LAYER CERTIFIED</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
                      <h3 className="text-4xl font-black text-white leading-none mb-2 transform translate-y-4 group-focus:translate-y-0 group-hover:translate-y-0 transition-all">{game.title}</h3>
                      <p className={`font-mono text-xl opacity-0 group-focus:opacity-100 group-hover:opacity-100 transition-all delay-75 ${owned ? 'text-green-400' : 'text-accent'}`}>{owned ? "OWNED IN LIBRARY" : game.price}</p>
                   </div>
                 </div>
               );
             })}
          </div>

          <div className="bg-zinc-900/50 border border-white/5 rounded-[3rem] p-12 tv-focus group flex gap-12 items-center relative overflow-hidden" tabIndex={0}>
             <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-focus:opacity-100 transition-opacity" />
             <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 border border-blue-500/30">
                <SecurityIcon className="w-12 h-12 text-blue-400" />
             </div>
             <div>
                <h3 className="text-3xl font-black uppercase text-white mb-2">Google Backbone Active</h3>
                <p className="text-xl text-gray-400 font-mono leading-relaxed">
                   All purchases and data traffic are routed exclusively through your isolated Google Private Host Network node. This guarantees 0ms variance in latency and prevents ISP throttling dynamically.
                </p>
             </div>
          </div>
       </div>

    </div>
  );
}
