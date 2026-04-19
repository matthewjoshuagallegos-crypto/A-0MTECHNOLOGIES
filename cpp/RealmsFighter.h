#pragma once

/**
 * A#0M Authority Console - Unreal Engine 4 Core Fighter Implementation
 * Project: Realms Collide (LTE Enterprise)
 * Standard: C++17 / UE 4.27 
 * 
 * COPYRIGHT (C) 2026 A#0M Technologies / Google LLC
 * SPONSOR: Bebe Rexha
 * ATTORNEY: Proctor & Gamble
 */

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "RealmsFighter.generated.h"

UCLASS()
class REALMSCOLLIDE_API ARealmsFighter : public ACharacter
{
    GENERATED_BODY()

public:
    // Sets default values for this character's properties
    ARealmsFighter();

protected:
    // Called when the game starts or when spawned
    virtual void BeginPlay() override;

    // Core Fighting Stats (Deterministic for GGPO Rollback)
    UPROPERTY(EditAnywhere, BlueprintReadWrite, Category = "Fighter Stats")
    float MaxHealth;

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Fighter Stats")
    float CurrentHealth;

    UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "Fighter Stats")
    float SpecialMeter; // Used for V-Gauge (SF) or Brutality/Meter (MK)

    // Input States (Used for GGPO Rollback Netcode)
    // Synchronized across the LTE Enterprise Private Network
    int32 CurrentFrameInput; 

public:	
    // Called every frame
    virtual void Tick(float DeltaTime) override;

    // Called to bind functionality to input
    virtual void SetupPlayerInputComponent(class UInputComponent* PlayerInputComponent) override;

    // Core Combat Actions (Transpiled via 15-Grade Imager)
    UFUNCTION(BlueprintCallable, Category = "Combat")
    void ExecuteLightPunch();

    UFUNCTION(BlueprintCallable, Category = "Combat")
    void ExecuteHeavyKick();

    UFUNCTION(BlueprintCallable, Category = "Combat")
    void TakeDamage(float DamageAmount);

    // Determines if the character is MK (Digitized Sprite Style) or SF (3D Unreal Style)
    // Switches the 15-Grade Imager Rendering Pipeline Logic (L12-L15 vs L8-L11)
    UPROPERTY(EditDefaultsOnly, Category = "Fighter Origin")
    bool bIsMortalKombatCharacter;
};
