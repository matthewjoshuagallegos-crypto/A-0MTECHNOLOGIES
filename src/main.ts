/**
 * A#0M Framework Entry Point
 * Architecture: Macintosh/Apple/Pixel/Microsoft Native
 */

import './index.css';
import { A0MUI } from './A0M_UI_Renderer';

// Initialize the A#0M Framework
document.addEventListener('DOMContentLoaded', () => {
    console.log("A#0M FRAMEWORK: BOOT SEQUENCER STARTING...");
    
    // Boot UI
    const ui = new A0MUI('a0m-root');
    
    // Global Access
    (window as any).A0M_FRAMEWORK = ui;
});
