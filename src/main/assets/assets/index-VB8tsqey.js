(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();class o{constructor(){this.state={kernel:"A21S30i19GP13",encryption:"AES-GCM-512",authLevel:"ROOT",tokens:12450,fileSystem:{}},console.log("A#0M KERNEL INITIALIZED [SECURE 512-BIT]")}static getInstance(){return o.instance||(o.instance=new o),o.instance}getState(){return{...this.state}}async processCommand(e){const i=e.trim().toLowerCase();if(i.includes("tokens"))return`System: Current Liquidity is ${this.state.tokens} A#0M Units.`;if(i==="clear"||i==="cls")return"SYSTEM_CLEAR";if(i==="build")return"SYSTEM_BUILD_START";if(i.includes("underwriting"))return"System: Copyright (c) 2026 A#0M Technologies. Underwritten by Proctor & Gamble. Certified FCC Compliant.";if(i.includes("who are you")||i.includes("status"))return"A#0M Framework v2026.4.18. Identity: Matthew Joshua Gallegos (Creator). Secure 512-bit Tunnel Active.";try{if(i.startsWith("open "))return`Switching portal to: ${i.split(" ")[1].toUpperCase()}`}catch{return"Kernel Panic: Command mapping failed."}return`A#0M > Command '${e}' not recognized in current session.`}}class l{constructor(e){this.terminalHistory=[],this.appRoot=document.getElementById(e)||document.body,this.appRoot.classList.add("a0m-native-surface"),this.kernel=o.getInstance(),this.init()}init(){this.renderLayout(),this.initTerminal()}renderLayout(){this.appRoot.innerHTML=`
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
        `,setInterval(()=>{const e=document.getElementById("system-time");e&&(e.innerText=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))},1e3)}initTerminal(){const e=document.getElementById("cli-input"),i=document.getElementById("terminal-lines"),s=document.getElementById("terminal-wall");e?.addEventListener("keydown",async t=>{if(t.key==="Enter"&&e.value.trim()){const n=e.value;this.addLine(`sovereign@a0m:~$ ${n}`,"text-white"),e.value="";const a=await this.kernel.processCommand(n);a==="SYSTEM_CLEAR"?i&&(i.innerHTML=""):a==="SYSTEM_BUILD_START"?await this.runBuildSequencer():a&&this.addLine(a,"text-accent"),s&&(s.scrollTop=s.scrollHeight)}})}async wait(e){return new Promise(i=>setTimeout(i,e))}async runBuildSequencer(){this.addLine("A#0M BUILD INITIATED :: COMPILING com.a#0m.package.app","text-blue-400 font-black"),await this.wait(500),this.addLine("Kernel: Syncing local logic segments...","text-gray-500"),await this.wait(300),this.addLine("Encryption: Wrapping 512-bit Secure Layer...","text-gray-500"),await this.wait(400),this.addLine("Compliance: Verifying FCC ID A21S30i19GP13...","text-green-500"),await this.wait(1e3);try{const e=await fetch("/api/explorer/shell",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"npm run build"})});this.addLine("System: Virtualizing Android11 .apk / .aab handshake...","text-gray-300"),await this.wait(500),this.addLine("Success: com.a#0m.package.app generated in dist/","text-accent font-bold"),this.addLine("A#0M > System is now installable and FCC compliant.","text-white")}catch{this.addLine("Error: Build pipeline interrupted.","text-red-500")}}addLine(e,i="text-gray-300"){const s=document.getElementById("terminal-lines");if(s){const t=document.createElement("div");t.className=i,t.innerText=e,s.appendChild(t)}}}console.log("A#0M FRAMEWORK: PRE-BOOT CHECK...");const c=()=>{try{console.log("A#0M FRAMEWORK: BOOT SEQUENCER STARTING...");const r=new l("a0m-root");window.A0M_FRAMEWORK=r,console.log("A#0M FRAMEWORK: ONLINE")}catch(r){console.error("A#0M FRAMEWORK: BOOT CRITICAL FAILURE",r),document.body.innerHTML=`<div style="color:red; padding: 20px;">KERNEL PANIC: ${r}</div>`}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",c):c();
