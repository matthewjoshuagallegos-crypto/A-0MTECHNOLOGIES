import React, { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import { 
  Gamepad2, 
  Monitor, 
  Cpu, 
  Globe, 
  ShieldAlert, 
  Cast, 
  Terminal, 
  Activity, 
  TrendingUp,
  Layers,
  Lock,
  Unlock,
  Copyright,
  Rocket,
  Zap,
  Pickaxe,
  Target,
  X
} from 'lucide-react';
import { motion } from 'motion/react';

const GamingPlatform = ({ isHostNetworkActive, setIsHostNetworkActive, activeGame, setActiveGame, isApnBridged, setCurrentView }: { isHostNetworkActive: boolean, setIsHostNetworkActive: (active: boolean) => void, activeGame: string | null, setActiveGame: (game: string | null) => void, isApnBridged: boolean, setCurrentView: (view: any) => void }) => {
  const [sessionActive, setSessionActive] = useState(false);
  const [latency, setLatency] = useState(0);
  const [fps, setFps] = useState(0);
  const [logs, setLogs] = useState([]);
  const [activeStream, setActiveStream] = useState('403_CONTROL');
  const [deploymentServer, setDeploymentServer] = useState('production-01.a0m.network');
  const canvasRef = useRef(null);

  // System Logging Utility
  const addLog = (msg: string, type: 'info' | 'success' | 'warning' = 'info') => {
    setLogs(prev => [{
      id: `${Date.now()}-${Math.random()}`,
      msg: `[© APACHE 2036] ${msg}`,
      type,
      time: new Date().toLocaleTimeString()
    }, ...prev].slice(0, 15));
  };

  // Initialize Gaming Engine & Cloud Handshake
  const startGamingSession = async () => {
    addLog("INITIALIZING GAMING_ENGINE_OMEGA.DLL...", "warning");
    await new Promise(r => setTimeout(r, 800));
    
    addLog("BYPASSING PROXY HANDSHAKE... DIRECT TCP/TLD CONNECTION ESTABLISHED", "success");
    addLog("EMULATING XBOX SERIES X2 / PS6 QUALCOMMAC ARCHITECTURE...", "info");
    await new Promise(r => setTimeout(r, 600));

    addLog("CONNECTING APN HOST NETWORK TO CLOUD PLATFORMS...", "info");
    addLog("SYNCING APP FUNCTIONS TO GOOGLE PROFILE...", "info");
    await new Promise(r => setTimeout(r, 600));

    addLog("OPENING eא& PRODUCTION STREAM ON PORT 512", "success");
    addLog("VERIFYING LEI1126OMB06655 AUTHORIZATION...", "success");
    
    setSessionActive(true);
    addLog("RENDERING ENGINE ACTIVE - FULL PLAYABILITY ENABLED", "success");
    addLog("CHRONOS FINAL DISPATCH: SESSION LIVE", "success");
  };

  const handleDeploy = async () => {
    addLog(`INITIATING DEPLOYMENT TO ${deploymentServer.toUpperCase()}...`, "warning");
    await new Promise(r => setTimeout(r, 1000));
    addLog("COMPILING NEURAL ASSETS & SHADERS...", "info");
    await new Promise(r => setTimeout(r, 800));
    addLog("PUSHING BUILD TO TARGET SERVER...", "info");
    await new Promise(r => setTimeout(r, 1200));
    addLog(`DEPLOYMENT TO ${deploymentServer} SUCCESSFUL`, "success");
  };

  // Simulated Performance Metrics for the eא& Stream
  useEffect(() => {
    if (sessionActive) {
      const interval = setInterval(() => {
        setLatency(Math.floor(Math.random() * (8 - 2 + 1) + 2));
        setFps(Math.floor(Math.random() * (240 - 144 + 1) + 144));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sessionActive]);

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans p-4 md:p-8 flex flex-col gap-6 selection:bg-blue-500/30">
      
      {/* Header: Legal & Authority Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-zinc-900/50 border border-white/10 p-4 rounded-2xl backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-blue-600/20 rounded-lg">
            <Cpu className="text-blue-500" size={24} />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter text-white uppercase italic">Sovereign Cloud Gaming Platform v2026.4</h1>
            <p className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
              Property Under Strict Copyright to A#0M TECHNOLOGIES // LEI1126OMB06655 // ISBN 978-0-13-468599-1
            </p>
            <p className="text-[8px] text-zinc-600 font-mono tracking-widest uppercase mt-1">
              START: 07/06/2026 4:30A.M. // PRESENT: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">Host Network</span>
            <button 
              onClick={() => setIsHostNetworkActive(!isHostNetworkActive)}
              className={cn("w-12 h-6 rounded-full p-1 transition-colors", isHostNetworkActive ? "bg-accent" : "bg-white/10")}
            >
              <motion.div 
                animate={{ x: isHostNetworkActive ? 24 : 0 }}
                className="w-4 h-4 bg-white rounded-full"
              />
            </button>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-[10px] text-emerald-500 font-bold uppercase">Chronos Dispatch Active</div>
            <div className="text-[9px] text-zinc-600">Member of Congress Honor v2026.4</div>
          </div>
          <div className={`w-3 h-3 rounded-full ${sessionActive ? 'bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]' : 'bg-red-500'}`} />
        </div>
      </div>

      {/* Main Grid: Viewport & Controls */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar: Engine Metrics */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-zinc-900 border border-white/10 p-5 rounded-2xl space-y-6 shadow-2xl">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <Activity size={14} /> Engine Metrics
            </h2>
            
            <MetricItem label="FPS" value={sessionActive ? `${fps}` : '--'} color="text-emerald-400" />
            <MetricItem label="LATENCY" value={sessionActive ? `${latency}ms` : '--'} color="text-blue-400" />
            <MetricItem label="STREAM" value={activeStream} color="text-amber-400" />
            <MetricItem 
              label="RADIUS" 
              value={!isHostNetworkActive ? 'activate a0m.lteusa.network? ' : (isApnBridged ? '100 Gbps (A#0M_NEURAL)' : '10 Gbps')} 
              color={!isHostNetworkActive ? 'text-zinc-500' : (isApnBridged ? 'text-purple-400' : 'text-blue-400')} 
            />
            
            <div className="pt-4 border-t border-white/5 space-y-3">
              <h3 className="text-[10px] font-bold text-zinc-600 uppercase">Active Libraries</h3>
              <LibraryTag label="QweryLinexus OS" />
              <LibraryTag label="Android Bootloader v2026" />
              <LibraryTag label="iOS NAWS (Wireless)" />
              <LibraryTag label="QualcomMac Neural" />
              <LibraryTag label="Google ChromeOS v26" />
              <LibraryTag label="A#0M ASPECT v5" />
            </div>

            <div className="pt-4 border-t border-white/5">
              <button 
                onClick={() => setCurrentView('gaming-market')}
                className="w-full py-2 bg-accent/10 border border-accent/30 rounded-xl text-[10px] font-bold text-accent uppercase tracking-widest hover:bg-accent/20 transition-all flex items-center justify-center gap-2"
              >
                <TrendingUp size={12} />
                Market Intelligence
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/10 p-5 rounded-2xl">
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cast size={14} /> Cast Targets
            </h2>
            <div className="space-y-2">
              <button className="w-full text-left p-2 rounded bg-black/40 border border-white/5 text-[10px] hover:border-blue-500/50 transition-colors">
                TOSHIBA_43_ENT_DISPLAY_01
              </button>
              <button className="w-full text-left p-2 rounded bg-black/40 border border-white/5 text-[10px] hover:border-blue-500/50 transition-colors">
                GOOGLE_NEST_HUB_GPLAY
              </button>
            </div>
          </div>
        </div>

        {/* Center: Gaming Viewport */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="relative aspect-video bg-black rounded-3xl border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
            {!sessionActive ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_50%,_rgba(30,30,30,1)_0%,_rgba(0,0,0,1)_100%)]">
                <Gamepad2 size={64} className="text-zinc-800 mb-6" />
                <button 
                  onClick={startGamingSession}
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                >
                  INITIALIZE CLOUD SESSION
                </button>
                <p className="mt-4 text-[10px] text-zinc-600 uppercase tracking-widest">Authorized by LEI1126OMB06655</p>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Simulated Game Canvas with Scanning Overlay */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="z-10 text-center">
                  <div className="text-4xl font-black italic text-white tracking-tighter mb-2">STREAMING LIVE</div>
                  <div className="text-[10px] font-mono text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-500/30">
                    ENC: eא&-AES_512 // PORT403
                  </div>
                </div>
                {/* CRT Scanline Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] opacity-30"></div>
              </div>
            )}
            
            {/* Viewport HUD */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
              <div className="flex gap-2">
                <span className="bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[9px] font-bold">4K // 60FPS</span>
                <span className="bg-red-600/80 px-2 py-1 rounded text-[9px] font-bold animate-pulse uppercase tracking-tighter">Live Broadcast</span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[9px] text-white/50 font-mono">NODE_US_CLOVIS_NM</span>
                <span className="text-[9px] text-white/50 font-mono">TOSHIBA_BRIDGE_ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="bg-zinc-900 border border-white/10 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              <ControlIcon icon={<Gamepad2 size={18} />} label="Controller" active={sessionActive} />
              <ControlIcon icon={<Monitor size={18} />} label="Video" active={sessionActive} />
              <ControlIcon icon={<Cast size={18} />} label="Cast" active={sessionActive} />
            </div>
            
            <div className="flex-1 flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1">
                <Globe size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input 
                  type="text"
                  value={deploymentServer}
                  onChange={(e) => setDeploymentServer(e.target.value)}
                  placeholder="Target Server..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-[10px] font-mono focus:outline-none focus:border-blue-500/50 transition-colors"
                />
              </div>
              <button 
                onClick={handleDeploy}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Rocket size={14} />
                DEPLOY
              </button>
            </div>

            <div className="flex gap-2">
               <button 
                onClick={() => setActiveStream(activeStream === '403_CONTROL' ? '512_PRODUCTION' : '403_CONTROL')}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-[10px] font-bold rounded-lg transition-colors border border-white/5"
              >
                SWITCH STREAM
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Command & Legal */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-black border border-white/10 rounded-2xl h-[300px] flex flex-col overflow-hidden">
            <div className="bg-zinc-900 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">DTS:UCOT Log</span>
              <Terminal size={12} className="text-zinc-600" />
            </div>
            <div className="flex-1 p-3 font-mono text-[9px] overflow-y-auto space-y-1">
              {logs.map(log => (
                <div key={log.id} className="flex gap-2">
                  <span className="text-zinc-700">{log.time}</span>
                  <span className={log.type === 'success' ? 'text-emerald-500' : log.type === 'warning' ? 'text-amber-500' : 'text-blue-400'}>
                    {log.msg}
                  </span>
                </div>
              ))}
              {!sessionActive && <div className="text-zinc-800 animate-pulse mt-4">AWAITING HANDSHAKE...</div>}
            </div>
          </div>

          <div className="bg-red-950/20 border border-red-500/20 p-5 rounded-2xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldAlert className="text-red-500" size={18} />
              <h3 className="text-[10px] font-bold text-red-400 uppercase tracking-tighter italic">FCC Compliance Advisory</h3>
            </div>
            <p className="text-[9px] text-zinc-400 leading-relaxed italic mb-4">
              Property Under Strict Copyright to A#0M TECHNOLOGIES. All streaming via Port 512 is protected under the Sovereign User Honor code.
            </p>
            <div className="flex items-center gap-2 text-white">
              <Copyright size={12} />
              <span className="text-[10px] font-bold">2026 A#0M TECH</span>
            </div>
          </div>
        </div>
      </div>

      {/* Game Library Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-display italic uppercase tracking-tighter">Game Library</h3>
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            {isHostNetworkActive ? 'HOST NETWORK ONLINE' : 'HOST NETWORK OFFLINE'}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { id: 'cosmo-dust', title: 'Cosmo Dust: Star Drift', icon: <Rocket size={24} />, color: 'from-purple-500 to-pink-500' },
            { id: 'neon-racer', title: 'Neon Pulse Racer', icon: <Zap size={24} />, color: 'from-cyan-500 to-blue-500' },
            { id: 'void-miner', title: 'Void Miner Pro', icon: <Pickaxe size={24} />, color: 'from-orange-500 to-yellow-500' },
            { id: 'cyber-chess', title: 'Cyber Chess 2077', icon: <Target size={24} />, color: 'from-green-500 to-emerald-500' },
          ].map((game) => (
            <div
              key={game.id}
              className={cn(
                "glass p-4 rounded-2xl border border-white/5 cursor-pointer group relative overflow-hidden",
                !isHostNetworkActive && "opacity-50 grayscale cursor-not-allowed"
              )}
              onClick={async () => {
                if (isHostNetworkActive) {
                  setActiveGame(game.id);
                  await startGamingSession();
                }
              }}
            >
              <div className={cn("w-full aspect-video rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white shadow-lg", game.color)}>
                {game.icon}
              </div>
              <h4 className="font-bold text-sm mb-1">{game.title}</h4>
              <p className="text-[10px] text-text-muted uppercase tracking-widest">Ready to Play</p>
              
              {!isHostNetworkActive && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                  <Lock size={20} className="text-white/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MetricItem = ({ label, value, color }) => (
  <div className="flex justify-between items-end border-b border-white/5 pb-2">
    <span className={cn("text-[10px] font-bold uppercase tracking-widest", label === 'RADIUS' ? 'text-zinc-300' : 'text-zinc-600')}>{label}</span>
    <span className={`text-sm font-black italic tracking-tighter ${color}`}>{value}</span>
  </div>
);

const LibraryTag = ({ label }) => (
  <div className="px-2 py-1 bg-white/5 rounded border border-white/5 text-[9px] font-mono text-zinc-400 inline-block mr-1 mb-1 italic">
    {label}
  </div>
);

const ControlIcon = ({ icon, label, active }) => (
  <div className={`flex flex-col items-center gap-1 transition-opacity ${active ? 'opacity-100' : 'opacity-20'}`}>
    <div className="p-2 bg-zinc-800 rounded-xl hover:bg-zinc-700 cursor-pointer border border-white/5">
      {icon}
    </div>
    <span className="text-[8px] font-bold text-zinc-500 uppercase">{label}</span>
  </div>
);

export default GamingPlatform;
