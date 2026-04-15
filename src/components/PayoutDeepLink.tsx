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
import { Smartphone, DollarSign, ExternalLink } from 'lucide-react';

export const PayoutDeepLink: React.FC = () => {
  const [tag, setTag] = useState('');
  const [amount, setAmount] = useState('');
  const [platform, setPlatform] = useState<'CashApp' | 'Chime'>('CashApp');

  const generateLink = () => {
    if (!tag || !amount) return '';
    const cleanTag = tag.replace('$', '').replace('@', '');
    if (platform === 'CashApp') {
      return `https://cash.app/$${cleanTag}/${amount}`;
    } else {
      // USD-asserted Chime deep link format
      return `chime://pay/${cleanTag}/${amount}`;
    }
  };

  const handleProceed = () => {
    const link = generateLink();
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="glass p-6 rounded-2xl space-y-4">
      <h2 className="text-xl font-display italic flex items-center gap-2">
        <Smartphone size={20} className="text-accent" />
        Payout Deep Link Generator
      </h2>
      
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-text-muted">Platform</label>
        <select 
          value={platform} 
          onChange={(e) => setPlatform(e.target.value as 'CashApp' | 'Chime')}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
        >
          <option value="CashApp">Cash App</option>
          <option value="Chime">Chime</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-text-muted">
          {platform === 'CashApp' ? 'Cashtag' : 'Chime Tag'}
        </label>
        <input 
          type="text" 
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder={platform === 'CashApp' ? '$Cashtag' : 'Chime Tag'}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-text-muted">Amount</label>
        <div className="relative">
          <DollarSign size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input 
            type="number" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <button 
        onClick={handleProceed}
        disabled={!tag || !amount}
        className="w-full bg-accent text-black py-3 rounded-xl font-bold hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        <ExternalLink size={18} />
        Proceed to Payout
      </button>
    </div>
  );
};
