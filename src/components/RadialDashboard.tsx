/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React from 'react';
import { motion } from 'motion/react';

export default function RadialDashboard() {
  const items = ['Dashboard', 'Marketplace', 'Portfolio', 'Earnings', 'Storage', 'Messages'];
  
  return (
    <div className="relative w-96 h-96 mx-auto mt-10">
      <div className="absolute inset-0 rounded-full border-2 border-accent/20 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
          A#0M
        </div>
      </div>
      {items.map((item, i) => {
        const angle = (i / items.length) * 2 * Math.PI;
        const x = Math.cos(angle) * 140;
        const y = Math.sin(angle) * 140;
        return (
          <motion.div
            key={item}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              position: 'absolute',
              left: `calc(50% + ${x}px - 40px)`,
              top: `calc(50% + ${y}px - 20px)`,
            }}
            className="w-20 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-xs border border-gray-700 hover:border-accent cursor-pointer"
          >
            {item}
          </motion.div>
        );
      })}
    </div>
  );
}
