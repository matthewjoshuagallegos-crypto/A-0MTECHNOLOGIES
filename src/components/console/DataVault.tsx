import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, Activity, Database, Server, ChevronRight, RefreshCw, Network } from 'lucide-react';
import { useA0M } from '../../core/A0MContext';

const data = [
  { day: 'Mon', yield: 12.5, telemetry: 140 },
  { day: 'Tue', yield: 15.2, telemetry: 180 },
  { day: 'Wed', yield: 14.8, telemetry: 160 },
  { day: 'Thu', yield: 18.9, telemetry: 220 },
  { day: 'Fri', yield: 24.5, telemetry: 280 },
  { day: 'Sat', yield: 31.2, telemetry: 350 },
  { day: 'Sun', yield: 48.4, telemetry: 410 },
];

export default function DataVault() {
  const { state, setState } = useA0M();

  const handleHarvest = () => {
    setState(s => ({ ...s, tokens: s.tokens + Math.floor(Math.random() * 150) + 50 }));
  };

  return (
    <div className="h-full flex flex-col px-16 pb-16">
      {/* Header Area */}
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-6xl font-black tracking-tighter mb-4 uppercase text-white drop-shadow-md">Data Monetization</h1>
          <p className="text-2xl text-gray-400 font-medium">Your telemetry is your property. Monetize your gameplay and network usage instantly.</p>
        </div>
        <button className="tv-focus flex items-center gap-4 bg-accent text-black px-10 py-5 rounded-full font-black uppercase text-2xl" autoFocus tabIndex={0}>
           <DollarSign className="w-8 h-8" /> Withdraw Payout
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-10 flex-1 min-h-0">
         
         {/* Main Chart Card */}
         <div className="col-span-2 bg-zinc-900 rounded-[2rem] p-10 border border-white/5 flex flex-col tv-focus shadow-2xl relative overflow-hidden group" tabIndex={0}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div>
                <h3 className="text-3xl font-black uppercase tracking-widest text-white">Yield Generation</h3>
                <p className="text-gray-400 mt-2 text-lg">7-Day Trajectory</p>
              </div>
              <div className="text-right flex items-center gap-4">
                <button onClick={handleHarvest} className="text-white hover:text-accent outline-none focus:ring-2 ring-accent rounded-full p-2">
                   <RefreshCw className="w-6 h-6" />
                </button>
                <span className="text-accent font-mono text-3xl font-bold bg-accent/10 px-4 py-2 rounded-xl">+142.5%</span>
              </div>
            </div>
            
            <div className="flex-1 min-h-0 relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.6}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#555" tick={{fill: '#888', fontSize: 16}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#111', borderColor: '#333', borderRadius: '16px', fontWeight: 'bold'}} 
                    itemStyle={{color: '#D4AF37'}}
                  />
                  <Area type="monotone" dataKey="yield" stroke="#D4AF37" strokeWidth={6} fill="url(#colorYield)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Stats Sidebar */}
         <div className="space-y-10 overflow-y-auto pr-4 custom-scrollbar">
            
            <div className="bg-zinc-900 rounded-[2rem] p-8 border border-white/5 tv-focus group flex flex-col justify-center" tabIndex={0}>
               <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
                 <Network className="w-8 h-8 text-blue-500" />
               </div>
               <p className="text-gray-400 text-xl font-bold mb-2 uppercase tracking-widest">Network Stability</p>
               <p className="text-6xl font-mono font-black text-white group-focus:text-blue-400 transition-colors">0.2 MS</p>
               <div className="mt-4 flex items-center text-sm font-bold text-gray-500 uppercase">
                 <ChevronRight className="w-4 h-4" /> GGPO Rollback Active
               </div>
            </div>

            <div className="bg-zinc-900 rounded-[2rem] p-8 border border-white/5 tv-focus group flex flex-col justify-center" tabIndex={0}>
               <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                 <Database className="w-8 h-8 text-accent" />
               </div>
               <p className="text-gray-400 text-xl font-bold mb-2 uppercase tracking-widest">A#0M Tokens Vaulted</p>
               <p className="text-6xl font-mono font-black text-white group-focus:text-accent transition-colors">{state.tokens.toLocaleString()}</p>
               <div className="mt-4 flex items-center text-sm font-bold text-gray-500 uppercase">
                 <ChevronRight className="w-4 h-4" /> Go to Exchange
               </div>
            </div>

            <div className="bg-zinc-950 rounded-[2rem] p-8 border border-white/5 tv-focus flex items-center gap-6 group" tabIndex={0}>
               <Server className="w-12 h-12 text-blue-500 group-focus:animate-pulse" />
               <div>
                 <p className="text-white font-black text-xl mb-1 uppercase tracking-widest">Hardware Node Active</p>
                 <p className="text-blue-400 text-lg font-mono">Selling unused compute...</p>
               </div>
            </div>

         </div>
      </div>
    </div>
  )
}
