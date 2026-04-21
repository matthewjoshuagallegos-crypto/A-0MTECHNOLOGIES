import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function NeonDrifter({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let isRunning = true;
    
    // Game Entities
    const player = { x: canvas.width / 2 - 20, y: canvas.height - 100, width: 40, height: 40, speed: 12 };
    const obstacles: any[] = [];
    let frameCount = 0;
    let currentScore = 0;

    // Controllers
    const keys: Record<string, boolean> = {};
    const handleKeyDown = (e: KeyboardEvent) => keys[e.key] = true;
    const handleKeyUp = (e: KeyboardEvent) => keys[e.key] = false;
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const update = () => {
      if (!isRunning) return;
      
      // Movement
      if (keys['ArrowLeft'] && player.x > 0) player.x -= player.speed;
      if (keys['ArrowRight'] && player.x < canvas.width - player.width) player.x += player.speed;

      // Spawning obstacles
      frameCount++;
      const spawnRate = Math.max(10, 40 - Math.floor(currentScore / 500)); // Gets faster
      if (frameCount % spawnRate === 0) {
        obstacles.push({
          x: Math.random() * (canvas.width - 60),
          y: -60,
          width: 40 + Math.random() * 60,
          height: 40,
          speed: 6 + Math.random() * 6 + (currentScore / 1000)
        });
      }

      // Physics & Collision
      for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.y += obs.speed;
        
        // AABB Collision bounds
        if (player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y) {
           isRunning = false;
           setGameOver(true);
        }

        if (obs.y > canvas.height) {
          obstacles.splice(i, 1);
          currentScore += 100;
          setScore(currentScore);
        }
      }
    };

    const draw = () => {
       ctx.fillStyle = '#050505';
       ctx.fillRect(0, 0, canvas.width, canvas.height);

       // Draw Retro Horizon / Grid
       ctx.strokeStyle = '#D4AF3733';
       ctx.lineWidth = 3;
       ctx.beginPath();
       // Vertical lines shifting
       const shift = (frameCount * 5) % 80;
       for(let x = -shift; x < canvas.width + 80; x += 80) {
          ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height);
       }
       // Horizontal speed lines
       const yShift = (frameCount * 10) % 80;
       for(let y = yShift; y < canvas.height; y += 80) {
          ctx.moveTo(0, y); ctx.lineTo(canvas.width, y);
       }
       ctx.stroke();

       // Draw Player (Ship)
       ctx.fillStyle = '#FFFFFF';
       ctx.shadowBlur = 25;
       ctx.shadowColor = '#D4AF37';
       ctx.beginPath();
       ctx.moveTo(player.x + player.width/2, player.y - 10);
       ctx.lineTo(player.x + player.width + 10, player.y + player.height);
       ctx.lineTo(player.x - 10, player.y + player.height);
       ctx.closePath();
       ctx.fill();
       ctx.shadowBlur = 0; // reset

       // Draw Obstacles (Red Data Blocks)
       ctx.fillStyle = '#FF3366';
       ctx.shadowBlur = 15;
       ctx.shadowColor = '#FF3366';
       obstacles.forEach(obs => {
         ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
       });
       ctx.shadowBlur = 0;
    };

    const loop = () => {
      update();
      draw();
      if (isRunning) {
        animFrameId = requestAnimationFrame(loop);
      }
    };
    loop();

    return () => {
      isRunning = false;
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameOver]); // Restart effect on game over reset

  const handleRetry = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center font-sans">
       <div className="absolute top-12 left-12 text-white font-black text-5xl font-mono tracking-widest drop-shadow-[0_0_15px_#D4AF37]">
         SCORE: {score}
       </div>
       <button 
         onClick={onClose} 
         className="absolute top-12 right-12 text-white bg-white/10 p-5 rounded-full hover:bg-white/20 transition-all z-20 outline-none focus:ring-4 ring-white"
         autoFocus={!gameOver}
       >
         <CloseIcon className="w-10 h-10" />
       </button>

       {gameOver && (
         <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10 backdrop-blur-md">
            <EmojiEventsIcon className="w-40 h-40 text-accent mb-10 drop-shadow-[0_0_30px_#D4AF37]" />
            <h1 className="text-8xl font-black text-white uppercase mb-4 tracking-tighter">System Crashed</h1>
            <p className="text-4xl text-gray-400 font-mono mb-16">FINAL SCORE: <span className="text-white">{score}</span></p>
            
            <div className="flex gap-8">
              <button 
                onClick={handleRetry} 
                className="bg-white text-black px-16 py-8 rounded-full font-black text-3xl uppercase tracking-widest hover:scale-110 transition-all outline-none focus:ring-8 ring-accent/50 flex items-center gap-4"
                autoFocus
              >
                <PlayArrowIcon className="w-8 h-8 fill-black" /> Reboot Protocol
              </button>
            </div>
         </div>
       )}

       <canvas
         ref={canvasRef}
         width={1920}
         height={1080}
         className="w-full h-full object-cover opacity-90"
       />
    </div>
  );
}
