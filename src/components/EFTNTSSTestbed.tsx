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

// --- RADIUS EQUATION ---
const _radiusPromise = new Promise<{ radius: number; formula: string }>((resolve) => {
  const x = 42; // Example vertical intercept
  const y = 24; // Example horizontal intercept
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  resolve({ radius, formula: `r = sqrt(${x}² + ${y}²)` });
});
void _radiusPromise;
// -----------------------

import React, { useState, useEffect } from 'react';
import { 
  Server, Activity, Bot, Loader2, Zap, Target, ShieldCheck, Cpu, Thermometer, Database, Wifi, CloudLightning
} from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { GoogleGenAI } from '@google/genai';

const calculateEFTNTSS = (devX: number, devY: number, towerX: number, towerY: number, scenario: any) => {
  const dist = Math.sqrt(Math.pow(devX - towerX, 2) + Math.pow(devY - towerY, 2));
  const V = 1000; 
  const h = Math.max(1, Math.abs(devY - towerY)); 
  const D = Math.max(0.1, dist); 
  const C = 2 * Math.PI * 50; 
  const term1 = Math.sqrt(Math.PI * (V / h));
  const term2 = D / C;
  const radiusQuality = term1 * term2;
  let eftntssRate = (10 / radiusQuality); 
  eftntssRate -= scenario.penalty * 0.1;
  eftntssRate = Math.min(Math.max(eftntssRate, 0.1), 10.5);
  return { eftntssRate, radiusQuality, D };
};

const OS_PROVIDERS = [
  { id: 'android', name: 'Android (Google)', icon: '🤖', color: '#3ddc84', patch: 'Security Patch: 2026-01-05', thermal: 'Optimized' },
  { id: 'ios', name: 'iOS (Apple)', icon: '🍎', color: '#f5f5f7', patch: 'Security Patch: 19.2.1', thermal: 'Balanced' },
  { id: 'windows', name: 'Windows (Microsoft)', icon: '🪟', color: '#00a4ef', patch: 'Security Patch: KB5043', thermal: 'High-Perf' },
  { id: 'samsung', name: 'One UI (Samsung)', icon: '🌌', color: '#1428a0', patch: 'Security Patch: Knox 4.1', thermal: 'Aggressive' }
];

export default function EFTNTSSTestbed() {
  const [selectedOS, setSelectedOS] = useState(OS_PROVIDERS[0]);
  const [isSimulating] = useState(true);
  const [towerPos] = useState({ x: 50, y: 50 });
  const [devicePos, setDevicePos] = useState({ x: 20, y: 30, dx: 0.2, dy: 0.1 });
  const [metrics, setMetrics] = useState({ eftntssRate: 0, radiusQuality: 0, D: 0 });
  const [cpuTemp, setCpuTemp] = useState(45);
  const [fanStatus, setFanStatus] = useState("IDLE");
  const [encryptionLoad, setEncryptionLoad] = useState(0);
  const [stampPiles, setStampPiles] = useState<any[]>([]);
  const [rateHistory, setRateHistory] = useState<any[]>([]);
  const [scenario, setScenario] = useState({ name: 'Standard Flow', penalty: 0, description: 'Optimal conditions.' });
  const [isInjecting, setIsInjecting] = useState(false);
  const [aiDiagnostic, setAiDiagnostic] = useState("");
  const [isDiagnosing, setIsDiagnosing] = useState(false);

  const runNeuralDiagnostic = async () => {
    if (isDiagnosing) return;
    setIsDiagnosing(true);
    setAiDiagnostic("");
    const prompt = `Act as a senior network engineer monitoring the EFTNTSS protocol hardware.
    Current Telemetry:
    - Throughput: ${metrics.eftntssRate.toFixed(2)} GB/s
    - Core Temp: ${cpuTemp.toFixed(1)}°C
    - Cooling State: ${fanStatus}
    - Encryption Load: ${Math.round(encryptionLoad)}%
    Analyze the stability of the secure stream and the efficiency of the overheat avoidance system. 
    Use technical jargon (EFTNTSS, Thermal Throttling, Token Sorting, Overheat Avoidance). 
    Keep it brief (max 2 sentences) and professional.`;
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      setAiDiagnostic(response.text || "Diagnostic Link Failed.");
    } catch (e) {
      setAiDiagnostic("Neural Core Offline.");
    } finally {
      setIsDiagnosing(false);
    }
  };

  const injectAnomaly = async () => {
    if (isInjecting) return;
    setIsInjecting(true);
    const prompt = `Generate a random environmental network interference scenario for a high-speed mobile data link.
    Examples: 'Solar Flare', 'Atmospheric River', 'Quantum Noise', 'Urban Canyon Reflection'.
    Return ONLY a JSON object with:
    - name (string)
    - description (string, max 6 words)
    - penalty (number, 1-20, representing signal loss)`;
    try {
      const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || "" });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: "application/json" }
      });
      const result = JSON.parse(response.text || "{}");
      setScenario(result);
    } catch (e) {
      console.error(e);
      setScenario({ name: 'System Reset', description: 'Reverting to baseline.', penalty: 0 });
    } finally {
      setIsInjecting(false);
    }
  };

  useEffect(() => {
    if (!isSimulating) return;
    const interval = setInterval(() => {
      setDevicePos(prev => {
        let nX = prev.x + prev.dx;
        let nY = prev.y + prev.dy;
        if (nX <= 5 || nX >= 95) prev.dx *= -1;
        if (nY <= 5 || nY >= 95) prev.dy *= -1;
        return { ...prev, x: nX, y: nY };
      });
      const newMetrics = calculateEFTNTSS(devicePos.x, devicePos.y, towerPos.x, towerPos.y, scenario);
      setMetrics(newMetrics);
      setEncryptionLoad(Math.min(100, (newMetrics.eftntssRate * 10) + 20));
      setCpuTemp(prev => {
        const targetTemp = 40 + (newMetrics.eftntssRate * 5);
        if (prev > 65) {
          setFanStatus("TURBO COOLING");
          return prev - 2;
        } else if (prev > 55) {
          setFanStatus("ACTIVE");
          return prev - 0.5;
        } else {
          setFanStatus("SILENT");
          return prev + (targetTemp > prev ? 0.5 : -0.5);
        }
      });
      setRateHistory(prev => [...prev.slice(-59), { id: crypto.randomUUID(), time: Date.now(), rate: newMetrics.eftntssRate }]);
      if (Math.random() > 0.8) {
        setStampPiles(prev => [{
          id: crypto.randomUUID(),
          time: new Date().toLocaleTimeString(),
          rate: `${newMetrics.eftntssRate.toFixed(2)} GB/s`,
          encryption: 'AES-512-GCM',
          stamp: `TOKEN_VERIFIED_${Math.floor(Math.random()*9999)}`
        }, ...prev.slice(0, 5)]);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [isSimulating, devicePos, towerPos, scenario]);

  return (
    <div className="flex flex-col h-full bg-slate-950/40 backdrop-blur-md text-slate-100 font-sans overflow-hidden rounded-xl border border-slate-800">
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-cyan-900/50 p-4 flex justify-between items-center shadow-lg z-20">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-cyan-950/50 rounded-lg border border-cyan-500/30">
            <Wifi className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h1 className="text-xl font-black text-white tracking-tight">EFTNTSS <span className="text-cyan-400">MASTER NODE</span></h1>
            <p className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Encrypted Flow of True Network Transfer</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {OS_PROVIDERS.map(os => (
            <button
              key={os.id}
              onClick={() => setSelectedOS(os)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-all ${selectedOS.id === os.id ? 'bg-slate-800 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)]' : 'bg-transparent border-transparent text-slate-500 hover:text-slate-300'}`}
            >
              <span className="text-lg">{os.icon}</span>
              <span className="text-xs font-bold">{os.name}</span>
            </button>
          ))}
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 relative bg-slate-950/20 overflow-hidden border-r border-slate-800">
          <div className="absolute inset-0 pointer-events-none opacity-20" 
             style={{ backgroundImage: 'linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />
          <div className="absolute top-4 left-4 bg-black/80 p-4 rounded-lg border border-cyan-900 backdrop-blur-md z-10 max-w-sm">
            <div className="text-cyan-400 font-bold text-xs mb-1 uppercase tracking-wider flex items-center gap-2">
              <Database className="w-3 h-3" /> Physics Engine Active
            </div>
            <div className="text-white text-xl font-black font-mono my-2">
              √π(V ÷ h) × (D ÷ C) = R
            </div>
            <div className="space-y-1 text-[9px] text-slate-400 font-mono border-t border-slate-800 pt-2 mt-2">
              <div className="flex justify-between"><span>V (Volume):</span> <span className="text-white">Data Capacity Const</span></div>
              <div className="flex justify-between"><span>h (Height):</span> <span className="text-white">Signal Verticality</span></div>
            </div>
            <div className="mt-4 pt-3 border-t border-cyan-900/50">
               <div className="flex justify-between items-center mb-1">
                 <span className="text-[9px] font-bold text-slate-300 uppercase">External Environment</span>
                 <span className="text-[9px] text-cyan-400">{scenario.name}</span>
               </div>
               <div className="text-[9px] text-slate-500 italic mb-2">{scenario.description}</div>
               <button 
                 onClick={injectAnomaly} 
                 disabled={isInjecting}
                 className="w-full bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-400 border border-cyan-500/30 rounded py-1.5 text-[10px] font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
               >
                 {isInjecting ? <Loader2 className="w-3 h-3 animate-spin" /> : <CloudLightning className="w-3 h-3" />}
                 INJECT AI ANOMALY ✨
               </button>
            </div>
          </div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ left: `${towerPos.x}%`, top: `${towerPos.y}%` }}>
            <div className="relative">
              <div className="absolute -inset-20 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
              <Server className="w-12 h-12 text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </div>
          </div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75" style={{ left: `${devicePos.x}%`, top: `${devicePos.y}%` }}>
            <svg className="absolute w-[200vw] h-[200vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ left: '50%', top: '50%' }}>
              <line 
                x1="50%" y1="50%" 
                x2={`${(towerPos.x - devicePos.x) * 20 + 50}%`} 
                y2={`${(towerPos.y - devicePos.y) * 20 + 50}%`} 
                stroke="#06b6d4" 
                strokeWidth={metrics.eftntssRate} 
                strokeOpacity="0.4"
              />
            </svg>
            <div className="bg-slate-900 p-3 rounded-2xl border-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)] relative z-20">
              <div className="text-2xl">{selectedOS.icon}</div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg">
                {metrics.eftntssRate.toFixed(2)} GB/s
              </div>
            </div>
          </div>
        </div>
        <div className="w-[450px] bg-slate-900/50 backdrop-blur-md border-l border-slate-800 flex flex-col z-30">
          <div className="p-5 border-b border-slate-800 bg-slate-800/50">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">System Architecture</h2>
              <div className="px-2 py-0.5 bg-green-900/30 text-green-400 border border-green-500/30 rounded text-[9px] font-bold uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Secure Stream Active
              </div>
            </div>
            <div className="text-lg font-bold text-white mb-1">{selectedOS.name} Core</div>
            <div className="font-mono text-[10px] text-cyan-300 bg-cyan-950/30 p-2 rounded border border-cyan-900/50">
              {selectedOS.patch} | Optimization: {selectedOS.thermal}
            </div>
          </div>
          <div className="p-5 flex-1 min-h-[200px] flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold text-cyan-500 uppercase flex items-center gap-2">
                <Activity className="w-4 h-4" /> EFTNTSS Throughput (GB/s)
              </h3>
              <span className="text-2xl font-black text-white">{metrics.eftntssRate.toFixed(2)}</span>
            </div>
            <div className="flex-1 bg-slate-950/50 rounded-lg border border-slate-800 p-2 relative overflow-hidden">
               <div className="absolute top-2 right-2 text-[9px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-950/30 px-2 rounded z-10">
                 Stable Commercial Link
               </div>
               <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={rateHistory}>
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="time" hide />
                  <YAxis domain={[0, 12]} stroke="#475569" fontSize={9} />
                  <Area type="monotone" dataKey="rate" stroke="#06b6d4" fillOpacity={1} fill="url(#colorRate)" isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-5 border-t border-slate-800 bg-black/20">
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-orange-500" />
                 <h3 className="text-xs font-bold text-slate-300 uppercase">Processor: Overheat Avoidance</h3>
               </div>
               <button 
                 onClick={runNeuralDiagnostic}
                 disabled={isDiagnosing}
                 className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 px-2 py-0.5 rounded text-[9px] font-bold transition-all disabled:opacity-50"
               >
                 {isDiagnosing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Bot className="w-3 h-3" />}
                 RUN NEURAL DIAGNOSTIC ✨
               </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] text-slate-500 uppercase">Core Temp</span>
                  <Thermometer className={`w-3 h-3 ${cpuTemp > 60 ? 'text-red-500' : 'text-green-500'}`} />
                </div>
                <div className="text-2xl font-mono text-white mb-1">{cpuTemp.toFixed(1)}°C</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-300 ${cpuTemp > 60 ? 'bg-red-500' : 'bg-orange-500'}`} style={{ width: `${(cpuTemp / 90) * 100}%` }}></div>
                </div>
              </div>
              <div className="bg-slate-950 p-3 rounded border border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[9px] text-slate-500 uppercase">Cooling / Fan</span>
                  <Zap className={`w-3 h-3 ${fanStatus === 'TURBO COOLING' ? 'text-cyan-400 animate-pulse' : 'text-slate-600'}`} />
                </div>
                <div className={`text-sm font-bold font-mono mb-1 ${fanStatus === 'TURBO COOLING' ? 'text-cyan-400' : 'text-slate-300'}`}>
                  {fanStatus}
                </div>
                <div className="text-[9px] text-slate-500">Encryption Load: {Math.round(encryptionLoad)}%</div>
              </div>
            </div>
            {aiDiagnostic && (
              <div className="mt-3 p-2 bg-cyan-900/10 border border-cyan-500/20 rounded text-[10px] text-cyan-200 leading-relaxed font-mono animate-in fade-in slide-in-from-top-1">
                <span className="text-cyan-500 font-bold mr-1">{">>>"} NEURAL CORE:</span> {aiDiagnostic}
              </div>
            )}
          </div>
          <div className="h-40 bg-black p-4 border-t border-slate-800 flex flex-col overflow-hidden">
            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Target className="w-3 h-3" /> EFTNTSS Stamp Piles (Log Stream)
            </div>
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin scrollbar-thumb-slate-800">
              {stampPiles.map(log => (
                <div key={log.id} className="text-[9px] font-mono flex items-center justify-between border-b border-slate-900 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-600">{log.time}</span>
                    <span className="text-cyan-600 font-bold">{log.stamp}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">{log.encryption}</span>
                    <span className="text-emerald-500 font-bold">{log.rate}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
