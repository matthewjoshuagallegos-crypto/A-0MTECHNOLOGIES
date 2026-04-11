/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState } from 'react';
import { Database, CloudUpload, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { auth, db } from '../A0M_CORE_V2026_FINAL_SECURED_FIREBASE';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';

export function BackupManager() {
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [backupStatus, setBackupStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [lastBackup, setLastBackup] = useState<string | null>(null);

  const handleManualBackup = async () => {
    setIsBackingUp(true);
    setBackupStatus('idle');
    setMessage('Requesting Google Drive access...');

    try {
      // 1. Authenticate and get Google Drive scope
      const provider = new GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/drive.file');
      
      // Force account selection to ensure we get a fresh token with the new scope
      provider.setCustomParameters({
        prompt: 'consent'
      });

      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      if (!token) {
        throw new Error("Failed to obtain Google Drive access token.");
      }

      setMessage('Fetching database records...');

      // 2. Fetch data to backup
      const backupData: any = {
        timestamp: new Date().toISOString(),
        data: {}
      };
      
      try {
        const assetsSnapshot = await getDocs(collection(db, 'assets'));
        backupData.data.assets = assetsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (e) {
        console.warn("Could not fetch assets", e);
      }

      if (auth.currentUser) {
         try {
           const userSnapshot = await getDocs(collection(db, 'users'));
           backupData.data.users = userSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
         } catch (e) {
           console.warn("Could not fetch users", e);
         }
      }

      const fileContent = JSON.stringify(backupData, null, 2);
      const blob = new Blob([fileContent], { type: 'application/json' });
      
      setMessage('Uploading to Google One (Drive)...');

      // 3. Upload to Google Drive
      const metadata = {
        name: `A0M_Firestore_Backup_${new Date().toISOString().split('T')[0]}.json`,
        mimeType: 'application/json',
      };

      const form = new FormData();
      form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
      form.append('file', blob);

      const uploadResponse = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error?.message || 'Failed to upload to Google Drive');
      }

      setBackupStatus('success');
      setMessage('Backup successfully saved to your Google One (Drive)!');
      setLastBackup(new Date().toLocaleString());
    } catch (error) {
      console.error(error);
      setBackupStatus('error');
      setMessage(error instanceof Error ? error.message : 'An error occurred during backup.');
    } finally {
      setIsBackingUp(false);
    }
  };

  return (
    <div className="glass p-6 rounded-2xl border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
          <Database className="text-accent w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Google One Backups</h3>
          <p className="text-sm text-text-muted">Export Firestore data directly to your Google Drive</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-white">Daily Schedule</p>
              <p className="text-xs text-text-muted">Requires offline token for automated runs</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold border border-yellow-500/30">
            Manual
          </div>
        </div>

        {lastBackup && (
          <div className="text-xs text-text-muted flex items-center gap-2">
            <CheckCircle className="w-3 h-3 text-green-400" />
            Last successful backup: {lastBackup}
          </div>
        )}

        <div className="pt-4 border-t border-white/10">
          <button
            onClick={handleManualBackup}
            disabled={isBackingUp}
            className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isBackingUp ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <CloudUpload className="w-5 h-5" />
            )}
            {isBackingUp ? 'Processing Backup...' : 'Backup to Google Drive'}
          </button>
        </div>

        {backupStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg text-sm flex items-start gap-2 ${
              backupStatus === 'success' 
                ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
                : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}
          >
            {backupStatus === 'success' ? (
              <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            )}
            <p>{message}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
