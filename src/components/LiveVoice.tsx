/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Loader2, Info } from 'lucide-react';
import { GoogleGenAI, Modality, LiveServerMessage } from "@google/genai";

export const LiveVoice: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'connecting' | 'active' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioQueueRef = useRef<Float32Array[]>([]);
  const isPlayingRef = useRef(false);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

  const cleanup = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (sourceRef.current) {
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    setIsActive(false);
    setStatus('idle');
    audioQueueRef.current = [];
    isPlayingRef.current = false;
  };

  const playNextInQueue = async () => {
    if (audioQueueRef.current.length === 0 || isPlayingRef.current || !audioContextRef.current) {
      return;
    }

    isPlayingRef.current = true;
    const chunk = audioQueueRef.current.shift()!;
    
    const audioBuffer = audioContextRef.current.createBuffer(1, chunk.length, 24000);
    audioBuffer.getChannelData(0).set(chunk);
    
    const source = audioContextRef.current.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContextRef.current.destination);
    
    source.onended = () => {
      isPlayingRef.current = false;
      playNextInQueue();
    };
    
    source.start();
  };

  const startSession = async () => {
    try {
      setStatus('connecting');
      setError(null);

      // Initialize Audio Context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      
      // Get Microphone Stream
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      
      sourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
      processorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      
      sourceRef.current.connect(processorRef.current);
      processorRef.current.connect(audioContextRef.current.destination);

      // Connect to Gemini Live
      const sessionPromise = ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are the A#0M Guild Assistant's voice interface. You are helpful, professional, and slightly robotic. Keep your responses concise for voice interaction.",
        },
        callbacks: {
          onopen: () => {
            setStatus('active');
            setIsActive(true);
            
            processorRef.current!.onaudioprocess = (e) => {
              if (isMuted) return;
              
              const inputData = e.inputBuffer.getChannelData(0);
              // Convert Float32 to Int16 PCM
              const pcmData = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                pcmData[i] = Math.max(-1, Math.min(1, inputData[i])) * 0x7FFF;
              }
              
              const base64Data = btoa(String.fromCharCode(...new Uint8Array(pcmData.buffer)));
              
              sessionPromise.then((session) => {
                session.sendRealtimeInput({
                  audio: { data: base64Data, mimeType: 'audio/pcm;rate=24000' }
                });
              });
            };
          },
          onmessage: async (message: LiveServerMessage) => {
            if (message.serverContent?.modelTurn?.parts) {
              for (const part of message.serverContent.modelTurn.parts) {
                if (part.inlineData?.data) {
                  const binaryString = atob(part.inlineData.data);
                  const len = binaryString.length;
                  const bytes = new Uint8Array(len);
                  for (let i = 0; i < len; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                  }
                  
                  // Convert Int16 PCM to Float32
                  const pcmData = new Int16Array(bytes.buffer);
                  const floatData = new Float32Array(pcmData.length);
                  for (let i = 0; i < pcmData.length; i++) {
                    floatData[i] = pcmData[i] / 0x7FFF;
                  }
                  
                  audioQueueRef.current.push(floatData);
                  playNextInQueue();
                }
              }
            }
            
            if (message.serverContent?.interrupted) {
              audioQueueRef.current = [];
              isPlayingRef.current = false;
            }
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            setError("Connection error. Please try again.");
            cleanup();
          },
          onclose: () => {
            cleanup();
          }
        }
      });

      sessionRef.current = await sessionPromise;

    } catch (err) {
      console.error("Failed to start voice session:", err);
      setError("Microphone access denied or connection failed.");
      setStatus('error');
      cleanup();
    }
  };

  const toggleSession = () => {
    if (isActive) {
      cleanup();
    } else {
      startSession();
    }
  };

  return (
    <div className="glass p-6 rounded-3xl border border-white/10 h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]" />
      
      <div className="relative z-10 text-center mb-8">
        <h3 className="text-lg font-display italic tracking-tighter text-neon mb-1 uppercase">Neural Voice Link</h3>
        <div className="flex items-center justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${status === 'active' ? 'bg-neon animate-pulse shadow-[0_0_10px_rgba(0,242,255,0.8)]' : status === 'connecting' ? 'bg-yellow-400 animate-bounce' : status === 'error' ? 'bg-red-500' : 'bg-white/20'}`} />
          <span className="text-[10px] text-text-muted uppercase tracking-widest font-mono">
            {status === 'active' ? 'Link Active' : status === 'connecting' ? 'Establishing...' : status === 'error' ? 'Link Severed' : 'Link Offline'}
          </span>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <button
          onClick={toggleSession}
          disabled={status === 'connecting'}
          className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 border-2 ${
            isActive 
              ? 'bg-neon/20 border-neon shadow-[0_0_30px_rgba(0,242,255,0.4)] scale-110' 
              : 'bg-white/5 border-white/10 hover:border-neon/50 hover:bg-neon/5'
          } disabled:opacity-50`}
        >
          {status === 'connecting' ? (
            <Loader2 className="w-10 h-10 text-neon animate-spin" />
          ) : isActive ? (
            <Mic className="w-10 h-10 text-neon" />
          ) : (
            <MicOff className="w-10 h-10 text-text-muted" />
          )}
        </button>

        {isActive && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-3 rounded-xl border transition-all ${
              isMuted 
                ? 'bg-red-500/20 border-red-500/50 text-red-500' 
                : 'bg-white/5 border-white/10 text-text-muted hover:bg-white/10'
            }`}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        )}
      </div>

      {error && (
        <div className="mt-6 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-500 text-[10px] font-mono flex items-center gap-2 max-w-xs text-center relative z-10">
          <Info size={14} className="flex-shrink-0" />
          {error}
        </div>
      )}

      <div className="mt-auto pt-6 text-center relative z-10">
        <p className="text-[9px] text-text-muted uppercase tracking-widest leading-relaxed max-w-[200px]">
          Direct neural connection to the Guild's central intelligence. Voice data is processed in real-time.
        </p>
      </div>

      {/* Visualizer bars */}
      {isActive && !isMuted && (
        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center gap-1 px-4 opacity-30 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-neon rounded-t-full animate-pulse" 
              style={{ 
                height: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.05}s`,
                animationDuration: `${0.5 + Math.random()}s`
              }} 
            />
          ))}
        </div>
      )}
    </div>
  );
};
