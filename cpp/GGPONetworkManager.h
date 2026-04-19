#pragma once

/**
 * A#0M Authority Console - GGPO Rollback Integration
 * Project: Realms Collide (LTE Enterprise)
 * Implementation: Good Game Peace Out (GGPO) Session Manager
 */

#include "CoreMinimal.h"
#include "ggpo.h" // Native GGPO SDK Header

class GGPONetworkManager {
public:
    GGPONetworkManager();
    ~GGPONetworkManager();

    // Initialize GGPO Session for 2 Players
    void InitSession(int32 LocalPort, int32 RemotePort, FString RemoteIP);

    // Synchronize Inputs for the current frame
    void AdvanceFrame(int32 LocalInput);

    // Called by GGPO to save game state for potential rollback
    bool SaveGameState(unsigned char **buffer, int *len, int *checksum, int frame);

    // Called by GGPO to restore game state during a rollback event
    bool LoadGameState(unsigned char *buffer, int len);

    // Rollback Callbacks
    static bool BeginGameCallback(const char *game);
    static bool AdvanceFrameCallback(int flags);
    static bool OnEventCallback(GGPOEvent *info);

private:
    GGPOSession* GGPOSessionHandle;
    int32 CurrentFrame;
    
    // Deterministic state buffer
    uint8_t StateBuffer[1024]; 
};
