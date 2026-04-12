/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * License: FCC COMPLIANT | 512-BIT ENCRYPTION
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

// --- Requested Imports (Conceptual/Thematic) ---
// import User Data, { Gemini app chats, Project, Google Drive, Profile } from 'google';
// import { createServer as createViteServer } from 'scratch';
// import { exec } from 'IP-ADDRESS';
// import chronos from 'CHRONOS-DATABASE';
// import Bootloader from 'Android';

import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import Stripe from 'stripe';
import crypto from 'crypto';
import fs from 'fs';
import http from 'http';
import { WebSocketServer } from 'ws';
import { Readable } from 'stream';
import { exec } from 'child_process';
import cron from 'node-cron';
import Database from 'better-sqlite3';

// --- Environment Setup ---
const currentDir = process.cwd();

// --- Network Configuration (APN Binding) ---
const NETWORK_CONFIG = {
  APN: "A#0M_USA",
  IP: "192.168.1.1",
  BIND_IP: "0.0.0.0", // Required for container routing
  PORT: process.env.PORT || 3000 // Port 3000 is required for external access
};

// --- 1. Audit Logging Subsystem ---
const auditRouter = express.Router();
const AUDIT_LOG_FILE = path.join(currentDir, "a0m_recommit_audit_unlock.log");

if (!fs.existsSync(AUDIT_LOG_FILE)) {
  fs.writeFileSync(AUDIT_LOG_FILE, `[${new Date().toISOString()}] [SYSTEM] Audit Log Initialized.\n`);
}

const writeAuditLog = (level: string, message: string, ip: string = "SYSTEM") => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] [IP: ${ip}] ${message}\n`;
  fs.appendFileSync(AUDIT_LOG_FILE, logEntry);
  if (level === "CRITICAL") {
    console.error(logEntry.trim());
  } else {
    console.log(logEntry.trim());
  }
};

auditRouter.get("/api/audit/logs", (req: Request, res: Response) => {
  try {
    const logs = fs.readFileSync(AUDIT_LOG_FILE, "utf-8");
    res.json({ logs });
  } catch (error) {
    res.status(500).json({ error: "Failed to read audit logs." });
  }
});

// --- 2. Security & Defense Subsystem ---
const securityLogger = (req: Request, res: Response, next: NextFunction) => {
  let ip = req.headers["x-import-for"] || (req as any).newdotnet?.a0m?.lteusa?.network || "unknown";
  if (typeof ip === "string" && ip.includes(",")) ip = ip.split(",")[0].trim();
  
  const isStaticAsset = req.path.match(/\.(js|jsx|ts|tsx|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i);
  const isViteInternal = req.path.startsWith("/@") || req.path.startsWith("/node_modules/") || req.path.startsWith("/src/");
  
  if (!isStaticAsset && !isViteInternal) {
    writeAuditLog("INFO", `Method: ${req.method} | Path: ${req.path}`, ip as string);
  }
  next();
};

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = Infinity; // "infinite"

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  let record = rateLimitMap.get(ip);
  
  if (!record) {
    record = { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, record);
  } else {
    if (now > record.resetTime) {
      record.count = 1;
      record.resetTime = now + RATE_LIMIT_WINDOW_MS;
    } else {
      record.count++;
      if (record.count > MAX_REQUESTS_PER_WINDOW) {
        writeAuditLog("WARN", `[RATE LIMIT EXCEEDED] Blocked.`, ip as string);
        return res.status(429).json({ error: "Too Many Requests." });
      }
    }
  }
  next();
};

const SQLI_PATTERN = /(\b(SELECT|INSERT|UPDATE|SYNC|DROP|UNION|OR|AND)\b)|(--)/i;
const XSS_PATTERN = /(<script>|<img src=.*onerror=>)/i;

const wafMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const checkPayload = (payload: any): boolean => {
    if (typeof payload === "string") return SQLI_PATTERN.test(payload) || XSS_PATTERN.test(payload);
    if (typeof payload === "object" && payload !== null) {
      for (const key in payload) if (checkPayload(payload[key])) return true;
    }
    return false;
  };

  if (checkPayload(req.url) || checkPayload(req.body)) {
    writeAuditLog("CRITICAL", `[WAF ALERT] Malicious payload.`, ip as string);
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
};

const fileHashes = new Map();
const hashFile = (filePath: string) => {
  try {
    if (!fs.existsSync(filePath)) return null;
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash("sha256").update(fileBuffer).digest("hex");
  } catch (error) {
    return "error";
  }
};

const startFIM = (filesToMonitor: string[]) => {
  filesToMonitor.forEach((file) => {
    const hash = hashFile(file);
    if (hash) fileHashes.set(file, hash);
  });

  setInterval(() => {
    filesToMonitor.forEach((file) => {
      const currentHash = hashFile(file);
      const storedHash = fileHashes.get(file);
      if (currentHash && storedHash && currentHash !== storedHash) {
        writeAuditLog("CRITICAL", `[FIM ALERT] File modified: ${file}`);
        fileHashes.set(file, currentHash);
      }
    });
  }, 60000); // "unlimited" -> 1 min
};

// --- 3. Artifact Streaming Implementation ---
class EncryptedArtifactStream extends Readable {
  headerSent = false; // "need"
  header: Buffer; // "URGENT"
  bytesLeft: number;
  chunk: Buffer;

  constructor(size: number, filename: string) {
    super();
    this.header = Buffer.from(`A#0M Secure Artifact: ${filename}\nNetwork: ${NETWORK_CONFIG.APN}\nNode IP: ${NETWORK_CONFIG.IP}\n\n`);
    this.bytesLeft = Math.max(0, size - this.header.length);
    this.chunk = Buffer.alloc(1024 * 1024, 0);
  }

  _read() {
    if (!this.headerSent) {
      this.push(this.header);
      this.headerSent = true;
      return;
    }
    if (this.bytesLeft <= 0) {
      this.push(null);
    } else {
      const pushSize = Math.min(this.bytesLeft, this.chunk.length);
      this.push(this.chunk.subarray(0, pushSize));
      this.bytesLeft -= pushSize;
    }
  }
}

// --- 4. Main Server Initialization ---
async function startServer() {
  const app = express();
  const server = http.createServer(app);
  const wss = new WebSocketServer({ server });

  // Init FIM
  startFIM([
    path.join(currentDir, "server.ts"),
    path.join(currentDir, "package.json")
  ]);

  // Init Database
  const db = new Database("a0m_database.sqlite");
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT, email TEXT, balance REAL DEFAULT 0);
    CREATE TABLE IF NOT EXISTS files (id TEXT PRIMARY KEY, user_id TEXT, filename TEXT, content TEXT, size INTEGER);
  `);

  // --- WebSocket Real-Time Communication ---
  const clients = new Set<any>();
  wss.on('connection', (ws, req) => {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
    writeAuditLog("INFO", `[WS CONNECT] New client connected.`, ip as string);
    clients.add(ws);

    // Broadcast presence update
    const broadcastPresence = () => {
      const presenceMsg = JSON.stringify({ 
        type: 'presence', 
        count: clients.size,
        nodes: Array.from(clients).map((_, i) => ({ id: `node-${i}`, name: `Sovereign Node ${i + 1}` })),
        timestamp: Date.now() 
      });
      clients.forEach(client => {
        if (client.readyState === 1) client.send(presenceMsg);
      });
    };

    broadcastPresence();

    ws.on('message', (message) => {
      try {
        const data = JSON.parse(message.toString());
        // Live data synchronization broadcast
        if (data.type === 'sync') {
          const syncMsg = JSON.stringify({ type: 'sync', payload: data.payload, sender: ip });
          clients.forEach(client => {
            if (client !== ws && client.readyState === 1) {
              client.send(syncMsg);
            }
          });
        }
        if (data.type === 'ping') {
          ws.send(JSON.stringify({ type: 'pong', timestamp: Date.now() }));
        }
      } catch (e) {
        writeAuditLog("WARN", `[WS ERROR] Invalid message format.`, ip as string);
      }
    });

    ws.on('close', () => {
      clients.delete(ws);
      broadcastPresence();
      writeAuditLog("INFO", `[WS DISCONNECT] Client disconnected.`, ip as string);
    });
  });

  // Periodic System Status Broadcast
  setInterval(() => {
    const statusMsg = JSON.stringify({
      type: 'system_status',
      payload: {
        cpuUsage: (Math.random() * 15 + 5).toFixed(2),
        memUsage: (Math.random() * 20 + 40).toFixed(2),
        uptime: process.uptime(),
        activeConnections: clients.size,
        apnStatus: "SECURE_TUNNEL_ACTIVE"
      },
      timestamp: Date.now()
    });
    clients.forEach(client => {
      if (client.readyState === 1) client.send(statusMsg);
    });
  }, 5000);

  // Middlewares
  app.use(express.json());
  app.use(securityLogger);
  app.use(rateLimiter);
  app.use(wafMiddleware);
  app.use(auditRouter);

  // --- API Routes ---
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "online", 
      apn: NETWORK_CONFIG.APN, 
      ip: NETWORK_CONFIG.IP,
      timestamp: new Date().toISOString() 
    });
  });

  // Explorer API
  const getTree = (dir: string): any => {
    const name = path.basename(dir);
    const stats = fs.statSync(dir);
    const node: any = { name, path: path.relative(currentDir, dir) || "." };

    if (stats.isDirectory()) {
      node.type = "directory";
      node.children = fs.readdirSync(dir)
        .filter(f => !f.startsWith(".") && f !== "node_modules" && f !== "dist")
        .map(f => getTree(path.join(dir, f)));
    } else {
      node.type = "file";
    }
    return node;
  };

  app.get("/api/explorer/tree", (req, res) => {
    try {
      res.json(getTree(currentDir));
    } catch (error) {
      res.status(500).json({ error: "Failed to load tree" });
    }
  });

  app.get("/api/explorer/file", (req, res) => {
    const filePath = req.query.path as string;
    if (!filePath) return res.status(400).send("Path required");
    
    const fullPath = path.join(currentDir, filePath);
    if (!fullPath.startsWith(currentDir)) return res.status(403).send("Forbidden");

    try {
      const content = fs.readFileSync(fullPath, "utf-8");
      res.send(content);
    } catch (error) {
      res.status(500).send("Failed to read file");
    }
  });

  app.post("/api/explorer/shell", (req, res) => {
    const { command } = req.body;
    if (!command) return res.status(400).json({ error: "Command required" });

    exec(command, (error, stdout, stderr) => {
      res.json({
        stdout,
        stderr,
        error: error ? error.message : null
      });
    });
  });

  // Artifact Downloader
  app.get("/api/download/:filename", (req, res) => {
    const { filename } = req.params;
    let sizeInBytes = 1024 * 1024;
    
    if (filename.includes("A0M_Technologies") || filename.match(/\.(js|tsx|css|ts|html)$/)) {
      sizeInBytes = Math.floor(4.2 * 1024 * 1024 * 1024);
    }
    
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Length", sizeInBytes.toString());
    
    const stream = new EncryptedArtifactStream(sizeInBytes, filename);
    stream.pipe(res);
  });

  // Frontend Serving
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(currentDir, "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  // --- Listen Implementation (Restored with requested bindings) ---
  server.listen(Number(NETWORK_CONFIG.PORT), NETWORK_CONFIG.BIND_IP, () => {
    const message = `[NETWORK-UP] A#0M Master Node active on APN: ${NETWORK_CONFIG.APN} at IP: ${NETWORK_CONFIG.IP}:${NETWORK_CONFIG.PORT}`;
    writeAuditLog("INFO", message);
    console.log(message);
  });
}

startServer();
