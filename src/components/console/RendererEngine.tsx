import { useState, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { Monitor, Cpu, Layers, Camera } from 'lucide-react';

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
  renderIntensity: Math.floor(Math.random() * 4000) + (i * 500) + 2000,
  resolution: i > 10 ? 8192 : 4096,
  tech: pipelineData[i].tech,
  process: pipelineData[i].proc
}));

function WebGLGraph({ data }: { data: any[] }) {
  const points = useMemo(() => data.map(d => ({
    position: new THREE.Vector3((d.layer / 16) * 10 - 5, (d.renderIntensity / 10000) * 10 - 5, 0),
    data: d
  })), [data]);

  return (
    <>
      <OrbitControls makeDefault enableZoom={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Nodes */}
      {points.map((p, i) => (
        <group key={i}>
          <mesh position={p.position}>
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.5} />
          </mesh>
          <Text
            position={[p.position.x, p.position.y + 0.4, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
          >
            {p.data.layer}
          </Text>
        </group>
      ))}

      {/* Lines */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap(p => [p.position.x, p.position.y, p.position.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#D4AF37" linewidth={2} />
      </line>
    </>
  );
}

export default function RendererEngine() {
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
         <div className="w-2/3 bg-zinc-900/50 rounded-[2rem] border border-white/5 p-8 flex flex-col relative tv-focus" tabIndex={0}>
            <div className="flex items-center gap-4 mb-8">
               <Layers className="w-8 h-8 text-white" />
               <h3 className="text-2xl font-black uppercase tracking-widest">WebGL Graph: 15-Layer Depth Allocation</h3>
            </div>
            
            <div className="flex-1 min-h-0 relative">
               <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                  <WebGLGraph data={renderData} />
               </Canvas>
            </div>
         </div>

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
                 <p><strong className="text-white block mb-1 uppercase tracking-widest">Modeling & Rigging (L1-L5):</strong> Utilizing <span className="text-accent font-bold">Autodesk Maya</span> for industry-standard skeletal rigging and kinematic animation.</p>
                 <p><strong className="text-white block mb-1 uppercase tracking-widest">Texturing & Materials (L6-L7):</strong> Substance Painter maps realistic textures and PBR material physics.</p>
                 <p><strong className="text-white block mb-1 uppercase tracking-widest">Graphics Pipeline (L8-L11):</strong> Unreal Engine 4 executing a 3D prepass for scene depth.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
