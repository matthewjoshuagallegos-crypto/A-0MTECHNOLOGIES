/**
 * A#0M HYPER-STABLE SERVER KERNEL - v2026.B
 * Author: Matthew Joshua Gallegos
 * NO EXTERNAL DEPENDENCIES (Built-in Node.js Only)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] REQUEST: ${req.url}`);

    // High-Fidelity Static Asset Delivery Logic
    let filePath = '.';
    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(process.cwd(), 'index.html');
    } else {
        // Try serving from root first (simulated dev mode)
        filePath = path.join(process.cwd(), req.url.split('?')[0]);
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Route: A#0M AUTHORITY HANDSHAKES (Built-in Fallbacks)
    if (req.url.startsWith('/api/sovereign/convert')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ 
            success: "A#0M SOVEREIGN BYPASS: Node Native Handshake Successful.",
            status: "STANDBY",
            kernel: "BUILT-IN_STABLE"
        }));
    }

    if (req.url.startsWith('/api/kernel/logs')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ logs: ["KERNEL: NATIVE_STABLE_MODE_ACTIVE"] }));
    }

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code == 'ENOENT') {
                // If not found, try serving dist/index.html as a fallback for SPA
                fs.readFile(path.join(process.cwd(), 'dist', 'index.html'), (err, distContent) => {
                   if (err) {
                       res.writeHead(404);
                       res.end('A#0M_KERNEL_ERROR: FILE_NOT_FOUND (ERR_404)');
                   } else {
                       res.writeHead(200, { 'Content-Type': 'text/html' });
                       res.end(distContent, 'utf-8');
                   }
                });
            } else {
                res.writeHead(500);
                res.end(`A#0M_KERNEL_ERROR: SERVER_FAULT (${error.code})`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`A#0M PREVIEW-STABLE ENGINE LIVE - http://localhost:${PORT}`);
    console.log("Kernel Status: NO-DEPENDENCY SAFE MODE ENABLED");
});
