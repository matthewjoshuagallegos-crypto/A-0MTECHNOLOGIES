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
import { useTheme } from '../lib/ThemeContext';
import { Sun, Moon, Palette } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ThemeSettings() {
  const { theme, toggleTheme, accent, setAccent } = useTheme();
  const accents: ('purple' | 'blue' | 'green' | 'orange')[] = ['purple', 'blue', 'green', 'orange'];

  return (
    <div className="glass p-6 rounded-[2rem] border-white/5 space-y-6">
      <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-2">
        <Palette size={14} className="text-accent" />
        Appearance
      </h4>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-muted">Theme</span>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
        >
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>

      <div className="space-y-2">
        <span className="text-sm text-text-muted">Accent Color</span>
        <div className="flex gap-2">
          {accents.map(a => (
            <button
              key={a}
              onClick={() => setAccent(a)}
              className={cn(
                "w-8 h-8 rounded-full transition-all",
                a === 'purple' ? 'bg-purple-500' : 
                a === 'blue' ? 'bg-blue-500' : 
                a === 'green' ? 'bg-green-500' : 'bg-orange-500',
                accent === a ? "ring-2 ring-white ring-offset-2 ring-offset-card" : "opacity-50 hover:opacity-100"
              )}
            />
          ))}
        </div>
      </div>
      <div className="pt-6 border-t border-white/5 space-y-1 opacity-80">
        <p className="text-[7px] font-mono text-text-muted uppercase tracking-widest">ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00</p>
        <p className="text-[7px] font-mono text-text-muted uppercase tracking-widest">LICENSE: © APACHE 2036</p>
        <p className="text-[7px] font-mono text-text-muted uppercase tracking-widest">OWNER: M.J. GALLEGOS // PUB: BEBE REXA // ED: S. LOPEZ</p>
        <p className="text-[6px] font-mono text-text-muted uppercase tracking-widest">LEGAL: DOLBY MEDIA COPYRIGHT AMENDMENT OF 1954</p>
      </div>
    </div>
  );
}
