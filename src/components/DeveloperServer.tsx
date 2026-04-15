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
 */

import React, { useState, useEffect } from 'react';
import { Server, Activity, Database, HardDrive, Cpu, Network, RefreshCw, Terminal, FileText } from 'lucide-react';
import { motion } from 'motion/react';

export default function DeveloperServer() {
  const [serverStatus, setServerStatus] = useState<any>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [fileTree, setFileTree] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServerData = async () => {
    setIsLoading(true);
    try {
      // Fetch health/status
      const healthRes = await fetch('/api/health').catch(err => {
        console.error("Health fetch failed:", err);
        return null;
      });
      
      if (healthRes && healthRes.ok) {
        try {
          const healthData = await healthRes.json();
          setServerStatus(healthData);
        } catch (e) {
          console.error("Failed to parse health JSON:", e);
          setServerStatus({ status: 'error', message: 'Invalid JSON from health endpoint' });
        }
      } else {
        setServerStatus({ status: 'offline' });
      }

      // Fetch logs
      const logsRes = await fetch('/api/shell/logs').catch(() => null);
      if (logsRes && logsRes.ok) {
        try {
          const logsData = await logsRes.json();
          setLogs(logsData.logs || []);
        } catch (e) {
          console.error("Failed to parse logs JSON:", e);
        }
      }

      // Fetch file tree
      const treeRes = await fetch('/api/explorer/tree').catch(() => null);
      if (treeRes && treeRes.ok) {
        try {
          const treeData = await treeRes.json();
          setFileTree(treeData);
        } catch (e) {
          console.error("Failed to parse tree JSON:", e);
        }
      }
    } catch (error) {
      console.error("CRITICAL: Failed to fetch server data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServerData();
    const interval = setInterval(fetchServerData, 10000);
    return () => clearInterval(interval);
  }, []);

  const renderTree = (node: any, depth = 0) => {
    if (!node) return null;
    return (
      <div key={node.path || node.name} style={{ paddingLeft: `${depth * 12}px` }} className="py-1">
        <div className="flex items-center gap-2 text-sm">
          {node.type === 'directory' ? <HardDrive size={14} className="text-accent" /> : <FileText size={14} className="text-gray-400" />}
          <span className={node.type === 'directory' ? 'font-bold text-white' : 'text-gray-300'}>{node.name}</span>
          {node.size && <span className="text-xs text-gray-500 ml-auto">{(node.size / 1024).toFixed(1)} KB</span>}
        </div>
        {node.children && (
          <div className="mt-1 border-l border-white/10 ml-2">
            {node.children.map((child: any) => renderTree(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col space-y-6 p-6 overflow-y-auto custom-scrollbar">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
            <Server className="text-accent w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Developer Server</h2>
            <p className="text-text-muted">Full server monitoring and control</p>
          </div>
        </div>
        <button 
          onClick={fetchServerData}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          disabled={isLoading}
        >
          <RefreshCw className={`w-5 h-5 text-gray-400 ${isLoading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
          <Activity className={`w-8 h-8 mb-3 ${serverStatus?.status === 'ok' ? 'text-green-400' : 'text-red-400'}`} />
          <h3 className="text-lg font-bold text-white">Status</h3>
          <p className="text-sm text-gray-400 uppercase tracking-widest">{serverStatus?.status || 'Unknown'}</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
          <Cpu className="w-8 h-8 mb-3 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Environment</h3>
          <p className="text-sm text-gray-400 uppercase tracking-widest">Node.js / Express</p>
        </div>
        <div className="glass p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center">
          <Network className="w-8 h-8 mb-3 text-purple-400" />
          <h3 className="text-lg font-bold text-white">Port</h3>
          <p className="text-sm text-gray-400 uppercase tracking-widest">3000</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-[400px]">
        {/* Server Logs */}
        <div className="glass rounded-2xl border border-white/10 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-accent" />
            <h3 className="font-bold text-white text-sm">Server Logs</h3>
          </div>
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar bg-black/50 font-mono text-xs text-green-400 space-y-1">
            {logs.length === 0 ? (
              <p className="text-gray-500">No logs available...</p>
            ) : (
              logs.map((log, i) => (
                <div key={i} className="break-all">{log}</div>
              ))
            )}
          </div>
        </div>

        {/* File Explorer */}
        <div className="glass rounded-2xl border border-white/10 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-2">
            <Database className="w-4 h-4 text-accent" />
            <h3 className="font-bold text-white text-sm">File System</h3>
          </div>
          <div className="p-4 flex-1 overflow-y-auto custom-scrollbar bg-black/30">
            {fileTree ? renderTree(fileTree) : (
              <div className="flex items-center justify-center h-full text-gray-500">
                <RefreshCw className="w-5 h-5 animate-spin mr-2" /> Loading file tree...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
