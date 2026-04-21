/**
 * A#0M Framework Entry Point
 * Architecture: Macintosh/Apple/Pixel/Microsoft Native
 */

import './index.css';
import { A0MUI } from './A0M_UI_Renderer';

// Initialize the A#0M Framework
console.log("A#0M FRAMEWORK: PRE-BOOT CHECK...");

const boot = () => {
    try {
        console.log("A#0M FRAMEWORK: BOOT SEQUENCER STARTING...");
        
        // Boot UI
        const ui = new A0MUI('a0m-root');
        
        // Global Access
        (window as any).A0M_FRAMEWORK = ui;
        console.log("A#0M FRAMEWORK: ONLINE");
    } catch (e) {
        console.error("A#0M FRAMEWORK: BOOT CRITICAL FAILURE", e);
        document.body.innerHTML = `<div style="color:red; padding: 20px;">KERNEL PANIC: ${e}</div>`;
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
} else {
    boot();
}
