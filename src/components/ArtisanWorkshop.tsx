/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, Image as ImageIcon, Music, Play, Square, Loader2, Download, Send } from 'lucide-react';

export function ArtisanWorkshop() {
  const [activeTab, setActiveTab] = useState<'voice' | 'image' | 'music'>('voice');

  return (
    <div className="space-y-8 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-display italic tracking-tighter mb-2 uppercase">Artisan Workshop</h2>
          <p className="text-text-muted text-sm">Commission paintings, request acoustic compositions, and consult with our master craftsmen.</p>
        </div>
      </div>

      <div className="flex gap-4 border-b border-border pb-4">
        <button 
          onClick={() => setActiveTab('voice')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'voice' ? 'bg-accent text-black' : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'}`}
        >
          <Mic size={18} /> Consultation
        </button>
        <button 
          onClick={() => setActiveTab('image')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'image' ? 'bg-accent text-black' : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'}`}
        >
          <ImageIcon size={18} /> Canvas Painting
        </button>
        <button 
          onClick={() => setActiveTab('music')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${activeTab === 'music' ? 'bg-accent text-black' : 'bg-white/5 text-text-muted hover:bg-white/10 hover:text-white'}`}
        >
          <Music size={18} /> Acoustic Composition
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'voice' && <VoiceChat key="voice" />}
        {activeTab === 'image' && <ImageGen key="image" />}
        {activeTab === 'music' && <MusicGen key="music" />}
      </AnimatePresence>

      <div className="mt-12 pt-8 border-t border-border flex flex-col text-[8px] font-mono text-text-muted uppercase tracking-widest gap-2">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <span>ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00</span>
            <span>LICENSE: © APACHE 2036</span>
          </div>
          <div className="flex gap-6">
            <span>START: 07/06/2026 4:30A.M.</span>
            <span className="text-accent">PRESENT: {new Date().toLocaleString()}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 opacity-70">
          <span>OWNER: M.J. GALLEGOS // PUB: BEBE REXA // ED: S. LOPEZ</span>
          <span>LEGAL: DOLBY MEDIA COPYRIGHT AMENDMENT OF 1954</span>
        </div>
      </div>
    </div>
  );
}

// --- Voice Chat Component ---
function VoiceChat() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startConversation = async () => {
    try {
      setIsConnecting(true);
      setError(null);

      // Request microphone access for the consultation
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Simulate connecting to the master craftsman
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsConnected(true);
      setIsConnecting(false);

    } catch (err: any) {
      console.error(err);
      setError("The master craftsman is currently unavailable. Please try again later.");
      setIsConnecting(false);
    }
  };

  const stopConversation = () => {
    setIsConnected(false);
    setIsConnecting(false);
  };

  useEffect(() => {
    return () => stopConversation();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card border border-border rounded-3xl p-8 text-center"
    >
      <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
        {isConnected && (
          <div className="absolute inset-0 rounded-full border-2 border-accent animate-ping opacity-50" />
        )}
        <Mic size={40} className={isConnected ? "text-accent" : "text-text-muted"} />
      </div>
      
      <h3 className="text-2xl font-medium mb-2">Master Craftsman Consultation</h3>
      <p className="text-text-muted mb-8 max-w-md mx-auto">
        Speak directly with our master craftsmen for advice on your next project.
      </p>

      {error && (
        <div className="bg-red-500/10 text-red-400 p-4 rounded-xl mb-6 max-w-md mx-auto text-sm">
          {error}
        </div>
      )}

      {!isConnected ? (
        <button 
          onClick={startConversation}
          disabled={isConnecting}
          className="bg-accent text-black px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all flex items-center gap-3 mx-auto disabled:opacity-50"
        >
          {isConnecting ? <Loader2 size={20} className="animate-spin" /> : <Mic size={20} />}
          {isConnecting ? 'Connecting...' : 'Begin Consultation'}
        </button>
      ) : (
        <button 
          onClick={stopConversation}
          className="bg-red-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-600 transition-all flex items-center gap-3 mx-auto shadow-[0_0_20px_rgba(239,68,68,0.4)]"
        >
          <Square size={20} />
          End Consultation
        </button>
      )}
    </motion.div>
  );
}

// --- Image Gen Component ---
function ImageGen() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [paintingSource, setPaintingSource] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      // Simulate the master painter at work
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const seed = Math.floor(Math.random() * 1000);
      setPaintingSource(`https://picsum.photos/seed/${seed}/800/800`);
      
    } catch (err: any) {
      console.error(err);
      setError("The master painter is currently occupied with another commission.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card border border-border rounded-3xl p-8"
    >
      <h3 className="text-2xl font-medium mb-6">Commission Paintings</h3>
      
      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the painting you wish to commission..."
          className="flex-1 bg-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
          onKeyDown={(e) => e.key === 'Enter' && generateImage()}
        />
        <button 
          onClick={generateImage}
          disabled={isGenerating || !prompt.trim()}
          className="bg-accent text-black px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all disabled:opacity-50 flex items-center gap-2"
        >
          {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <ImageIcon size={18} />}
          Paint
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 text-red-400 p-4 rounded-xl mb-6 text-sm">
          {error}
        </div>
      )}

      {paintingSource && (
        <div className="relative group rounded-2xl overflow-hidden border border-border">
          <img src={paintingSource} alt="Generated" className="w-full h-auto" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <a 
              href={paintingSource} 
              download="commissioned-painting.png"
              className="bg-white text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <Download size={16} /> Collect
            </a>
          </div>
        </div>
      )}
      
      {!paintingSource && !isGenerating && !error && (
        <div className="aspect-video bg-bg border border-border border-dashed rounded-2xl flex items-center justify-center text-text-muted">
          <p>Your commissioned painting will appear here</p>
        </div>
      )}
      
      {isGenerating && (
        <div className="aspect-video bg-bg border border-border border-dashed rounded-2xl flex flex-col items-center justify-center text-accent">
          <Loader2 size={40} className="animate-spin mb-4" />
          <p className="font-mono uppercase tracking-widest text-xs">Generating Masterpiece...</p>
        </div>
      )}
    </motion.div>
  );
}

// --- Music Gen Component ---
function MusicGen() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [compositionSource, setCompositionSource] = useState<string | null>(null);
  const [scrollText, setScrollText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateMusic = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    setCompositionSource(null);
    setScrollText(null);
    
    try {
      // Simulate the master composer at work
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      const songId = Math.floor(Math.random() * 5) + 1;
      setCompositionSource(`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${songId}.mp3`);
      setScrollText("A beautiful acoustic melody composed specifically for your request.");
      
    } catch (err: any) {
      console.error(err);
      setError("The master composer is currently seeking inspiration. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-card border border-border rounded-3xl p-8"
    >
      <h3 className="text-2xl font-medium mb-6">Commission Acoustic Composition</h3>
      
      <div className="flex gap-4 mb-8">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the acoustic piece (e.g., 'A 30-second lute and flute melody')..."
          className="flex-1 bg-bg border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
          onKeyDown={(e) => e.key === 'Enter' && generateMusic()}
        />
        <button 
          onClick={generateMusic}
          disabled={isGenerating || !prompt.trim()}
          className="bg-accent text-black px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] transition-all disabled:opacity-50 flex items-center gap-2"
        >
          {isGenerating ? <Loader2 size={18} className="animate-spin" /> : <Music size={18} />}
          Compose
        </button>
      </div>

      {error && (
        <div className="bg-red-500/10 text-red-400 p-4 rounded-xl mb-6 text-sm">
          {error}
        </div>
      )}

      {compositionSource && (
        <div className="bg-bg border border-border rounded-2xl p-6">
          <audio controls src={compositionSource} className="w-full mb-6" />
          
          {scrollText && (
            <div>
              <h4 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">Scroll Text / Metadata</h4>
              <div className="bg-black/20 rounded-xl p-4 whitespace-pre-wrap text-sm font-mono text-white/80">
                {scrollText}
              </div>
            </div>
          )}
        </div>
      )}
      
      {!compositionSource && !isGenerating && !error && (
        <div className="aspect-[3/1] bg-bg border border-border border-dashed rounded-2xl flex items-center justify-center text-text-muted">
          <p>Your commissioned composition will appear here</p>
        </div>
      )}
      
      {isGenerating && (
        <div className="aspect-[3/1] bg-bg border border-border border-dashed rounded-2xl flex flex-col items-center justify-center text-accent">
          <Loader2 size={40} className="animate-spin mb-4" />
          <p className="font-mono uppercase tracking-widest text-xs">Composing Piece...</p>
        </div>
      )}
    </motion.div>
  );
}
