import { useState, useEffect } from 'react';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import CloseIcon from '@mui/icons-material/Close';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { motion, AnimatePresence } from 'framer-motion';

export default function VirtualKeyboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShift, setIsShift] = useState(false);

  // Global listener for the gamepad or a floating button toggle
  // The keyboard itself is a fixed overlay

  const rows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', '.', '/']
  ];

  const shiftRows = [
    ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '?']
  ];

  const currentRows = isShift ? shiftRows : rows;

  const typeKey = (key: string) => {
    const el = document.activeElement as HTMLElement | HTMLInputElement | HTMLTextAreaElement;
    if (!el) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        const input = el as HTMLInputElement | HTMLTextAreaElement;
        const start = input.selectionStart || 0;
        const end = input.selectionEnd || 0;
        const text = input.value;
        const before = text.substring(0, start);
        const after  = text.substring(end, text.length);
        
        input.value = (before + key + after);
        input.selectionStart = input.selectionEnd = start + key.length;
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
        // Fallback or for contenteditable (xterm uses a hidden textarea usually focused)
        // If xterm's hidden textarea is focused, the above block handles it!
        
        // If it's a div, maybe it's xterm? Xterm listens to KeyboardEvents or InputEvents on its helper textarea.
        if (el.classList.contains('xterm-helper-textarea')) {
            const input = el as HTMLTextAreaElement;
            input.value += key;
            input.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
            console.log('Active element is not an input', el);
        }
    }
  };

  const handleAction = (action: string) => {
    const el = document.activeElement as HTMLInputElement;
    if (!el || !(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) {
        if (el && el.classList.contains('xterm-helper-textarea')) {
             if (action === 'BACKSPACE') {
                 // Trigger keydown for backspace specifically for xterm
                 const event = new KeyboardEvent('keydown', { key: 'Backspace', code: 'Backspace', keyCode: 8, bubbles: true });
                 el.dispatchEvent(event);
             } else if (action === 'ENTER') {
                 const event = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, bubbles: true });
                 el.dispatchEvent(event);
             }
        }
        return;
    }

    if (action === 'BACKSPACE') {
        const start = el.selectionStart || 0;
        const end = el.selectionEnd || 0;
        if (start === end && start > 0) {
            el.value = el.value.substring(0, start - 1) + el.value.substring(end);
            el.selectionStart = el.selectionEnd = start - 1;
        } else if (start !== end) {
            el.value = el.value.substring(0, start) + el.value.substring(end);
            el.selectionStart = el.selectionEnd = start;
        }
    } else if (action === 'ENTER') {
        // In textareas only
        if (el.tagName === 'TEXTAREA') {
            typeKey('\n');
        } else {
            // Form submit?
            el.form?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
        }
    }
    
    el.dispatchEvent(new Event('input', { bubbles: true }));
  };

  // Prevent keyboard buttons from stealing focus from the active input
  const preventFocusDrop = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9999] bg-accent text-black p-4 rounded-full shadow-[0_0_20px_#D4AF37] hover:scale-110 transition-transform active:scale-95"
      >
         {isOpen ? <CloseIcon className="w-8 h-8" /> : <KeyboardIcon className="w-8 h-8" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-0 left-0 right-0 z-[9998] p-4 pointer-events-none"
          >
             <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-xl border-t border-x border-white/20 p-6 rounded-t-3xl shadow-2xl pointer-events-auto">
                <div className="flex flex-col gap-2">
                   {currentRows.map((row, idx) => (
                      <div key={idx} className="flex justify-center gap-2">
                         {idx === Math.floor(currentRows.length / 2) && (
                            <button 
                               onMouseDown={preventFocusDrop}
                               onClick={() => handleAction('BACKSPACE')}
                               className="px-6 py-4 bg-red-500/20 text-red-400 rounded-xl font-bold uppercase active:scale-95 hover:bg-red-500/30 transition-all border border-red-500/30"
                            >
                               <BackspaceIcon />
                            </button>
                         )}
                         {idx === currentRows.length - 1 && (
                            <button 
                               onMouseDown={preventFocusDrop}
                               onClick={() => setIsShift(!isShift)}
                               className={`px-6 py-4 rounded-xl font-bold uppercase active:scale-95 transition-all border border-white/10 ${isShift ? 'bg-accent text-black shadow-[0_0_10px_#D4AF37]' : 'bg-black/50 text-white hover:bg-white/10'}`}
                            >
                               SHIFT
                            </button>
                         )}

                         {row.map(key => (
                            <button
                               key={key}
                               onMouseDown={preventFocusDrop}
                               onClick={() => typeKey(key)}
                               className="flex-1 max-w-16 h-14 bg-black/50 rounded-xl text-white font-mono text-xl active:scale-90 hover:bg-white/20 transition-all border border-white/5 flex items-center justify-center shadow-inner"
                            >
                               {key}
                            </button>
                         ))}

                         {idx === currentRows.length - 1 && (
                            <button 
                               onMouseDown={preventFocusDrop}
                               onClick={() => handleAction('ENTER')}
                               className="px-6 py-4 bg-green-500/20 text-green-400 rounded-xl font-bold uppercase active:scale-95 hover:bg-green-500/30 transition-all border border-green-500/30"
                            >
                               <KeyboardReturnIcon />
                            </button>
                         )}
                      </div>
                   ))}
                   
                   <div className="flex justify-center gap-2 mt-2">
                       <button
                           onMouseDown={preventFocusDrop}
                           onClick={() => typeKey(' ')}
                           className="w-1/2 h-14 bg-black/50 rounded-xl text-white font-mono active:scale-95 hover:bg-white/20 transition-all border border-white/5 flex items-center justify-center shadow-inner"
                       >
                           <SpaceBarIcon className="opacity-50" />
                       </button>
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
