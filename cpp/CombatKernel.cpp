/**
 * A#0M Authority Console - Unreal Engine 4 Core Combat Logic
 * Project: Realms Collide (LTE Enterprise)
 * Standard: C++17 / UE 4.27 
 * 
 * IMPLEMENTATION: Deterministic Combat Kernel for GGPO Rollback
 */

#include "RealmsFighter.h"

void ARealmsFighter::ExecuteLightPunch() {
    // Deterministic Frame Data
    // These values are synced across the A#0M Network
    int32 StartupFrames = 3;
    int32 ActiveFrames = 2;
    int32 RecoveryFrames = 10;

    // Trigger Hitbox Detection exactly on Frame 4
    // Logic is decoupled from the 15-Grade Imager for accuracy
    if (CurrentFrameSync == (StartupFrames + 1)) {
        SpawnDeterministicHitbox(EPunchLevel::Light);
    }

    if (bIsMortalKombatCharacter) {
        // High8 Digitizer Overlay Logic (L12-L15)
        // Switches to classic "Imager" legacy rendering
        TriggerSpriteAnimation("Digitized_LP");
    } else {
        // Modern UE4 Skeletal Logic (L8-L11)
        // Photorealistic 3D rendering
        PlayAnimMontage(SF_Punch_Montage);
    }
}

void ARealmsFighter::TakeDamage(float DamageAmount) {
    CurrentHealth = FMath::Clamp(CurrentHealth - DamageAmount, 0.0f, MaxHealth);
    
    if (CurrentHealth <= 0) {
        // Trigger Finish Move Protocol
        if (bIsMortalKombatCharacter) {
             HandleFatalityState();
        } else {
             HandleKOState();
        }
    }
}
