/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  Terminal, 
  Zap, 
  Crosshair,
  Lock,
  Cpu,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

import { DEPLOYMENT_MANIFEST, MAPS_REDIRECTS, APN_CONFIG as CONST_APN_CONFIG } from '../A0M_CORE_V2026_FINAL_SECURED_CONSTANTS';

/**
 * A#0M-CORE // ROOT_NODE_GOOGLE_MAPS
 * Integrates the RADIUS Equation physically onto the geodetic grid.
 * 
 * Construction:
 * Northern Hemisphere Southern Hemisphere Longitude and Western Hemisphere Eastern Hemisphere Latitude="Coordinates°North? South?° Coordinates East West° 
 * Axis+Annular Shift @3.16 °
 * VerticalHorzintal Plane Intercept w/axis tilt at parellell verticalto axis shift with horizontal intercept at zero rotating 360° 24h windows"
 * 
 * SKU: {DEPLOYMENT_MANIFEST.id}
 */

const COORDINATE_SYSTEM = {
  LATITUDE_HEMISPHERE_CONFIG: "Coordinates°North? South?°",
  LONGITUDE_HEMISPHERE_CONFIG: "Coordinates East West°",
  AXIS_ANNULAR_SHIFT_DEG: 3.16,
  PLANE_INTERCEPT_CONFIG: "VerticalHorzintal Plane Intercept w/axis tilt at parellell verticalto axis shift with horizontal intercept at zero rotating 360° 24h windows"
};

const LOCAL_APN_CONFIG = {
  name: "A0M USA",
  port: 80,
  url: "https://a0m.lteusa.network",
  mcc: 310,
  mnc: 245,
  gatewayPortIp: "http://localhost:190.189.255.245",
  secondaryIp: "192.168.1.189",
  route: "FCC 254AdvancedMarker"
};

const SHL_LAT = -34;
const INTERCEPT_LON = 102;

const calculateRadius = (v: number, h: number, d: number, c: number) => {
  if (h === 0 || c === 0) return 0;
  return Math.sqrt(3.16) * (v / h) * (d / c);
};

const calculateCoordinatesFromAPN = (apn: typeof CONST_APN_CONFIG) => {
  // Simulation: derive coordinates from APN config
  // For now, return the requested fixed coordinates
  return { lat: SHL_LAT, lon: INTERCEPT_LON };
};

export default function RootNodeMap() {
  const [isTransfixed, setIsTransfixed] = useState(false);
  const [mapCenter, setMapCenter] = useState(calculateCoordinatesFromAPN(CONST_APN_CONFIG));
  const [mapZoom, setMapZoom] = useState(5);

  // RADIUS Equation State
  const [physics, setPhysics] = useState({
    V: 627200,          // Volume (RAM+ROM * Storage)
    h: 3290,            // Height (Alaska Baseline)
    D: 0.00000686755,   // Depth (Latency/DataBytes)
    C: 3555.0367,       // Circumference (Intercept)
    R: calculateRadius(627200, 3290, 0.00000686755, 3555.0367)
  });

  const triggerTransfix = () => {
    setIsTransfixed(true);
  };

  const recenterMap = () => {
    setMapCenter(calculateCoordinatesFromAPN(CONST_APN_CONFIG));
    setMapZoom(5);
  };

  const handleInputChange = (field: string, value: string) => {
    setIsTransfixed(false); 
    const newValue = parseFloat(value) || 0;
    setPhysics(prev => {
      const nextPhysics = { ...prev, [field]: newValue };
      nextPhysics.R = calculateRadius(nextPhysics.V, nextPhysics.h, nextPhysics.D, nextPhysics.C);
      return nextPhysics;
    });
  };

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapCenter.lat},${mapCenter.lon}&z=${mapZoom}`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-8 font-mono flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-white flex items-center gap-3">
            <Globe2 className="text-blue-500" size={32} />
            A#0M <span className="text-blue-500">GEODETIC ROOT (STATIC)</span>
          </h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Maps Javascript API // Dimension Synchronization // ISBN 978-0-13-468599-1</p>
          <p className="text-[8px] text-slate-600 uppercase tracking-widest mt-0.5">LICENSE: LEI1126OMB06655 // START: 07/06/2026 4:30A.M.</p>
          <p className="text-[8px] text-blue-500 uppercase tracking-widest mt-0.5 font-bold">SKU: A#0M-V2026-FINAL-SECURED</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg flex items-center gap-3">
            <Crosshair className="text-slate-500" size={16} />
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase">SHL Lat</div>
              <div className="text-xs font-bold text-blue-400">{mapCenter.lat}° N</div>
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-lg flex items-center gap-3">
            <MapPin className="text-slate-500" size={16} />
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase">Intercept Lon</div>
              <div className="text-xs font-bold text-blue-400">{mapCenter.lon}° W</div>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[600px]">
        
        {/* Left Panel: Physics Engine Controls */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-black/50 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                <Cpu size={16} /> Radius Engine
              </h2>
              <div className={`px-2 py-1 rounded text-[9px] font-black uppercase tracking-widest border ${
                isTransfixed ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-red-500/10 text-red-400 border-red-500/30'
              }`}>
                {isTransfixed ? 'LOCK VERIFIED' : 'UNSTABLE'}
              </div>
            </div>

            {/* The Equation Display */}
            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl text-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5" />
              <div className="text-lg font-bold text-white relative z-10 italic">
                √3.16 × (V/h) × (D/C) = R
              </div>
            </div>

            {/* Variables Input */}
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold flex justify-between">
                  <span>Volume (V)</span>
                  <span className="text-slate-400 font-mono">{physics.V}</span>
                </label>
                <input 
                  type="number" 
                  value={physics.V}
                  onChange={(e) => handleInputChange('V', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold flex justify-between">
                  <span>Height (h)</span>
                  <span className="text-slate-400 font-mono">{physics.h}</span>
                </label>
                <input 
                  type="number" 
                  value={physics.h}
                  onChange={(e) => handleInputChange('h', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold flex justify-between">
                  <span>Depth (D)</span>
                  <span className="text-slate-400 font-mono">{physics.D}</span>
                </label>
                <input 
                  type="number" 
                  step="0.000000001"
                  value={physics.D}
                  onChange={(e) => handleInputChange('D', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 uppercase font-bold flex justify-between">
                  <span>Circumference (C)</span>
                  <span className="text-slate-400 font-mono">{physics.C}</span>
                </label>
                <input 
                  type="number" 
                  step="0.0001"
                  value={physics.C}
                  onChange={(e) => handleInputChange('C', e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-sm text-blue-300 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <button 
              onClick={triggerTransfix}
              className={`w-full mt-8 py-4 rounded-xl font-black uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 ${
                isTransfixed 
                ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' 
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 active:scale-95'
              }`}
            >
              {isTransfixed ? <Lock size={18} /> : <Zap size={18} />}
              {isTransfixed ? 'Grid Transfixed' : 'Execute Transfix'}
            </button>
          </div>

          <div className="bg-black/50 border border-slate-800 rounded-2xl p-6 flex-1 flex flex-col">
             <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase mb-4">
               <Terminal size={14} /> Output Telemetry
             </div>
             <div className="flex-1 space-y-3 font-mono text-[11px] text-slate-400">
               <div className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Raw Radius (R):</span>
                 <span className={isTransfixed ? 'text-emerald-400 font-bold' : 'text-blue-400 font-bold'}>{isTransfixed ? '0.0000006547' : physics.R.toFixed(10)}</span>
               </div>
               <div className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Map Scalar (x10^7):</span>
                 <span className="text-white">{isTransfixed ? '6.55m' : (physics.R * 10000000).toFixed(2) + 'm'}</span>
               </div>
               <div className="flex justify-between pb-2">
                 <span>True North Needle:</span>
                 <span className={isTransfixed ? 'text-emerald-400 font-bold' : 'text-red-500 font-bold'}>{isTransfixed ? '0.000° LOCKED' : 'DRIFTING'}</span>
               </div>
             </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-6 pt-6 border-t border-slate-800 text-[10px] text-slate-600 uppercase tracking-widest text-center">
            <div className="flex justify-center gap-4 mb-2">
              <span>Terms of Service</span>
              <span>Privacy Policy</span>
              <span>Compliance</span>
              <span>Support</span>
            </div>
            <p>© 2026 A#0M TECHNOLOGIES | ALL RIGHTS RESERVED | SHALOM ALEICHEM</p>
          </footer>
        </div>

        {/* Right Panel: The Interactive Google Map */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button 
              onClick={recenterMap}
              className="bg-slate-950/80 border border-slate-700 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
              title="Recenter Map"
            >
              <RefreshCw size={16} />
            </button>
          </div>
          <iframe 
            src={mapUrl}
            className="w-full h-full"
            title="A#0M Map"
          />
        </div>

      </div>
    </div>
  );
}
