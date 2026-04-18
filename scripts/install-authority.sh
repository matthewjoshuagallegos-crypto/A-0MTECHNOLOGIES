#!/bin/bash

# A#0M TECHNOLOGY AUTHORITY - INSTALLATION SCRIPT v2026.4 [ULTIMATE]
# (C) 2026 MATTHEW JOSHUA GALLEGOS. ALL RIGHTS RESERVED.
# PURPOSE: SECURE KERNEL DEPLOYMENT & ECOSYSTEM INITIALIZATION

echo "----------------------------------------------------------------"
echo "Initializing A#0M Authority Segment Installation [ULTIMATE]..."
echo "Target: 512-bit Secure Kernel SKU_A21S30i19GP13"
echo "Authority: Matthew Joshua Gallegos"
echo "Status: ULTIMATE SYNC ACTIVE"
echo "----------------------------------------------------------------"

# 1. Dependency Handshake
echo "[1/4] Starting Dependency Handshake..."
npm install
if [ $? -eq 0 ]; then
    echo ">> [SUCCESS] Sovereign dependencies synchronized."
else
    echo ">> [FAILURE] Handshake severed. Verify network Uplink."
    exit 1
fi

# 2. Kernel Compilation
echo "[2/4] Compiling Authority Kernel (Production Build)..."
npm run build
if [ $? -eq 0 ]; then
    echo ">> [SUCCESS] Kernel serialized to /dist segment."
else
    echo ">> [FAILURE] Compilation error detected in secure sector."
    exit 1
fi

# 3. Environment Sanitization
echo "[3/4] Sanitizing Environment..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo ">> [WARN] .env segment generated from example. Key rotation recommended."
else
    echo ">> [SUCCESS] Environment segment verified."
fi

# 4. Final Deployment
echo "[4/4] Finalizing Deployment..."
echo "A#0M Authority OS is ready for ignition."
echo "Execute 'npm start' to initiate the Sovereign Gateway."

echo "----------------------------------------------------------------"
echo "INSTALLATION COMPLETE. AMERICAN PIONEERING ENGAGED."
echo "----------------------------------------------------------------"
