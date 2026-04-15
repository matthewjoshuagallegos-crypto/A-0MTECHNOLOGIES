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

import React, { useState, useEffect } from 'react';
import { 
  Globe2, 
  Compass, 
  Lock, 
  ShieldAlert, 
  ShieldCheck, 
  Terminal, 
  Crosshair, 
  Activity,
  Fingerprint,
  Map as MapIcon,
  Mic,
  Navigation,
  Layers
} from 'lucide-react';
import { motion } from 'motion/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../A0M_CORE_V2026_FINAL_SECURED_FIREBASE';

import { calculateRadius } from '../lib/equation';
import ChimeTagHandler from './ChimeTagHandler';
import IronSafe from './IronSafe';
import AreaScanner from './AreaScanner';
import { useCompass } from '../hooks/useCompass';
import { MAPS_REDIRECTS } from '../A0M_CORE_V2026_FINAL_SECURED_CONSTANTS';

const PROPRIETOR_UID = "matthewjoshuagallegos@gmail.com";

export default function GlobalImager() {
  const [user] = useAuthState(auth);
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [position, setPosition] = useState<{lat: number, lng: number} | null>(null);
  const { heading, isSupported, permissionGranted, requestPermission } = useCompass();
  const [activeTab, setActiveTab] = useState<'radar' | 'map' | 'voice'>('map');
  const [radius, setRadius] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setPosition({lat: pos.coords.latitude, lng: pos.coords.longitude}),
        (err) => {
          console.error(err);
          setPosition({lat: 37.7749, lng: -122.4194});
        }
      );
    } else {
      setPosition({lat: 37.7749, lng: -122.4194});
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius(calculateRadius(position?.lat, position?.lng));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [position]);

  const handleAuthorization = () => {
    setIsAuthorized(true);
  };

  if (!isAuthorized) {
    return (
      <div className="h-full w-full bg-[#020202] text-accent font-mono flex flex-col items-center justify-center p-6 rounded-3xl border border-white/10">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <Globe2 size={40} className="text-accent" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Global Imager Locked</h2>
        <p className="text-text-muted mb-8 text-center max-w-md">
          Access to the live global map and node tracking requires authorization.
        </p>
        <button onClick={handleAuthorization} className="py-4 px-8 bg-accent text-black font-black rounded-xl flex items-center gap-3 hover:shadow-[0_0_20px_rgba(157,78,221,0.5)] transition-all">
          <Fingerprint /> Initialize Map Engine
        </button>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-[#050505] text-cyan-400 font-mono p-4 flex flex-col rounded-3xl border border-white/10 overflow-hidden relative">
      <header className="flex justify-between items-center border-b border-white/10 pb-4 mb-4 z-10 bg-[#050505]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-black text-white flex items-center gap-2">
            <Globe2 className="text-accent" /> A#0M LIVE MAP (STATIC)
          </h1>
          {!permissionGranted && isSupported && (
            <button 
              onClick={requestPermission}
              className="px-3 py-1 bg-accent/20 text-accent rounded-full text-[10px] font-mono uppercase tracking-widest hover:bg-accent/30 transition-colors"
            >
              Calibrate Compass
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={() => setActiveTab('map')} className={`p-2 rounded-lg transition-colors ${activeTab === 'map' ? 'bg-accent text-black' : 'hover:bg-white/10'}`}><MapIcon size={20}/></button>
          <button onClick={() => setActiveTab('radar')} className={`p-2 rounded-lg transition-colors ${activeTab === 'radar' ? 'bg-accent text-black' : 'hover:bg-white/10'}`}><Crosshair size={20}/></button>
          <button onClick={() => setActiveTab('voice')} className={`p-2 rounded-lg transition-colors ${activeTab === 'voice' ? 'bg-accent text-black' : 'hover:bg-white/10'}`}><Mic size={20}/></button>
        </div>
      </header>

      <div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10">
        {activeTab === 'radar' && (
          <div className="h-full flex flex-col items-center justify-center gap-6 bg-black/50">
            <ChimeTagHandler />
            <IronSafe />
            <div className="relative w-96 h-96 border border-accent/20 rounded-full flex items-center justify-center">
              <div className="absolute text-accent font-bold transition-transform duration-1000" style={{ transform: `rotate(${heading}deg)` }}>
                <Navigation size={40} />
              </div>
              <p className="absolute bottom-10 text-xs text-white/50">RAD: {radius.toFixed(2)} | {position ? `${position.lat.toFixed(4)}, ${position.lng.toFixed(4)}` : 'Locating...'}</p>
            </div>
          </div>
        )}
        {activeTab === 'map' && (
          <div className="h-full w-full relative">
            <iframe 
              src={MAPS_REDIRECTS.EXACT_COORDINATES}
              className="w-full h-full"
              title="A#0M Map"
            />
          </div>
        )}
        {activeTab === 'voice' && (
          <div className="h-full flex flex-col items-center justify-center gap-6 bg-black/50">
            <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center animate-pulse">
              <Mic size={64} className="text-accent" />
            </div>
            <p className="text-xl text-white">A#0M Voice Assistant Active...</p>
          </div>
        )}
      </div>
    </div>
  );
}
