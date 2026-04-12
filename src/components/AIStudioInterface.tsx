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
import { Music, Palette, Mic, Video, Loader2, Search, MapPin, BrainCircuit, Upload, Key, Terminal } from 'lucide-react';
import { generateMusicClip, generateImage, generateSpeech, generateVideo, searchWeb, searchMaps, analyzeVideo, transcribeAudio, highThinkingQuery, editImage } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { playClickSound, playSuccessSound, playErrorSound } from '../lib/audioUtils';

declare global {
  interface Window {
    aistudio: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export const AIStudioInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'music' | 'image' | 'speech' | 'video' | 'search' | 'maps' | 'thinking' | 'analyze-video' | 'transcribe' | 'mixer' | 'logs'>('music');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(true);

  // Video Analysis Options
  const [sceneDetection, setSceneDetection] = useState(false);
  const [objectTracking, setObjectTracking] = useState(false);
  const [sentimentAnalysis, setSentimentAnalysis] = useState(false);

  // Transcription State
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);

  // Mixer State
  const [isMixing, setIsMixing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);

  // Logs State
  const [serverLogs, setServerLogs] = useState<string>('');
  const logsEndRef = useRef<HTMLDivElement>(null);

  const fetchLogs = async () => {
    try {
      const res = await fetch('/api/audit/logs');
      const data = await res.json();
      setServerLogs(data.logs);
    } catch (e) {
      console.error("Failed to fetch logs", e);
    }
  };

  useEffect(() => {
    if (activeTab === 'logs') {
      fetchLogs();
      const interval = setInterval(fetchLogs, 3000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 'logs' && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [serverLogs, activeTab]);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(hasKey);
      }
    };
    checkKey();
  }, []);

  const handleOpenKeySelector = async () => {
    if (window.aistudio?.openSelectKey) {
      await window.aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };
  
  // Image options
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imageSize, setImageSize] = useState('1K');
  const [highQuality, setHighQuality] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Video options
  const [videoAspectRatio, setVideoAspectRatio] = useState('16:9');
  const [videoResolution, setVideoResolution] = useState('1080p');

  // File inputs
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMediaFile(e.target.files[0]);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = error => reject(error);
    });
  };

  const handleGenerate = async () => {
    playClickSound();
    if (['music', 'video'].includes(activeTab) || (activeTab === 'image' && highQuality)) {
      if (!hasApiKey) {
        playErrorSound();
        setResult("### ⚠️ API Key Required\nTo use Lyria (Music), Veo (Video), or Pro Image models, you must select a paid API key.\n\n[Click here to learn about billing](https://ai.google.dev/gemini-api/docs/billing)");
        return;
      }
    }

    setLoading(true);
    setResult(null);
    let res: string | null = null;
    try {
      if (activeTab === 'music') {
        res = await generateMusicClip(prompt);
      } else if (activeTab === 'image') {
        if (mediaFile) {
          const base64 = await fileToBase64(mediaFile);
          res = await editImage(base64, mediaFile.type, prompt);
        } else {
          res = await generateImage(prompt, aspectRatio, imageSize, highQuality);
        }
      } else if (activeTab === 'speech') {
        res = await generateSpeech(prompt);
      } else if (activeTab === 'video') {
        res = await generateVideo(prompt, videoAspectRatio, videoResolution);
      } else if (activeTab === 'search') {
        res = await searchWeb(prompt);
      } else if (activeTab === 'maps') {
        res = await searchMaps(prompt);
      } else if (activeTab === 'thinking') {
        res = await highThinkingQuery(prompt);
      } else if (activeTab === 'analyze-video') {
        if (mediaFile) {
          const base64 = await fileToBase64(mediaFile);
          let analysisPrompt = prompt;
          if (sceneDetection) analysisPrompt += "\n- Include Scene Detection";
          if (objectTracking) analysisPrompt += "\n- Include Object Tracking";
          if (sentimentAnalysis) analysisPrompt += "\n- Include Sentiment Analysis";
          res = await analyzeVideo(base64, mediaFile.type, analysisPrompt);
        } else {
          res = "Please upload a video file first.";
        }
      } else if (activeTab === 'transcribe') {
        if (mediaFile) {
          const base64 = await fileToBase64(mediaFile);
          res = await transcribeAudio(base64, mediaFile.type);
        } else {
          res = "Please upload an audio file first.";
        }
      }
      setResult(res);
      playSuccessSound();
    } catch (error: any) {
      console.error("Generation error:", error);
      playErrorSound();
      const errorMsg = error.message || String(error);
      if (errorMsg.includes("403") || errorMsg.toLowerCase().includes("permission")) {
        setResult("### ⚠️ Permission Denied\nIt looks like your API key doesn't have permission for this model. Please ensure you have selected a paid API key with billing enabled.\n\n[Click here to learn about billing](https://ai.google.dev/gemini-api/docs/billing)");
      } else {
        setResult(`### ❌ Generation Error\nAn error occurred during generation: ${errorMsg}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
    } else {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        
        recognition.onresult = (event: any) => {
          let currentTranscript = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentTranscript += event.results[i][0].transcript;
          }
          setPrompt(prev => {
            const newPrompt = prev + ' ' + currentTranscript;
            // Voice output feedback
            if (event.results[event.results.length - 1].isFinal) {
               const utterance = new SpeechSynthesisUtterance("Got it: " + currentTranscript);
               window.speechSynthesis.speak(utterance);
            }
            return newPrompt;
          });
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error", event.error);
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
        setIsRecording(true);
      } else {
        alert("Speech Recognition API is not supported in this browser.");
      }
    }
  };

  const toggleMixerRecording = async () => {
    if (isMixing) {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsMixing(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const audioUrl = URL.createObjectURL(audioBlob);
          setRecordedAudioUrl(audioUrl);
          setResult("Audio recorded successfully. You can play it back below.");
        };

        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();
        setIsMixing(true);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        alert("Microphone access denied or not available.");
      }
    }
  };

  return (
    <div className="p-8 premium-card relative overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.05),transparent_50%)]" />
      
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div>
          <h2 className="text-3xl font-display font-black italic tracking-tighter rainbow-text">AI STUDIO</h2>
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Universal Records // Sovereign Intelligence</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-mono text-text-muted uppercase tracking-widest">Neural Link Active</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2 mb-8 relative z-10 overflow-x-auto pb-4 custom-scrollbar">
        {[
          { id: 'music', icon: Music, label: 'Lyria Music' },
          { id: 'image', icon: Palette, label: 'Pro Image' },
          { id: 'speech', icon: Mic, label: 'Vocal Synth' },
          { id: 'video', icon: Video, label: 'Veo Video' },
          { id: 'search', icon: Search, label: 'Web Search' },
          { id: 'maps', icon: MapPin, label: 'Spatial Maps' },
          { id: 'thinking', icon: BrainCircuit, label: 'Deep Logic' },
          { id: 'analyze-video', icon: Video, label: 'Vision Audit' },
          { id: 'transcribe', icon: Mic, label: 'Audio Scribe' },
          { id: 'mixer', icon: Mic, label: 'Master Mixer' },
          { id: 'logs', icon: Terminal, label: 'System Logs' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => { playClickSound(); setActiveTab(tab.id as any); setResult(null); setMediaFile(null); }}
            disabled={loading}
            className={`flex items-center px-5 py-2.5 rounded-xl transition-all whitespace-nowrap text-xs font-bold uppercase tracking-widest ${
              activeTab === tab.id 
                ? 'bg-accent/20 text-accent border border-accent/50 shadow-[0_0_20px_rgba(212,175,55,0.2)]' 
                : 'bg-white/5 text-text-muted hover:bg-white/10 border border-white/5'
            } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="relative z-10 flex-shrink-0">
        {activeTab === 'image' && (
          <div className="flex flex-wrap gap-4 mb-4">
            <select value={aspectRatio} onChange={e => setAspectRatio(e.target.value)} disabled={loading} className="bg-black/40 border border-white/10 rounded-lg p-2 text-white text-sm disabled:opacity-50">
              <option value="1:1">1:1</option>
              <option value="2:3">2:3</option>
              <option value="3:2">3:2</option>
              <option value="3:4">3:4</option>
              <option value="4:3">4:3</option>
              <option value="9:16">9:16</option>
              <option value="16:9">16:9</option>
              <option value="21:9">21:9</option>
            </select>
            <select value={imageSize} onChange={e => setImageSize(e.target.value)} disabled={loading} className="bg-black/40 border border-white/10 rounded-lg p-2 text-white text-sm disabled:opacity-50">
              <option value="1K">1K</option>
              <option value="2K">2K</option>
              <option value="4K">4K</option>
            </select>
            <label className={`flex items-center space-x-2 text-sm text-white ${loading ? 'opacity-50' : ''}`}>
              <input type="checkbox" checked={highQuality} onChange={e => setHighQuality(e.target.checked)} disabled={loading} className="rounded border-white/10 bg-black/40 text-accent focus:ring-accent disabled:cursor-not-allowed" />
              <span>Pro Quality</span>
            </label>
            <button onClick={() => fileInputRef.current?.click()} disabled={loading} className="flex items-center px-3 py-1 bg-white/10 rounded-lg text-sm hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed">
              <Upload className="w-4 h-4 mr-2" /> {mediaFile ? 'Image Selected' : 'Upload to Edit'}
            </button>
          </div>
        )}

        {activeTab === 'video' && (
          <div className="flex flex-wrap gap-4 mb-4">
            <select value={videoAspectRatio} onChange={e => setVideoAspectRatio(e.target.value)} disabled={loading} className="bg-black/40 border border-white/10 rounded-lg p-2 text-white text-sm disabled:opacity-50">
              <option value="16:9">16:9 (Landscape)</option>
              <option value="9:16">9:16 (Portrait)</option>
            </select>
            <select value={videoResolution} onChange={e => setVideoResolution(e.target.value)} disabled={loading} className="bg-black/40 border border-white/10 rounded-lg p-2 text-white text-sm disabled:opacity-50">
              <option value="1080p">1080p</option>
              <option value="720p">720p</option>
            </select>
          </div>
        )}

        {(activeTab === 'analyze-video' || activeTab === 'transcribe') && (
          <div className="mb-4">
            <button onClick={() => fileInputRef.current?.click()} disabled={loading} className="flex items-center px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 w-full justify-center border border-white/20 border-dashed disabled:opacity-50 disabled:cursor-not-allowed">
              <Upload className="w-4 h-4 mr-2" /> {mediaFile ? mediaFile.name : `Upload ${activeTab === 'transcribe' ? 'Audio' : 'Video'} File`}
            </button>
            {activeTab === 'analyze-video' && (
              <div className="flex flex-wrap gap-4 mt-4">
                <label className="flex items-center space-x-2 text-sm text-white">
                  <input type="checkbox" checked={sceneDetection} onChange={e => setSceneDetection(e.target.checked)} className="rounded border-white/10 bg-black/40 text-accent focus:ring-accent" />
                  <span>Scene Detection</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-white">
                  <input type="checkbox" checked={objectTracking} onChange={e => setObjectTracking(e.target.checked)} className="rounded border-white/10 bg-black/40 text-accent focus:ring-accent" />
                  <span>Object Tracking</span>
                </label>
                <label className="flex items-center space-x-2 text-sm text-white">
                  <input type="checkbox" checked={sentimentAnalysis} onChange={e => setSentimentAnalysis(e.target.checked)} className="rounded border-white/10 bg-black/40 text-accent focus:ring-accent" />
                  <span>Sentiment Analysis</span>
                </label>
              </div>
            )}
            {activeTab === 'transcribe' && (
              <button 
                onClick={toggleRecording} 
                className={`mt-4 flex items-center px-4 py-2 rounded-lg text-sm w-full justify-center border transition-colors ${isRecording ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-white/10 border-white/20 hover:bg-white/20 text-white'}`}
              >
                <Mic className="w-4 h-4 mr-2" /> {isRecording ? 'Stop Real-Time Transcription' : 'Start Real-Time Transcription'}
              </button>
            )}
          </div>
        )}

        {activeTab === 'mixer' && (
          <div className="mb-4">
            <button 
              onClick={toggleMixerRecording} 
              className={`flex items-center px-4 py-4 rounded-lg text-lg font-bold w-full justify-center border transition-colors ${isMixing ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse' : 'bg-accent/20 border-accent/50 hover:bg-accent/30 text-accent'}`}
            >
              <Mic className="w-6 h-6 mr-2" /> {isMixing ? 'Recording PA...' : 'Start PA Recording'}
            </button>
            {recordedAudioUrl && (
              <div className="mt-4 p-4 bg-black/40 border border-white/10 rounded-xl">
                <h3 className="text-sm font-bold mb-2 text-white">Recorded Track</h3>
                <audio src={recordedAudioUrl} controls className="w-full" />
              </div>
            )}
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="mb-4 flex flex-col h-[300px] bg-black/80 border border-white/20 rounded-xl overflow-hidden relative">
            <div className="flex justify-between items-center p-2 border-b border-white/10 bg-white/5">
              <div className="flex items-center text-emerald-400 text-xs font-mono font-bold">
                <Terminal className="w-4 h-4 mr-2" />
                A#0M MASTER NODE AUDIT LOGS
              </div>
              <button onClick={fetchLogs} className="px-2 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white font-mono uppercase">
                Force Refresh
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 font-mono text-[10px] text-emerald-400/80 whitespace-pre-wrap custom-scrollbar">
              {serverLogs || 'Loading logs...'}
              <div ref={logsEndRef} />
            </div>
          </div>
        )}

        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
          accept={activeTab === 'image' ? 'image/*' : activeTab === 'analyze-video' ? 'video/*' : activeTab === 'transcribe' ? 'audio/*' : '*/*'}
          disabled={loading}
        />

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
          placeholder={activeTab === 'transcribe' ? "ENTER CONTEXT FOR TRANSCRIPTION..." : `ENTER PROMPT FOR ${activeTab.toUpperCase()}...`}
          className={`w-full p-6 bg-black/60 border border-white/10 rounded-2xl mb-6 text-white placeholder-text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed ${activeTab === 'logs' ? 'hidden' : ''}`}
          rows={4}
        />
        <button
          onClick={handleGenerate}
          disabled={loading || ((activeTab === 'analyze-video' || activeTab === 'transcribe') && !mediaFile && !isRecording) || activeTab === 'mixer' || activeTab === 'logs'}
          className={`gold-button w-full !py-4 !text-base ${(activeTab === 'mixer' || activeTab === 'logs') ? 'hidden' : ''}`}
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-3" />
              PROCESSING NEURAL REQUEST...
            </>
          ) : 'EXECUTE GENERATION'}
        </button>

        {!hasApiKey && (
          <button
            onClick={handleOpenKeySelector}
            className="w-full mt-2 bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 py-2 rounded-xl text-xs font-mono flex items-center justify-center hover:bg-yellow-500/30 transition-all"
          >
            <Key className="w-3 h-3 mr-2" /> Select API Key for Restricted Models
          </button>
        )}
      </div>

      <div className="mt-6 relative z-10 flex-1 overflow-y-auto custom-scrollbar">
        {loading && (
          <div className="flex flex-col items-center justify-center h-full text-accent/80 min-h-[200px]">
            <Loader2 className="w-10 h-10 animate-spin mb-4" />
            <p className="font-mono text-sm animate-pulse">Processing AI Request...</p>
          </div>
        )}
        {!loading && result && (
          <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
            {activeTab === 'music' && <audio src={result} controls className="w-full" />}
            {activeTab === 'image' && <img src={result} alt="Generated" className="w-full rounded-lg border border-white/10" referrerPolicy="no-referrer" />}
            {activeTab === 'speech' && <audio src={`data:audio/wav;base64,${result}`} controls className="w-full" />}
            {activeTab === 'video' && <video src={result} controls className="w-full rounded-lg border border-white/10" />}
            {['search', 'maps', 'thinking', 'analyze-video', 'transcribe'].includes(activeTab) && (
              <div className="markdown-body prose prose-invert max-w-none text-sm">
                <ReactMarkdown
                  components={{
                    img: ({node, ...props}) => <img {...props} referrerPolicy="no-referrer" className="rounded-lg border border-white/10" />
                  }}
                >
                  {result}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-1 text-[7px] font-mono text-text-muted uppercase tracking-widest relative z-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <span>ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00</span>
            <span>LICENSE: © APACHE 2036</span>
          </div>
          <span>START: 07/06/2026 4:30A.M.</span>
        </div>
        <div className="flex justify-between items-center opacity-70">
          <span>OWNER: M.J. GALLEGOS // PUB: BEBE REXA // ED: S. LOPEZ</span>
          <span>LEGAL: DOLBY MEDIA COPYRIGHT AMENDMENT OF 1954</span>
        </div>
      </div>
    </div>
  );
};
