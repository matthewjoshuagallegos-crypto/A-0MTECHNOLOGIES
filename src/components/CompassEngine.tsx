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

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useCompass } from '../hooks/useCompass';

export default function CompassEngine() {
  const { heading, isSupported, permissionGranted, requestPermission } = useCompass();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-card/50 backdrop-blur-xl rounded-3xl border border-border/50 shadow-2xl">
      <h3 className="text-xs font-semibold mb-8 text-text-secondary uppercase tracking-[0.2em]">Navigation Relay</h3>
      
      {!permissionGranted && isSupported && (
        <button 
          onClick={requestPermission}
          className="mb-4 px-4 py-2 bg-accent/20 text-accent rounded-full text-xs font-mono uppercase tracking-widest hover:bg-accent/30 transition-colors"
        >
          Calibrate Compass
        </button>
      )}

      <div className="relative w-56 h-56 rounded-full border border-border/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)]">
        {/* Subtle Glow Ring */}
        <div className="absolute inset-0 rounded-full border border-accent/20 animate-pulse" />
        
        {/* Tick Marks */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-0.5 h-2 bg-text-secondary/30"
            style={{ transform: `rotate(${i * 30}deg) translateY(-100px)` }}
          />
        ))}
        
        {/* Compass Needle - Siri-esque sleek design */}
        <motion.div
          animate={{ rotate: heading }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute w-1 h-40 flex flex-col items-center justify-between"
        >
          <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent rounded-t-full" />
          <div className="w-1 h-16 bg-gradient-to-t from-text-secondary/30 to-transparent rounded-b-full" />
        </motion.div>
        
        {/* Center Hub */}
        <div className="absolute w-4 h-4 rounded-full bg-bg border-2 border-accent flex items-center justify-center z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
        </div>
      </div>
      
      <div className="mt-8 flex items-center gap-2 text-text-secondary font-mono text-[10px] uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        {isSupported ? `Heading: ${Math.round(heading)}°` : 'Compass Offline'}
      </div>
    </div>
  );
}
