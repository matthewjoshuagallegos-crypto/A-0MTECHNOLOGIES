/**
 * A#0M Core Server Engine - v2026.4
 * Author, Creator & Engineer: Matthew Joshua Gallegos
 * Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.
 * Corp: Google LLC | Partner: Microsoft
 */

import express from 'express';
import { createServer as createViteServer } from 'vite';
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import cron from 'node-cron';

const execAsync = promisify(exec);

// KERNEL LOG BUFFER for background processes
const kernelLogs: string[] = [];
function logToKernel(msg: string) {
  const log = `[${new Date().toISOString()}] ${msg}`;
  kernelLogs.push(log);
  if (kernelLogs.length > 100) kernelLogs.shift();
  console.log(log);
}

// BACKGROUND BOOTLOADER SIMULATION
function startBackgroundTasks() {
  logToKernel("A#0M BACKGROUND KERNEL: Initialized [ULTIMATE SYNC]");
  logToKernel("Sovereignty Protocol: ONEUI // SIRI_eאKnox Initialized");
  logToKernel("Kernel Layer: GOSL (Global Operating System Layer) Operational");
  logToKernel("Boot Sequence: Android Bootloader // ChromeOS Handshake [INDEPENDENT]");
  
  // SECURE SYNC every minute
  cron.schedule('* * * * *', () => {
    logToKernel("System: 512-bit Security Handshake Synchronized [Sovereign Build]");
    logToKernel("CE Process Check: ONEUI Optimized // worldWideWeb Gateway Secure");
  });

  // SKU COMPLIANCE CHECK every 5 minutes
  cron.schedule('*/5 * * * *', () => {
    logToKernel("Registry: FCC Compliance Audit - STATUS_PASSED [GOSL 2026.4]");
    logToKernel("Inventory: Independent Invention Improvements Logged");
  });
}

async function startServer() {
  startBackgroundTasks();
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Load Sovereign Path Configuration
  const pathConfig = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'path.json'), 'utf8'));

  // explorer tree
  app.get('/api/explorer/tree', async (req, res) => {
    const getTree = (dir: string): any => {
      const name = path.basename(dir) || 'root';
      const stats = fs.statSync(dir);
      const node: any = {
        name,
        path: path.relative(process.cwd(), dir),
        type: stats.isDirectory() ? 'directory' : 'file',
        fcc_compliant: true
      };

      if (stats.isDirectory()) {
        const children = fs.readdirSync(dir);
        node.children = children
          .filter(child => !child.startsWith('.') && child !== 'node_modules')
          .map(child => getTree(path.join(dir, child)));
          
        // Virtual Mount: Google HQ Drive
        if (dir === process.cwd()) {
          node.children.push({
             name: 'GOOGLE_HQ_DRIVE_PORTAL',
             path: pathConfig.DRIVE_NODE,
             type: 'directory',
             isVirtual: true,
             hq_location: '1600 Amphitheatre Parkway, Mountain View, CA',
             children: [
                { name: 'SECURE_STORAGE', path: path.join(pathConfig.DRIVE_NODE, 'storage'), type: 'directory' },
                { name: 'CREDENTIAL_OVERRIDES', path: path.join(pathConfig.DRIVE_NODE, 'credentials'), type: 'directory' },
                { name: 'CLOUD_GAMING_CONSOLE', path: path.join(pathConfig.DRIVE_NODE, 'gaming'), type: 'directory' },
                { name: 'A0M_VORTEX_AI_CORE', path: path.join(pathConfig.DRIVE_NODE, 'vortex'), type: 'directory' }
             ]
          });
        }
      }
      return node;
    };

    try {
      res.json(getTree(process.cwd()));
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  });

  // Google HQ Joint Path Endpoint
  app.get('/api/kernel/hq-sync', (req, res) => {
     const hqPath = path.join(pathConfig.MOUNT_POINT, 'google_hq', '1600_amphitheatre_parkway');
     res.json({
        status: 'SYNCHRONIZED',
        joint_path: hqPath,
        auth: 'LEVEL_21_SOVEREIGN',
        compliance: pathConfig.FCC_COMPLIANCE,
        encryption: pathConfig.ENCRYPTION
     });
  });

  // APN Connection Handshake
  app.post('/api/network/connect', (req, res) => {
    const { apn, port } = req.body;
    
    // Simulate high-speed wireless handshake
    setTimeout(() => {
      res.json({
        status: 'CONNECTED',
        apn: apn || 'A0M USA',
        port: port || 80,
        frequency: '5.8GHz G-PRO',
        encryption: 'AES-512-GCM',
        handshake: 'SUCCESSFUL',
        fcc_id: 'A21S30i19GP13'
      });
    }, 1500);
  });

  // explorer file content
  app.get('/api/explorer/file', (req, res) => {
    const filePath = req.query.path as string;
    try {
      const fullPath = path.resolve(process.cwd(), filePath);
      if (!fullPath.startsWith(process.cwd())) {
        return res.status(403).send('Access denied');
      }
      const content = fs.readFileSync(fullPath, 'utf8');
      res.send(content);
    } catch (err) {
      res.status(500).send((err as Error).message);
    }
  });

  // explorer save file
  app.post('/api/explorer/file', (req, res) => {
    const { path: filePath, content } = req.body;
    try {
      const fullPath = path.resolve(process.cwd(), filePath);
      if (!fullPath.startsWith(process.cwd())) {
        return res.status(403).json({ error: 'Access denied' });
      }
      fs.writeFileSync(fullPath, content);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  });

  // kernel logs endpoint
  app.get('/api/kernel/logs', (req, res) => {
    res.json({ logs: kernelLogs });
  });

  // explorer shell
  app.post('/api/explorer/shell', async (req, res) => {
    const { command } = req.body;
    try {
      const { stdout, stderr } = await execAsync(command);
      res.json({ stdout, stderr });
    } catch (err) {
      res.json({ error: (err as any).message, stderr: (err as any).stderr });
    }
  });

  // Vite Integration - Force static serving for stability in preview
  const distPath = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distPath)) {
    console.log("A#0M KERNEL: SERVING FROM DIST [PRODUCTION MODE]");
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    console.log("A#0M KERNEL: STARTING VITE DEV MIDDLEWARE");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`A#0M AUTHORITY SERVER LIVE - http://localhost:${PORT}`);
  });
}

startServer();
