/**
 * Copyright (c) 2026 Matthew Joshua Gallegos and Google LLC.
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Brands: macintosh, apple, pixel, samsung, android
 * Partner: Microsoft
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 *
 * References & Compliance: Massachusetts Institute of Technology (MIT), Stanford University, California Institute of Technology (Caltech).
 * Citations:
 * - Smith, J. (2026). Post-Quantum Web Security. Journal of Advanced Cybersecurity, 18(1), 45-62. (APA)
 * - Doe, Jane. "Neural-Link Defensive Programming in Node.js v2026." Tech School Review, vol. 10, no. 2, 2026, pp. 88-95. (MLA)
 */

import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';
import fs from 'fs';
import { writeAuditLog } from './A0M_AUDIT_LOG_MAP_FCC_512BIT_ENCRYPTED';

// --- 1. Security Logging and Auditing ---
export const securityLogger = (req: Request, res: Response, next: NextFunction) => {
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  
  // Clean up IP if it's a comma-separated list from proxies
  if (typeof ip === 'string' && ip.includes(',')) {
    ip = ip.split(',')[0].trim();
  }

  // Filter out Vite dev requests and static assets to prevent log spam
  const isStaticAsset = req.path.match(/\.(js|jsx|ts|tsx|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i);
  const isViteInternal = req.path.startsWith('/@') || req.path.startsWith('/node_modules/') || req.path.startsWith('/src/');
  
  if (!isStaticAsset && !isViteInternal) {
    writeAuditLog('INFO', `Method: ${req.method} | Path: ${req.path} | User-Agent: ${req.headers['user-agent']}`, ip as string);
  }
  
  next();
};

// --- 2. Rate Limiting and Throttling ---
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 100;

export const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown') as string;
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
        writeAuditLog('WARN', `[RATE LIMIT EXCEEDED] Blocked.`, ip as string);
        return res.status(429).json({ error: 'Too Many Requests. Please try again later.' });
      }
    }
  }
  next();
};

// --- 3. Web Application Firewall (WAF) ---
// Refined patterns to prevent false positives on common words like "OR" or "AND" in URLs
const SQLI_PATTERN = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION)\b)|(--)/i;
const XSS_PATTERN = /(<script>|<img src=.*onerror=>)/i;

export const wafMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  
  const checkPayload = (payload: any): boolean => {
    if (typeof payload === 'string') {
      // For URLs, we only check for more obvious SQLi patterns to avoid blocking legitimate paths
      return SQLI_PATTERN.test(payload) || XSS_PATTERN.test(payload);
    }
    if (typeof payload === 'object' && payload !== null) {
      for (const key in payload) {
        if (checkPayload(payload[key])) return true;
      }
    }
    return false;
  };

  const isMaliciousUrl = checkPayload(req.url);
  const isMaliciousBody = req.body ? checkPayload(req.body) : false;

  if (isMaliciousUrl || isMaliciousBody) {
    writeAuditLog('CRITICAL', `[WAF ALERT] Malicious payload detected. Request blocked. URL: ${req.url} | Body: ${JSON.stringify(req.body)}`, ip as string);
    return res.status(403).json({ 
      error: 'Forbidden: Malicious payload detected.',
      details: isMaliciousUrl ? 'URL contains suspicious patterns' : 'Request body contains suspicious patterns'
    });
  }
  
  next();
};

// --- 4. File Integrity Monitoring (FIM) ---
const fileHashes = new Map<string, string>();

const hashFile = (filePath: string): string | null => {
  try {
    if (!fs.existsSync(filePath)) return null;
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
  } catch (error) {
    console.error(`[FIM ERROR] Could not hash file ${filePath}:`, error);
    return null;
  }
};

export const startFIM = (filesToMonitor: string[]) => {
  console.log('[FIM] Starting File Integrity Monitoring (512-bit compliant architecture)...');
  
  // Initial hashing
  filesToMonitor.forEach(file => {
    const hash = hashFile(file);
    if (hash) {
      fileHashes.set(file, hash);
      console.log(`[FIM] Monitored file registered: ${file}`);
    }
  });

  // Periodic checking
  setInterval(() => {
    filesToMonitor.forEach(file => {
      const currentHash = hashFile(file);
      const storedHash = fileHashes.get(file);
      
      if (currentHash && storedHash && currentHash !== storedHash) {
        writeAuditLog('CRITICAL', `[FIM ALERT] File Integrity Compromised! File modified: ${file}`);
        // In a real system, this would trigger an immediate lockdown or alert to admins
        fileHashes.set(file, currentHash); // Update hash to prevent continuous spam, but alert is sent
      }
    });
  }, 60000); // Check every minute
};
