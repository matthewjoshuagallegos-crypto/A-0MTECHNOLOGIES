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

import React, { useState } from 'react';
import { ExternalLink, DollarSign } from 'lucide-react';

export default function ChimeTagHandler() {
  const [tag, setTag] = useState('');

  const cleanTag = tag.replace(/^[@$]/, '');
  const url = `https://chime.com/${cleanTag}`;

  return (
    <div className="bg-black border border-cyan-900/40 rounded-xl p-5 shadow-inner">
      <h2 className="text-xs font-bold text-cyan-600 mb-4 uppercase tracking-widest flex items-center gap-2">
        <DollarSign size={14} /> Chime Tag Intercept
      </h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Enter Chime tag..."
          className="flex-1 bg-cyan-950/20 border border-cyan-900/50 rounded-lg px-3 py-2 text-sm text-white placeholder:text-cyan-800 focus:outline-none focus:border-cyan-500"
        />
        <a
          href={tag ? url : '#'}
          target={tag ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`bg-cyan-600 hover:bg-cyan-500 text-black p-2 rounded-lg transition-all flex items-center justify-center ${!tag ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
