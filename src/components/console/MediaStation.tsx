import { useState, useRef, useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';

const playlist = [
  { id: 1, title: 'SOVEREIGN SYNTH', artist: 'A#0M AUDIO LABS', duration: '6:12', cover: 'https://images.unsplash.com/photo-1614613535308-eb5fb8a54f67?auto=format&fit=crop&q=80&w=800&h=800', type: 'FLAC / High-Res', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id: 2, title: 'NEON DRIFTER OST', artist: 'STREET PROTOCOL', duration: '7:05', cover: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=800', type: 'FLAC / High-Res', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id: 3, title: 'KERNEL PANIC (REMIX)', artist: 'DATA CORRUPTION', duration: '5:44', cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=800', type: 'Lossless Audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id: 4, title: 'STEALTH MODE', artist: 'LUNA & THE VOID', duration: '5:02', cover: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800&h=800', type: 'Spatial Audio', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
  { id: 5, title: 'LTEUSA BROADCAST', artist: 'NETWORK AUTHORITY', duration: '6:08', cover: 'https://images.unsplash.com/photo-1541680670548-c917b2eddc56?auto=format&fit=crop&q=80&w=800&h=800', type: 'Radio Stream', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3' },
];

export default function MediaStation() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeDisp, setCurrentTimeDisp] = useState("0:00");
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const track = playlist[currentTrackIndex];

  const nextTrack = () => setCurrentTrackIndex((i) => (i + 1) % playlist.length);
  const prevTrack = () => setCurrentTrackIndex((i) => (i - 1 + playlist.length) % playlist.length);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    const audio = audioRef.current;
    
    // Auto-detect ending and play next
    const handleEnded = () => nextTrack();
    
    // Update scrubber UI
    const handleTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
        setCurrentTimeDisp(`${mins}:${secs}`);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  // Sync Audio Source Change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track.url;
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback blocked:", e));
      }
    }
  }, [currentTrackIndex, track.url]);

  // Sync Play/Pause Button
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback blocked:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="h-full flex px-16 pb-16 gap-16">
       
       {/* Left: Now Playing */}
       <div className="w-1/2 flex flex-col justify-center">
          <div className="relative group rounded-[3rem] overflow-hidden tv-focus" tabIndex={0}>
             {/* Dynamic Blur Backdrop */}
             <div className="absolute inset-[-20px] bg-cover bg-center blur-2xl opacity-40 transition-all duration-1000 scale-110" style={{ backgroundImage: `url(${track.cover})` }} />
             
             {/* Actual Cover */}
             <img src={track.cover} className="w-full aspect-square object-cover relative z-10 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" alt="Album Cover" />
             
             {/* Playing overlay */}
             {isPlaying && (
               <div className="absolute top-8 right-8 z-20 flex items-center justify-center w-16 h-16 bg-black/50 backdrop-blur-md rounded-full shadow-lg border border-white/10">
                 <AlbumIcon className="w-8 h-8 text-white animate-[spin_3s_linear_infinite]" />
               </div>
             )}
          </div>

          <div className="mt-12 pl-4">
             <div className="flex items-center gap-4 mb-4">
                <span className="bg-accent/20 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">{track.type}</span>
             </div>
             <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-2 drop-shadow-md">{track.title}</h1>
             <p className="text-3xl text-gray-400 font-bold uppercase tracking-widest">{track.artist}</p>
             
             {/* Scrubber */}
             <div className="mt-10 mb-4 flex items-center gap-6">
                <span className="text-xl font-mono text-gray-400">{currentTimeDisp}</span>
                <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden relative">
                   <div className="absolute top-0 left-0 bottom-0 bg-accent shadow-[0_0_20px_#D4AF37] transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
                <span className="text-xl font-mono text-gray-400">{track.duration}</span>
             </div>
             
             {/* Controls */}
             <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-8">
                  <button onClick={prevTrack} className="tv-focus p-4 rounded-full bg-white/5 hover:bg-white/20 text-white" tabIndex={0}>
                     <SkipPreviousIcon className="w-10 h-10 fill-current" />
                  </button>
                  <button onClick={() => setIsPlaying(!isPlaying)} className="tv-focus p-8 rounded-full bg-white text-black hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all" tabIndex={0}>
                     {isPlaying ? <PauseIcon className="w-12 h-12 fill-current" /> : <PlayArrowIcon className="w-12 h-12 fill-current ml-2" />}
                  </button>
                  <button onClick={nextTrack} className="tv-focus p-4 rounded-full bg-white/5 hover:bg-white/20 text-white" tabIndex={0}>
                     <SkipNextIcon className="w-10 h-10 fill-current" />
                  </button>
                </div>
                
                <div className="flex items-center gap-4 text-gray-400">
                   <VolumeUpIcon className="w-8 h-8" />
                   <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-white" />
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Right: Playlist Queue */}
       <div className="w-1/2 bg-zinc-900/40 rounded-[3rem] border border-white/5 p-12 overflow-hidden flex flex-col backdrop-blur-2xl">
          <div className="flex items-center gap-6 mb-12">
            <div className="p-4 bg-accent/20 rounded-2xl">
               <MusicNoteIcon className="w-10 h-10 text-accent" />
            </div>
            <div>
              <h2 className="text-4xl font-black uppercase tracking-widest">Authority Playlist</h2>
              <p className="text-xl text-gray-400 mt-2 font-mono">1.2 TB / Lossless Cloud Sync</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 space-y-4">
             {playlist.map((item, i) => (
                <div 
                  key={item.id} 
                  onClick={() => {
                    setCurrentTrackIndex(i);
                    setIsPlaying(true);
                  }}
                  className={`tv-focus flex items-center p-6 rounded-3xl transition-colors cursor-pointer border-2 ${
                    currentTrackIndex === i ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-black/40 border-transparent hover:bg-white/5'
                  }`}
                  tabIndex={0}
                >
                   <div className="w-20 h-20 rounded-xl overflow-hidden relative shadow-lg shrink-0">
                      <img src={item.cover} className="w-full h-full object-cover" />
                      {currentTrackIndex === i && isPlaying && (
                         <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <div className="flex items-end gap-1 h-8">
                               <div className="w-1.5 bg-accent h-full animate-[bounce_1s_infinite_0ms]" />
                               <div className="w-1.5 bg-accent h-2/3 animate-[bounce_1s_infinite_200ms]" />
                               <div className="w-1.5 bg-accent h-4/5 animate-[bounce_1s_infinite_400ms]" />
                            </div>
                         </div>
                      )}
                   </div>
                   <div className="ml-8 flex-1">
                      <h3 className={`text-2xl font-black uppercase tracking-widest ${currentTrackIndex === i ? 'text-white' : 'text-gray-300'}`}>{item.title}</h3>
                      <p className="text-lg text-gray-500 uppercase mt-1">{item.artist}</p>
                   </div>
                   <div className="text-xl font-mono text-gray-400 font-bold ml-6">
                      {item.duration}
                   </div>
                </div>
             ))}
          </div>
       </div>

    </div>
  )
}
