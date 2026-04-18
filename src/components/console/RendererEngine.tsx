import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ScatterChart, Scatter, ZAxis } from 'recharts';
import { Monitor, Cpu, Maximize, Layers } from 'lucide-react';

const renderData = Array.from({ length: 15 }, (_, i) => ({
  layer: i + 1,
  depth: i + 1,
  renderIntensity: Math.floor(Math.random() * 4000) + (i * 500) + 2000,
  resolution: i > 10 ? 8192 : 4096, // 8K for top layers, 4K for base layers
}));

export default function RendererEngine() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  return (
    <div className="h-full flex flex-col px-16 pb-16">
       <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 uppercase text-white drop-shadow-md">15-Grade Imager Array</h1>
          <p className="text-xl text-accent font-mono uppercase tracking-widest">Ultra 4K/8K Multi-Layer Matrix Renderer</p>
        </div>
        <div className="flex gap-6">
           <div className="bg-black border border-white/10 px-8 py-4 rounded-full flex items-center gap-4">
              <Monitor className="w-6 h-6 text-gray-500" />
              <span className="font-black text-xl text-white">8K UHD READY</span>
           </div>
           <div className="bg-accent/20 border border-accent/40 px-8 py-4 rounded-full flex items-center gap-4 focus:ring-4 ring-white tv-focus" tabIndex={0}>
              <Cpu className="w-6 h-6 text-accent" />
              <span className="font-black text-xl text-accent uppercase tracking-widest">Compile Shaders</span>
           </div>
        </div>
      </div>

      <div className="flex gap-10 flex-1 min-h-0">
         {/* Left Side: Graph */}
         <div className="w-2/3 bg-zinc-900/50 rounded-[2rem] border border-white/5 p-8 flex flex-col relative tv-focus" tabIndex={0}>
            <div className="flex items-center gap-4 mb-8">
               <Layers className="w-8 h-8 text-white" />
               <h3 className="text-2xl font-black uppercase tracking-widest">XY Graph: 15-Layer Depth Allocation</h3>
            </div>
            
            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={renderData}>
                  <defs>
                    <linearGradient id="colorRender" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="layer" stroke="#888" tick={{fontSize: 14}} tickFormatter={(val) => `L${val}`} />
                  <YAxis stroke="#888" tick={{fontSize: 14}} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#000', borderColor: '#D4AF37', borderWidth: 2, borderRadius: '12px'}}
                    formatter={(value: number) => [`${value} TFLOPs`, 'Compute Intensity']}
                    labelFormatter={(label) => `Imager Layer ${label}`}
                  />
                  <Area 
                     type="stepAfter" 
                     dataKey="renderIntensity" 
                     stroke="#D4AF37" 
                     strokeWidth={4} 
                     fill="url(#colorRender)" 
                     activeDot={{ r: 8, fill: '#FFF' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
         </div>

         {/* Right Side: Diagnostics */}
         <div className="w-1/3 flex flex-col gap-6">
            <div className="bg-zinc-950 border border-white/10 rounded-[2rem] p-8 tv-focus" tabIndex={0}>
               <h4 className="text-xl font-bold uppercase text-gray-500 mb-6 tracking-widest">Engine Emulation Specs</h4>
               
               <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2 font-mono uppercase text-gray-400">
                      <span>Mortal Kombat (PS5)</span>
                      <span className="text-white font-bold">120 FPS / 8K</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                       <div className="w-[98%] h-full bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2 font-mono uppercase text-gray-400">
                      <span>Street Fighter 6 (Xbox)</span>
                      <span className="text-white font-bold">120 FPS / 4K+</span>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                       <div className="w-[100%] h-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-black border border-white/5 rounded-[2rem] p-8 flex-1 relative overflow-hidden tv-focus group" tabIndex={0}>
               <div className="absolute top-0 right-0 p-6 opacity-10 group-focus:animate-pulse">
                  <Maximize className="w-32 h-32 text-accent" />
               </div>
               <h4 className="text-2xl font-black uppercase text-white mb-4">Real-Time Transpile</h4>
               <p className="text-gray-400 text-lg leading-relaxed font-mono">
                 Routing heavy geometric datasets through 15 cascaded matrices. The 15-grade imager bypasses standard GPU limits by isolating lighting, physics, and textures into independent 8K sub-layers before merging into the main Android Authority Kernel.
               </p>
               <div className="mt-8 flex gap-4">
                  <div className="px-4 py-2 border border-accent/30 bg-accent/10 text-accent rounded text-sm font-black uppercase">Layer Merging Active</div>
                  <div className="px-4 py-2 border border-accent/30 bg-accent/10 text-accent rounded text-sm font-black uppercase">Native Emulation</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
