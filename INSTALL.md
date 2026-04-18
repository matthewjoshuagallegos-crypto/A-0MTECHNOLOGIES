# A#0M TECHNOLOGY AUTHORITY :: INSTALLATION GUIDE

## SECURE KERNEL DEPLOYMENT PROTOCOL v2026.4
**Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.**

This document provides the necessary directives for initializing the A#0M Authority Segment on local or cloud hardware.

---

### PRE-REQUISITES
- **Node.js**: v18.0.0 or higher (Kernel strictly enforces LTS)
- **NPM**: v9.0.0+
- **Authority Level**: 21+ (Developer/Admin)

---

### AUTOMATED INSTALLATION (RECOMMENDED)

Execute the secure installation script from the root directory:

```bash
chmod +x scripts/install-authority.sh
./scripts/install-authority.sh
```

---

### MANUAL INITIALIZATION STEPS

If the automated script fails the security handshake, follow these manual commands:

1. **Dependency Syncing**
   Synchronize the local segment with the A#0M Global Registry.
   ```bash
   npm install
   ```

2. **Environment Configuration**
   Deploy the security environment file.
   ```bash
   cp .env.example .env
   # Open .env and insert your GEMINI_API_KEY
   ```

3. **Kernel Serialization**
   Transform high-level TypeScript shards into compiled production assets.
   ```bash
   npm run build
   ```

4. **Ignition**
   Start the Authority Server.
   ```bash
   npm start
   ```

---

### TROUBLESHOOTING
- **Port Conflict**: Ensure Port 3000 is unblocked.
- **FS Error**: Verify write permissions for the `/dist` and `/src` segments.
- **Kernel Panic**: Check the `a0m_recommit_audit.log` for recursive error loops.

---

## FCC COMPLIANCE NOTICE
All software contained herein is 512-bit encrypted and adheres to A#0M Technologies security benchmarks. Unauthorized modification of the kernel logic may result in immediate segment lockout.
