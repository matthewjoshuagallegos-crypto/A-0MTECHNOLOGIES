import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import MemoryIcon from '@mui/icons-material/Memory';
import HubIcon from '@mui/icons-material/Hub';
import GppGoodIcon from '@mui/icons-material/GppGood';
import InventoryIcon from '@mui/icons-material/Inventory';
import HardwareIcon from '@mui/icons-material/Hardware';
import PublicIcon from '@mui/icons-material/Public';

export default function DevKit() {
  const [activeFile, setActiveFile] = useState<'GRADLE' | 'HEADER' | 'COMBAT' | 'GGPO'>('HEADER');

  const ggpoCode = `// GGPONetworkManager.cpp
void GGPONetworkManager::AdvanceFrame(int32 LocalInput) {
    // Add local input to the rollback queue
    ggpo_add_local_input(GGPOSessionHandle, 0, &LocalInput, sizeof(int32));

    // Synchronize both players (Predictive Rollback)
    int32 Inputs[2];
    if (ggpo_synchronize_input(GGPOSessionHandle, Inputs, sizeof(int32)*2, &Flags) == GGPO_OK) {
        // Run deterministic logic
        CurrentFrame++;
    }
    ggpo_idle(GGPOSessionHandle, 1);
}`;

  const combatCode = `// realms_fighter_combat.cpp
// Core Combat Flow Logic - Decoupled from Render (GGPO Ready)

void ARealmsFighter::ExecuteLightPunch() {
    // Determine Frame Data
    int32 StartupFrames = 3;
    int32 ActiveFrames = 2;
    int32 RecoveryFrames = 10;

    // Trigger Hitbox Detection on Frame 4
    if (CurrentFrameSync == (StartupFrames + 1)) {
        SpawnDeterministicHitbox(EPunchLevel::Light);
    }

    if (bIsMortalKombatCharacter) {
        // High8 Digitizer Overlay Logic
        TriggerSpriteAnimation("Digitized_LP");
    } else {
        // UE4 Skeletal Logic
        PlayAnimMontage(SF_Punch_Montage);
    }
}`;

  const gradleCode = `android {
    compileSdkVersion 33
    defaultConfig {
        applicationId "com.lteenterprise.realmscollide"
        minSdkVersion 26 // Modern Android TV
        targetSdkVersion 33
        
        ndk {
            abiFilters 'arm64-v8a' // 64-bit TV chips
        }
    }
}
dependencies {
    implementation 'androidx.leanback:leanback:1.0.0' 
    implementation project(':ggpo-android-lib')
}`;

  const headerCode = `#pragma once
#include "CoreMinimal.h"
#include "GameFramework/Character.h"

UCLASS()
class REALMSCOLLIDE_API ARealmsFighter : public ACharacter {
    GENERATED_BODY()
    // Core Fighter Stats for Realms Collide
    float MaxHealth;
    float SpecialMeter; // V-Gauge / Brutality
    int32 CurrentFrameInput; // Rollback Sync
};`;

  return (
    <div className="h-full flex px-16 pb-16 gap-10">
      
      {/* Build Specs & Architecture */}
      <div className="w-1/3 flex flex-col gap-6">
        <h2 className="text-4xl font-black uppercase text-white mb-4 tracking-tighter">SDK Architecture</h2>
        
        <div className="bg-zinc-900 border border-white/5 rounded-3xl p-8 tv-focus" tabIndex={0}>
          <div className="flex items-center gap-4 mb-6">
            <HubIcon className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-black uppercase">Rollback Netcode</h3>
          </div>
          <p className="text-gray-400 font-mono text-sm leading-relaxed mb-6">
            Integrating <span className="text-white font-bold">GGPO (Good Game Peace Out)</span> SDK. Bypassing standard P2P delay. Logic is decoupled from rendering for frame-perfect determinism.
          </p>
          <div className="flex items-center gap-2 text-xs font-black uppercase bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 w-fit">
            Protocol: GGPOUE4 Active
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/5 rounded-3xl p-8 tv-focus" tabIndex={0}>
          <div className="flex items-center gap-4 mb-6">
            <GppGoodIcon className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-black uppercase">Android TV Manifest</h3>
          </div>
          <ul className="space-y-3 font-mono text-xs text-gray-500">
            <li className="flex justify-between">
              <span>LEANBACK_SUPPORT:</span>
              <span className="text-green-500">TRUE</span>
            </li>
            <li className="flex justify-between">
              <span>TOUCHSCREEN_REQ:</span>
              <span className="text-red-500">FALSE</span>
            </li>
            <li className="flex justify-between">
              <span>LTE_CONTROLLER:</span>
              <span className="text-white">OPTIMIZED</span>
            </li>
          </ul>
        </div>

        <div className="mt-auto grid grid-cols-2 gap-4">
           <button 
             onClick={() => setActiveFile('HEADER')}
             className={`p-4 rounded-xl flex items-center justify-center gap-3 font-black uppercase transition-all text-xs ${activeFile === 'HEADER' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
           >
             <CodeIcon className="w-4 h-4" /> Header
           </button>
           <button 
             onClick={() => setActiveFile('COMBAT')}
             className={`p-4 rounded-xl flex items-center justify-center gap-3 font-black uppercase transition-all text-xs ${activeFile === 'COMBAT' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
           >
             <HardwareIcon className="w-4 h-4" /> Combat
           </button>
           <button 
             onClick={() => setActiveFile('GGPO')}
             className={`p-4 rounded-xl flex items-center justify-center gap-3 font-black uppercase transition-all text-xs ${activeFile === 'GGPO' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
           >
             <PublicIcon className="w-4 h-4" /> GGPO
           </button>
           <button 
             onClick={() => setActiveFile('GRADLE')}
             className={`p-4 rounded-xl flex items-center justify-center gap-3 font-black uppercase transition-all text-xs ${activeFile === 'GRADLE' ? 'bg-white text-black' : 'bg-white/5 text-gray-400 hover:bg-white/10'}`}
           >
             <InventoryIcon className="w-4 h-4" /> Gradle
           </button>
        </div>
      </div>

      {/* Code Editor Preview */}
      <div className="w-2/3 bg-black border border-white/10 rounded-[3-rem] p-10 flex flex-col overflow-hidden relative tv-focus" tabIndex={0}>
         <div className="flex items-center gap-4 mb-8 text-gray-400">
            <TerminalIcon className="w-6 h-6" />
            <span className="font-mono text-sm uppercase font-bold tracking-[0.2em]">Source Code Inspection // com.lteenterprise.realmscollide</span>
         </div>
         
         <pre className="flex-1 overflow-auto custom-scrollbar font-mono text-lg text-accent/80 p-8 bg-black/40 rounded-2xl border border-white/5 leading-relaxed">
            <code>{activeFile === 'HEADER' ? headerCode : activeFile === 'COMBAT' ? combatCode : activeFile === 'GGPO' ? ggpoCode : gradleCode}</code>
         </pre>

         <div className="absolute bottom-8 right-12 flex items-center gap-4 opacity-30">
            <MemoryIcon className="w-12 h-12 text-accent" />
            <div className="text-right">
               <p className="text-xs font-black uppercase">Target SDK 33</p>
               <p className="text-xs font-black uppercase">ARM64-V8A Target</p>
            </div>
         </div>
      </div>

    </div>
  );
}


