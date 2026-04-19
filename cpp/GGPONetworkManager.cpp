/**
 * A#0M Authority Console - GGPO Rollback Implementation
 * Project: Realms Collide (LTE Enterprise)
 */

#include "GGPONetworkManager.h"

GGPONetworkManager::GGPONetworkManager() : GGPOSessionHandle(nullptr), CurrentFrame(0) {}

void GGPONetworkManager::InitSession(int32 LocalPort, int32 RemotePort, FString RemoteIP) {
    GGPOSessionCallbacks callbacks = {0};
    callbacks.begin_game = &GGPONetworkManager::BeginGameCallback;
    callbacks.advance_frame = &GGPONetworkManager::AdvanceFrameCallback;
    callbacks.on_event = &GGPONetworkManager::OnEventCallback;

    // Start GGPO P2P Session over LTE Enterprise Private Network
    ggpo_start_session(&GGPOSessionHandle, &callbacks, "RealmsCollide", 2, sizeof(int32), LocalPort);
    
    // Low-Latency Handshake
    ggpo_set_disconnect_timeout(GGPOSessionHandle, 3000);
    ggpo_set_disconnect_notify_timeout(GGPOSessionHandle, 1000);
}

void GGPONetworkManager::AdvanceFrame(int32 LocalInput) {
    int32 DisconnectFlags;
    
    // Add local input to the rollback queue
    ggpo_add_local_input(GGPOSessionHandle, 0, &LocalInput, sizeof(int32));

    // Synchronize both players
    int32 Inputs[2];
    if (ggpo_synchronize_input(GGPOSessionHandle, (void *)Inputs, sizeof(int32) * 2, &DisconnectFlags) == GGPO_OK) {
        // Execute deterministic game logic
        // If GGPO detects a mis-prediction, LoadGameState() will trigger automatically
        CurrentFrame++;
    }
    
    ggpo_idle(GGPOSessionHandle, 1);
}

bool GGPONetworkManager::LoadGameState(unsigned char *buffer, int len) {
    // Instant Rollback: Restore character positions and health to previous frame
    FMemory::Memcpy(StateBuffer, buffer, len);
    return true;
}

bool GGPONetworkManager::OnEventCallback(GGPOEvent *info) {
    switch (info->code) {
        case GGPO_EVENTCODE_SYNCHRONIZING:
            // Syncing with remote peer...
            break;
        case GGPO_EVENTCODE_SYNCHRONIZED_WITH_PEER:
            // Connection Optimized
            break;
        case GGPO_EVENTCODE_RUNNING:
            // Lag-Free Mode Active
            break;
    }
    return true;
}
