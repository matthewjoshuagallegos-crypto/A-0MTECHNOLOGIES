import { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ScatterChart, Scatter, ZAxis } from 'recharts';
import { Monitor, Cpu, Maximize, Layers, Camera } from 'lucide-react';

const pipelineData = [
  { tech: 'Blender', proc: 'Base Mesh Generation' },
  { tech: 'ZBrush', proc: 'High-Resolution Sculpting' },
  { tech: 'Autodesk Maya', proc: 'Topology & UV Mapping' },
  { tech: 'Autodesk Maya', proc: 'Skeletal Rigging' },
  { tech: 'Autodesk Maya', proc: 'Kinematic Animation' },
  { tech: 'Substance Painter', proc: 'Realistic Textures & Albedo' },
  { tech: 'Substance Painter', proc: 'PBR Material Physics' },
  { tech: 'Unreal Engine 4', proc: '3D Prepass (Scene Depth)' },
  { tech: 'Unreal Engine 4', proc: 'Photorealistic Lumen Rendering' },
  { tech: 'Unreal Engine 4', proc: 'Screen Space Reflections' },
  { tech: 'Custom Engine', proc: 'Particle & VFX Rendering' },
  { tech: 'High8 Camcorder', proc: 'Raw Analog Video Capture' },
  { tech: 'Digitizer System', proc: 'Analog-To-Digital Scaling' },
  { tech: 'A#0M Scaler', proc: 'Color-Shift & Indexing' },
  { tech: 'Classic Imager', proc: '2D Sprite Generation Overlays' }
];

const renderData = Array.from({ length: 15 }, (_, i) => ({
  layer: i + 1,
  depth: i + 1,
  renderIntensity: Math.floor(Math.random() * 4000) + (i * 500) + 2000,
  resolution: i > 10 ? 8192 : 4096, // 8K for top layers, 4K for base layers
  tech: pipelineData[i].tech,
  process: pipelineData[i].proc
}));

export default function RendererEngine() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-black/90 backdrop-blur-md border border-accent p-6 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.4)] min-w-[280px]">
          <p className="font-black text-accent tracking-widest uppercase mb-4 text-sm border-b border-white/10 pb-2">Layer {data.layer} // {data.resolution}p</p>
          <div className="mb-4">
            <p className="text-white font-black text-2xl uppercase">{data.tech}</p>
            <p className="text-gray-400 font-mono text-sm uppercase mt-1 tracking-widest">{data.process}</p>
          </div>
          <p className="text-blue-400 font-mono font-bold">{data.renderIntensity} TFLOPs Allocated</p>
        </div>
      );
    }
    return null;
  };

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
            
            <div className="flex-1 min-h-0 relative">
              {/* Technical Crosshair Overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 border border-white/5 overflow-hidden">
                 <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-accent/30 shadow-[0_0_10px_#D4AF37]" />
                 <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-accent/30 shadow-[0_0_10px_#D4AF37]" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-accent/50 rounded-full animate-pulse" />
              </div>

              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <CartesianGrid strokeDasharray="2 2" stroke="#222" vertical={true} />
                  <XAxis 
                    type="number" 
                    dataKey="layer" 
                    name="Layer" 
                    unit="L" 
                    domain={[0, 16]} 
                    stroke="#555" 
                    tick={{fill: '#888', fontSize: 12}}
                    label={{ value: 'ARRAY DEPTH (X)', position: 'insideBottom', offset: -10, fill: '#D4AF37', fontSize: 12, fontWeight: 'bold' }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="renderIntensity" 
                    name="Intensity" 
                    unit=" T" 
                    domain={[0, 10000]} 
                    stroke="#555" 
                    tick={{fill: '#888', fontSize: 12}}
                    label={{ value: 'COMPUTE INTENSITY (Y)', angle: -90, position: 'insideLeft', fill: '#D4AF37', fontSize: 12, fontWeight: 'bold' }}
                  />
                  <ZAxis type="number" dataKey="resolution" range={[100, 500]} />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3', stroke: '#D4AF37' }}
                    content={<CustomTooltip />}
                  />
                  <Scatter 
                    name="15-Grade Nodes" 
                    data={renderData} 
                    fill="#D4AF37" 
                    line={{ stroke: '#D4AF37', strokeWidth: 2, strokeDasharray: '5 5' }}
                    shape={(props: any) => {
                      const { cx, cy } = props;
                      return (
                        <g>
                          <circle cx={cx} cy={cy} r={6} fill="#D4AF37" />
                          <circle cx={cx} cy={cy} r={12} stroke="#D4AF37" fill="none" className="animate-pulse" />
                        </g>
                      );
                    }}
                  />
                </ScatterChart>
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
               <div className="absolute top-0 right-0 p-6 opacity-10 group-focus:opacity-30 transition-opacity">
                  <Camera className="w-32 h-32 text-accent" />
               </div>
               <h4 className="text-2xl font-black uppercase text-white mb-6">Pipeline Architecture</h4>
               <div className="text-gray-400 text-sm leading-relaxed font-mono space-y-6 h-full overflow-y-auto pr-4 custom-scrollbar pb-[100px] z-10 relative">
                 <p>
                   <strong className="text-white block mb-1 uppercase tracking-widest">Modeling & Rigging (L1-L5):</strong> 
                   Utilizing <span className="text-accent font-bold">Autodesk Maya</span> for industry-standard skeletal rigging and kinematic animation. <span className="text-accent font-bold">ZBrush</span> is utilized for creating intricate, high-resolution details in characters, supported by <span className="text-accent font-bold">Blender</span> for base generation.
                 </p>
                 <p>
                   <strong className="text-white block mb-1 uppercase tracking-widest">Texturing & Materials (L6-L7):</strong>
                   <span className="text-accent font-bold">Substance Painter</span> maps realistic textures and PBR material physics to 3D assets in real-time.
                 </p>
                 <p>
                   <strong className="text-white block mb-1 uppercase tracking-widest">Graphics Pipeline (L8-L11):</strong>
                   Modern high-fidelity graphics are achieved via <span className="text-accent font-bold">Unreal Engine 4</span> executing a 3D prepass for scene depth, granting cheap screen-space effects and photorealistic performance equivalent to Street Fighter.
                 </p>
                 <p>
                    <strong className="text-white block mb-1 uppercase tracking-widest">Networking & Core (Kernel Sync):</strong>
                    Real-time fighting requires <span className="text-accent font-bold">GGPO Rollback Netcode</span>. The A#0M Kernel decoupling rendering from deterministic logic to ensure frame-perfect sync across the LTE Private Network.
                 </p>
                 <p>
                   <strong className="text-white block mb-1 uppercase tracking-widest">Analog Digitization (L12-L15):</strong>
                   The imager completely implements the classic Mortal Kombat digitization system. It utilizes <span className="text-accent font-bold">High8 camcorder</span> analog feeds to shoot physical footage, which is then digitized, scalar-processed, and color-shifted into 2D sprites rendered precisely over modern UE4 bounding boxes.
                 </p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
