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

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Bot, 
  User, 
  Zap, 
  Globe, 
  MapPin, 
  Cpu, 
  ShieldCheck, 
  Terminal,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import Markdown from 'react-markdown';
import { pailIntelligenceQuery } from '../services/geminiService';
import { cn } from '../lib/utils';
import { playClickSound, playSuccessSound, playErrorSound } from '../lib/audioUtils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function PAILChatInterface() {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem('pail_chat_history');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      } catch (e) {
        console.error("Failed to parse chat history", e);
      }
    }
    return [
      {
        id: '1',
        role: 'assistant',
        content: "PAIL Core v2026.4 initialized. Programming Architecture Intelligence Layer active. How can I assist with your deep research or geographic coordination today?",
        timestamp: new Date()
      }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
    localStorage.setItem('pail_chat_history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => console.error("Location access denied:", error)
      );
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    playClickSound();

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await pailIntelligenceQuery(input, location?.lat, location?.lng);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      playSuccessSound();
    } catch (error) {
      console.error("PAIL Error:", error);
      playErrorSound();
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "ERROR: Neural stream interrupted. PAIL Core re-calibrating. Please retry your query.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      layout
      className={cn(
        "fixed bottom-6 right-6 z-50 flex flex-col bg-black/90 border border-blue-500/30 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500",
        isMinimized ? "w-auto h-auto rounded-full" : (isExpanded ? "w-[90vw] h-[80vh] md:w-[600px] md:h-[700px] rounded-2xl" : "w-80 h-[450px] rounded-xl")
      )}
    >
      {isMinimized ? (
        <button 
          onClick={() => { playClickSound(); setIsMinimized(false); }}
          className="p-4 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/50 rounded-full flex items-center gap-3 transition-all group"
        >
          <div className="relative">
            <Cpu className="text-blue-400 group-hover:text-white transition-colors" size={24} />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
          </div>
          <span className="text-xs font-black tracking-tighter text-white uppercase italic hidden md:block">PAIL Core Active</span>
        </button>
      ) : (
        <>
          {/* Header */}
          <div className="p-4 border-b border-blue-500/20 bg-blue-500/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                  <Cpu className="text-blue-400" size={18} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-black animate-pulse" />
              </div>
              <div>
                <h3 className="text-xs font-black tracking-tighter text-white uppercase italic">PAIL Intelligence Core</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] text-blue-400/60 font-mono uppercase tracking-widest">Gemini 3.1 Deep Research</span>
                  {location && <MapPin size={8} className="text-emerald-500" />}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  playClickSound();
                  setMessages([{
                    id: Date.now().toString(),
                    role: 'assistant',
                    content: "PAIL Core memory wiped. Ready for new instructions.",
                    timestamp: new Date()
                  }]);
                }}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-500 hover:text-white"
                title="Clear History"
              >
                <Terminal size={14} />
              </button>
              <button 
                onClick={() => { playClickSound(); setIsMinimized(true); }}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-500 hover:text-white"
                title="Minimize"
              >
                <Minimize2 size={14} className="rotate-180" />
              </button>
              <button 
                onClick={() => { playClickSound(); setIsExpanded(!isExpanded); }}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-500 hover:text-white"
                title={isExpanded ? "Restore" : "Maximize"}
              >
                {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
              </button>
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-zinc-500 hover:text-white"
                title="Close"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
              "flex gap-3",
              msg.role === 'user' ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border",
              msg.role === 'user' 
                ? "bg-zinc-800 border-zinc-700 text-zinc-400" 
                : "bg-blue-600/20 border-blue-500/30 text-blue-400"
            )}>
              {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div className={cn(
              "max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
              msg.role === 'user'
                ? "bg-zinc-800/50 text-zinc-200 rounded-tr-none"
                : "bg-blue-500/5 border border-blue-500/10 text-zinc-300 rounded-tl-none"
            )}>
              <div className="markdown-body prose prose-invert prose-sm max-w-none">
                <Markdown>{msg.content}</Markdown>
              </div>
              <div className="mt-2 text-[8px] font-mono opacity-30 uppercase tracking-widest">
                {msg.timestamp.toLocaleTimeString()} // {msg.role === 'assistant' ? 'PAIL_CORE' : 'ANDROID_SKU_A21S30i19GP13_USER'}
              </div>
            </div>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center text-blue-400">
              <Bot size={14} />
            </div>
            <div className="bg-blue-500/5 border border-blue-500/10 p-4 rounded-2xl rounded-tl-none flex items-center gap-3">
              <div className="flex gap-1">
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              </div>
              <span className="text-[10px] font-mono text-blue-400/60 uppercase tracking-widest">Deep Researching...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-blue-500/20 bg-black/40">
        <div className="relative">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Query PAIL Core..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-zinc-600 font-mono"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg transition-all"
          >
            <Send size={16} />
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between px-1">
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
              <Globe size={10} /> Web Grounding
            </div>
            <div className="flex items-center gap-1 text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
              <MapPin size={10} /> Maps Integration
            </div>
          </div>
          <div className="text-[8px] font-mono text-blue-500/40 uppercase tracking-widest">
            512-Bit Encrypted Stream
          </div>
        </div>
      </div>
        </>
      )}
    </motion.div>
  );
}
