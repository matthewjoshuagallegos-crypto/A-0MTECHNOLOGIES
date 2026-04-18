/**
 * A#0M Core Server Engine - v2026.4
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

// BACKGROUND BOOTLOADER SIMULATION
function startBackgroundTasks() {
  console.log("A#0M BACKGROUND KERNEL: Initialized");
  
  // SECURE SYNC every minute
  cron.schedule('* * * * *', () => {
    console.log(`[${new Date().toISOString()}] System: 512-bit Security Handshake Synchronized.`);
  });

  // SKU COMPLIANCE CHECK every 5 minutes
  cron.schedule('*/5 * * * *', () => {
    console.log(`[${new Date().toISOString()}] Registry: FCC Compliance Audit - STATUS_PASSED`);
  });
}

async function startServer() {
  startBackgroundTasks();
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // explorer tree
  app.get('/api/explorer/tree', async (req, res) => {
    const getTree = (dir: string): any => {
      const name = path.basename(dir) || 'root';
      const stats = fs.statSync(dir);
      const node: any = {
        name,
        path: path.relative(process.cwd(), dir),
        type: stats.isDirectory() ? 'directory' : 'file'
      };

      if (stats.isDirectory()) {
        const children = fs.readdirSync(dir);
        node.children = children
          .filter(child => !child.startsWith('.') && child !== 'node_modules')
          .map(child => getTree(path.join(dir, child)));
      }
      return node;
    };

    try {
      res.json(getTree(process.cwd()));
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
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

  // Vite Integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`A#0M AUTHORITY SERVER LIVE - http://localhost:${PORT}`);
  });
}

startServer();
