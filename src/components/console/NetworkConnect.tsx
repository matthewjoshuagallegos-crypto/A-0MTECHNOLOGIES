import { Router, Radio, Shield, Globe, Lock, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function NetworkConnect() {
  const [scanning, setScanning] = useState(false);
  const [connected, setConnected] = useState("A#0M_LTEUSA_NETWORK");
  
  const [networks] = useState([
    { name: "A#0M_LTEUSA_NETWORK", signal: 100, secure: true, type: '5G' },
    { name: "Sovereign_Gateway_5GHz", signal: 85, secure: true, type: 'Wi-Fi 6E' },
    { name: "Public_Node_Unencrypted", signal: 45, secure: false, type: 'Wi-Fi 4' }
  ]);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => setScanning(false), 2000);
  };

  return (
    <div className="h-full px-16 pb-16 flex gap-16">
       {/* Left Panel: Settings & Status */}
       <div className="w-1/3 flex flex-col">
          <div className="mb-12">
            <h1 className="text-6xl font-black mb-4 uppercase drop-shadow-lg">Wireless</h1>
            <p className="text-2xl text-gray-400">Manage Android Level 21 connections</p>
          </div>
          
          <button 
            onClick={handleScan}
            className="w-full tv-focus bg-white text-black p-8 rounded-3xl flex items-center justify-between font-black text-2xl uppercase tracking-widest mb-10"
            autoFocus
            tabIndex={0}
          >
            <div className="flex items-center gap-6">
              <Router className={`w-8 h-8 ${scanning ? 'animate-bounce' : ''}`} /> 
              {scanning ? "Scanning Uplinks..." : "Scan Environment"}
            </div>
          </button>

          <div className="bg-zinc-900 rounded-3xl p-10 border border-white/5 space-y-8 flex-1 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
               <Shield className="w-32 h-32" />
             </div>
             <div>
                <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-2">Network Security</h3>
                <div className="flex items-center gap-4 text-green-500">
                  <Lock className="w-8 h-8" />
                  <span className="text-3xl font-black uppercase">Active</span>
                </div>
             </div>
             
             <div className="w-full h-px bg-white/10" />

             <div>
                <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-2">Routing Protocol</h3>
                <div className="flex items-center gap-4 text-white">
                  <Share2 className="w-8 h-8 text-accent" />
                  <span className="text-2xl font-black uppercase">512-BIT KERNEL TUNNEL</span>
                </div>
                <p className="text-gray-400 text-lg mt-4 font-mono leading-relaxed">
                  All traffic from this TV console is routed and monetized through the A#0M Authority gateway. 
                </p>
             </div>
          </div>
       </div>

       {/* Right Panel: Network List */}
       <div className="w-2/3">
         <div className="bg-[#0A0A0A] rounded-[2.5rem] p-12 border border-white/10 h-full overflow-y-auto custom-scrollbar shadow-2xl relative">
            <h3 className="text-3xl font-black uppercase tracking-widest mb-10 flex items-center gap-6 text-white pb-6 border-b border-white/10">
              <Globe className="w-10 h-10 text-accent" /> Available Nodes
            </h3>
            
            <div className="space-y-6">
               {networks.map((net, i) => {
                 const isConnected = connected === net.name;
                 return (
                   <div 
                      key={net.name} 
                      onClick={() => setConnected(net.name)}
                      className={`tv-focus overflow-hidden rounded-2xl relative p-8 flex justify-between items-center cursor-pointer transition-colors ${
                        isConnected ? 'bg-accent/10 border-accent/30' : 'bg-black border-white/5'
                      } border-2`} 
                      tabIndex={0}
                   >
                      {/* Active State Background Indicator */}
                      {isConnected && <div className="absolute left-0 top-0 bottom-0 w-2 bg-accent" />}
                      
                      <div className="flex items-center gap-8 z-10 pl-4">
                         <Radio className={`w-12 h-12 ${isConnected ? 'text-accent' : 'text-gray-600'}`} />
                         <div>
                           <h4 className={`text-3xl font-bold ${isConnected ? 'text-accent' : 'text-white'}`}>{net.name}</h4>
                           <div className="flex items-center gap-3 text-lg text-gray-400 mt-2 font-mono uppercase">
                             <span className={isConnected ? "text-white font-bold" : ""}>{isConnected ? 'Connected' : net.type}</span>
                             <span>•</span>
                             <span className="flex items-center gap-2">
                               {net.secure ? <Lock className="w-4 h-4" /> : null} 
                               {net.secure ? 'Secured' : 'Open Network'}
                             </span>
                           </div>
                         </div>
                      </div>
                      
                      <div className="text-right z-10">
                         <div className="text-4xl font-mono font-black text-white">{net.signal}%</div>
                         <div className="text-gray-500 text-lg uppercase tracking-widest mt-1">Signal</div>
                      </div>
                   </div>
                 );
               })}
            </div>
         </div>
       </div>
    </div>
  )
}
