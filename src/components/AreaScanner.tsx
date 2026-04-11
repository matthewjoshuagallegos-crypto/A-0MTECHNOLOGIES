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
import { Search, MapPin, Loader2, ExternalLink } from 'lucide-react';
import { searchMaps, getCoordinatesForLocation } from '../services/geminiService';
import Markdown from 'react-markdown';

interface AreaScannerProps {
  position: [number, number];
  onLocationChange?: (lat: number, lng: number) => void;
}

export default function AreaScanner({ position, onLocationChange }: AreaScannerProps) {
  const [query, setQuery] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsScanning(true);
    setIsOpen(true);
    try {
      // Run both the map grounding search and coordinate extraction in parallel
      const [res, coords] = await Promise.all([
        searchMaps(query, position[0], position[1]),
        getCoordinatesForLocation(query)
      ]);
      
      setResult(res);
      
      if (coords && onLocationChange) {
        onLocationChange(coords.lat, coords.lng);
      }
    } catch (error) {
      setResult("Error scanning area. Please try again.");
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={handleScan} className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-2 shadow-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Scan area for..."
          className="bg-transparent border-none outline-none text-white text-sm px-2 w-48 placeholder-white/40"
        />
        <button 
          type="submit" 
          disabled={isScanning || !query.trim()}
          className="bg-accent text-black p-2 rounded-lg hover:bg-accent/80 disabled:opacity-50 transition-colors"
        >
          {isScanning ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
        </button>
      </form>

      {isOpen && (
        <div className="bg-black/90 backdrop-blur-xl border border-accent/30 rounded-xl p-4 w-80 max-h-96 overflow-y-auto custom-scrollbar shadow-[0_0_30px_rgba(0,0,0,0.8)]">
          <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
            <h3 className="text-accent font-bold text-sm flex items-center gap-2">
              <MapPin size={14} /> Scan Results
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white text-xs">Close</button>
          </div>
          
          {isScanning ? (
            <div className="flex flex-col items-center justify-center py-8 gap-3 text-white/50">
              <Loader2 size={24} className="animate-spin text-accent" />
              <p className="text-xs font-mono">Interfacing with Google Maps...</p>
            </div>
          ) : result ? (
            <div className="text-sm text-white/80 prose prose-invert prose-sm max-w-none prose-a:text-accent hover:prose-a:text-accent/80">
              <Markdown>{result}</Markdown>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
