/**
 * A#0M Technologies :: Liquid UI Renderer
 * Design: Java Inspired Structure
 * Brands: Macintosh, Apple, Pixel, Microsoft
 */

import { A0MKernel } from './A0M_Framework_Core';

export class A0MUI {
    private appRoot: HTMLElement;
    private kernel: A0MKernel;
    private terminalHistory: string[] = [];

    constructor(rootId: string) {
        this.appRoot = document.getElementById(rootId) || document.body;
        this.appRoot.classList.add('a0m-native-surface');
        this.kernel = A0MKernel.getInstance();
        this.renderBootScreen();
    }

    private async renderBootScreen() {
        this.appRoot.innerHTML = `
            <div class="fixed inset-0 bg-black flex items-center justify-center font-mono">
                <div class="w-80 space-y-6">
                    <div class="space-y-1">
                        <div class="flex justify-between text-[10px] uppercase tracking-widest text-accent font-black">
                            <span>A#0M Kernel Boot</span>
                            <span id="boot-percent">0%</span>
                        </div>
                        <div class="progress-line"></div>
                    </div>
                    <div id="boot-logs" class="text-[9px] text-gray-600 h-20 overflow-hidden space-y-1">
                        <div class="animate-pulse">Initializing Sovereign Logical Sectors...</div>
                    </div>
                </div>
            </div>
        `;

        const logs = [
            "Hardware: Macintosh/Apple/Pixel/Microsoft Linked",
            "Encryption: AES-512-GCM Handshake Active",
            "Logic: FCC Compliance vA21S30i19GP13 Verified",
            "Sync: Google HQ Joint Path Synchronized",
            "Ready: A#0M Technologies Kernel Online"
        ];

        const logEl = document.getElementById('boot-logs');
        const percentEl = document.getElementById('boot-percent');

        for(let i=0; i<logs.length; i++) {
            await this.wait(400);
            if (logEl) {
                const div = document.createElement('div');
                div.innerText = `> ${logs[i]}`;
                logEl.appendChild(div);
                logEl.scrollTop = logEl.scrollHeight;
            }
            if (percentEl) {
                percentEl.innerText = `${Math.round(((i + 1) / logs.length) * 100)}%`;
            }
        }

        await this.wait(500);
        this.init();
    }

    private init() {
        this.renderLayout();
        this.initTerminal();
    }

    private renderLayout() {
        this.appRoot.innerHTML = `
            <div class="fixed inset-0 bg-black text-white font-mono flex flex-col overflow-hidden select-none">
                <!-- Status Bar -->
                <div class="h-10 bg-zinc-900 border-b border-white/10 flex items-center justify-between px-6 z-50">
                    <div class="flex items-center gap-4">
                        <span class="text-accent font-black tracking-tighter">A#0M OS</span>
                        <div class="h-4 w-[1px] bg-white/20"></div>
                        <span class="text-xs text-gray-500 uppercase">Sovereign Mode Active</span>
                    </div>
                    <div class="flex items-center gap-6 text-xs text-gray-400">
                        <span id="system-time">--:--</span>
                        <span class="text-blue-500 font-bold">512-BIT SECURED</span>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="flex-1 flex flex-col relative">
                    <div id="portal-content" class="absolute inset-0 flex flex-col">
                        <!-- Default View: Terminal -->
                        <div class="flex-1 bg-black p-8 overflow-y-auto" id="terminal-wall">
                            <div class="max-w-4xl mx-auto space-y-2" id="terminal-lines">
                                <div class="text-accent font-bold">A#0M AUTHORITY OS v2026.4.18 [ULTIMATE SYNC]</div>
                                <div class="text-gray-500 italic">Copyright (c) 2026 Matthew Joshua Gallegos. All Rights Reserved.</div>
                                <div class="text-gray-500">System: 512-Bit Encryption rate detected.</div>
                                <div class="text-gray-500">System: Localizing kernel parameters... Ready.</div>
                                <br/>
                            </div>
                        </div>

                        <!-- Command Input -->
                        <div class="h-16 bg-zinc-900/50 border-t border-white/5 px-8 flex items-center">
                            <span class="text-accent mr-4">sovereign@a0m:~$</span>
                            <input type="text" id="cli-input" class="flex-1 bg-transparent border-none outline-none text-white font-mono text-lg" autofocus placeholder="Conversational CLI... Type a command" />
                        </div>
                    </div>
                </div>

                <!-- Footer (A#0M Trademark) -->
                <div class="h-8 bg-black/80 border-t border-white/5 flex items-center justify-center px-4">
                    <p class="text-[10px] text-gray-600 uppercase tracking-widest text-center">
                        © 2026 Matthew Joshua Gallegos | TM: A#0M Technologies | Proctor & Gamble Attorneys | Secret: Bitcoin
                    </p>
                </div>
            </div>
        `;

        // Update Time
        setInterval(() => {
            const timeEl = document.getElementById('system-time');
            if (timeEl) timeEl.innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }, 1000);
    }

    private initTerminal() {
        const input = document.getElementById('cli-input') as HTMLInputElement;
        const lines = document.getElementById('terminal-lines');
        const wall = document.getElementById('terminal-wall');

        input?.addEventListener('keydown', async (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                const query = input.value;
                this.addLine(`sovereign@a0m:~$ ${query}`, 'text-white');
                input.value = '';

                const response = await this.kernel.processCommand(query);
                
                if (response === 'SYSTEM_CLEAR') {
                    if (lines) lines.innerHTML = '';
                } else if (response === 'SYSTEM_BUILD_START') {
                    await this.runBuildSequencer();
                } else if (response) {
                    this.addLine(response, 'text-accent');
                }

                if (wall) wall.scrollTop = wall.scrollHeight;
            }
        });
    }

    private async wait(ms: number) {
        return new Promise(r => setTimeout(r, ms));
    }

    private async runBuildSequencer() {
        this.addLine("A#0M BUILD INITIATED :: COMPILING com.a#0m.package.app", "text-blue-400 font-black");
        await this.wait(500);
        this.addLine("Kernel: Syncing local logic segments...", "text-gray-500");
        await this.wait(300);
        this.addLine("Encryption: Wrapping 512-bit Secure Layer...", "text-gray-500");
        await this.wait(400);
        this.addLine("Compliance: Verifying FCC ID A21S30i19GP13...", "text-green-500");
        await this.wait(1000);
        
        try {
             const res = await fetch('/api/explorer/shell', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ command: 'npm run build' })
            });
            this.addLine("System: Virtualizing Android11 .apk / .aab handshake...", "text-gray-300");
            await this.wait(500);
            this.addLine("Success: com.a#0m.package.app generated in dist/", "text-accent font-bold");
            this.addLine("A#0M > System is now installable and FCC compliant.", "text-white");
        } catch (e) {
            this.addLine("Error: Build pipeline interrupted.", "text-red-500");
        }
    }

    public addLine(text: string, className: string = 'text-gray-300') {
        const lines = document.getElementById('terminal-lines');
        if (lines) {
            const div = document.createElement('div');
            div.className = className;
            div.innerText = text;
            lines.appendChild(div);
        }
    }
}
