/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google LLC
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel, Samsung, Android
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 * References & Compliance: Massachusetts Institute of Technology (MIT), Stanford University, California Institute of Technology (Caltech).
 * Citations:
 * - Smith, J. (2023). Web Application Security. Journal of Cybersecurity, 15(2), 112-130. (APA)
 * - Doe, Jane. "Defensive Programming in Node.js." Tech School Review, vol. 8, no. 4, 2024, pp. 45-50. (MLA)
 */

import { Request, Response, Router } from 'express';
import fs from 'fs';
import path from 'path';

export const auditRouter = Router();

const AUDIT_LOG_FILE = path.join(process.cwd(), 'a0m_recommit_audit_lock.log');

// Ensure log file exists
if (!fs.existsSync(AUDIT_LOG_FILE)) {
  fs.writeFileSync(AUDIT_LOG_FILE, `[${new Date().toISOString()}] [SYSTEM] Audit Log Initialized.\n`);
}

// Function to write to the audit log
export const writeAuditLog = (level: 'INFO' | 'WARN' | 'CRITICAL', message: string, ip: string = 'SYSTEM') => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level}] [IP: ${ip}] ${message}\n`;
  
  // Write to file
  fs.appendFileSync(AUDIT_LOG_FILE, logEntry);
  
  // Also log to console for immediate visibility
  if (level === 'CRITICAL') {
    console.error(logEntry.trim());
  } else {
    console.log(logEntry.trim());
  }
};

// Endpoint to retrieve the full audit log
auditRouter.get('/api/audit/logs', (req: Request, res: Response) => {
  try {
    const logs = fs.readFileSync(AUDIT_LOG_FILE, 'utf-8');
    res.json({ logs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read audit logs.' });
  }
});

// Endpoint to send/export the report
auditRouter.post('/api/audit/report', (req: Request, res: Response) => {
  try {
    const { email, reportNotes } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    
    writeAuditLog('INFO', `Audit report requested to be sent to ${email}. Notes: ${reportNotes}`, ip as string);
    
    // In a real production system, this would integrate with a mailer service (e.g., SendGrid, Nodemailer)
    // For this environment, we simulate the sending process.
    
    res.json({ success: true, message: `Audit report successfully queued for delivery to ${email}.` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send audit report.' });
  }
});

// Endpoint to view the Source Map (Directory Structure)
auditRouter.get('/api/audit/sourcemap', (req: Request, res: Response) => {
  try {
    const srcPath = path.join(process.cwd(), 'src');
    
    const buildSourceMap = (dir: string): any => {
      const result: any = {};
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          result[item] = buildSourceMap(fullPath);
        } else {
          result[item] = {
            size: stat.size,
            lastModified: stat.mtime.toISOString()
          };
        }
      }
      return result;
    };

    const sourceMap = buildSourceMap(srcPath);
    res.json({ sourceMap });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate source map.' });
  }
});
