/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: Bebe Rexha
 * TM: A#0M Technologies
 * Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL
 * ==========================================
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X, 
  Globe, 
  Cpu, 
  ShieldCheck,
  ChevronRight,
  Wifi
} from 'lucide-react';
import { listenToAPNProfiles, saveAPNProfile, deleteAPNProfile } from '../services/firebaseService';
import toast from 'react-hot-toast';

interface APNProfile {
  id?: string;
  name: string;
  apn: string;
  mcc: string;
  mnc: string;
  type?: string;
  protocol?: string;
  roamingProtocol?: string;
  port?: number;
  proxy?: string;
  gateway?: string;
  mmsc?: string;
  mmsProxy?: string;
  mmsPort?: number;
  bearer?: number;
  authType?: number;
  updatedAt?: string;
}

const APNProfileManager: React.FC = () => {
  const [profiles, setProfiles] = useState<APNProfile[]>([]);
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [editingProfile, setEditingProfile] = useState<APNProfile | null>(null);
  const [formData, setFormData] = useState<Partial<APNProfile>>({
    name: '',
    apn: '',
    mcc: '',
    mnc: '',
    type: 'default,supl',
    protocol: 'IPV4V6',
    roamingProtocol: 'IPV4V6',
    port: 1,
    proxy: '',
    gateway: '',
    mmsc: '',
    mmsProxy: '',
    mmsPort: 0,
    bearer: 14,
    authType: 0
  });

  useEffect(() => {
    const unsubscribe = listenToAPNProfiles((data) => {
      setProfiles(data);
    });
    return () => unsubscribe();
  }, []);

  const handleOpenEditor = (profile: APNProfile | null = null) => {
    if (profile) {
      setEditingProfile(profile);
      setFormData(profile);
    } else {
      setEditingProfile(null);
      setFormData({
        name: '',
        apn: '',
        mcc: '',
        mnc: '',
        type: 'default,supl',
        protocol: 'IPV4V6',
        roamingProtocol: 'IPV4V6',
        port: 1,
        proxy: '',
        gateway: '',
        mmsc: '',
        mmsProxy: '',
        mmsPort: 0,
        bearer: 14,
        authType: 0
      });
    }
    setView('edit');
  };

  const handleSave = async () => {
    if (!formData.name || !formData.apn || !formData.mcc || !formData.mnc) {
      toast.error('Required fields: Name, APN, MCC, MNC');
      return;
    }

    try {
      await saveAPNProfile(formData);
      toast.success(editingProfile ? 'Profile Updated' : 'Profile Created');
      setView('list');
    } catch (error) {
      toast.error('Failed to save profile');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this APN profile?')) {
      try {
        await deleteAPNProfile(id);
        toast.success('Profile Deleted');
      } catch (error) {
        toast.error('Failed to delete profile');
      }
    }
  };

  if (view === 'edit') {
    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView('list')}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-2xl font-display font-black italic tracking-tighter rainbow-text">
                {editingProfile ? 'EDIT APN PROFILE' : 'NEW APN PROFILE'}
              </h2>
              <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Carrier Configuration // FCC COMPLIANT</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setView('list')}
              className="px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-text-muted hover:text-white transition-all"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="gold-button !py-2 !px-8 !text-xs flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {editingProfile ? 'UPDATE PROFILE' : 'SAVE PROFILE'}
            </button>
          </div>
        </div>

        <div className="premium-card p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Profile Name *</label>
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
              placeholder="e.g. A#0M USA"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">APN Address *</label>
            <input 
              type="text"
              value={formData.apn}
              onChange={(e) => setFormData({...formData, apn: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
              placeholder="e.g. a#0m.lte.usa"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">MCC *</label>
            <input 
              type="text"
              value={formData.mcc}
              onChange={(e) => setFormData({...formData, mcc: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
              placeholder="310"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">MNC *</label>
            <input 
              type="text"
              value={formData.mnc}
              onChange={(e) => setFormData({...formData, mnc: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
              placeholder="410"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">APN Type</label>
            <input 
              type="text"
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Protocol</label>
            <select 
              value={formData.protocol}
              onChange={(e) => setFormData({...formData, protocol: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            >
              <option value="IPV4">IPV4</option>
              <option value="IPV6">IPV6</option>
              <option value="IPV4V6">IPV4/IPV6</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Proxy Address</label>
            <input 
              type="text"
              value={formData.proxy}
              onChange={(e) => setFormData({...formData, proxy: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Gateway</label>
            <input 
              type="text"
              value={formData.gateway}
              onChange={(e) => setFormData({...formData, gateway: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">MMSC</label>
            <input 
              type="text"
              value={formData.mmsc}
              onChange={(e) => setFormData({...formData, mmsc: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">MMS Proxy</label>
            <input 
              type="text"
              value={formData.mmsProxy}
              onChange={(e) => setFormData({...formData, mmsProxy: e.target.value})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">MMS Port</label>
            <input 
              type="number"
              value={formData.mmsPort}
              onChange={(e) => setFormData({...formData, mmsPort: parseInt(e.target.value) || 0})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Bearer</label>
            <input 
              type="number"
              value={formData.bearer}
              onChange={(e) => setFormData({...formData, bearer: parseInt(e.target.value) || 0})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Auth Type</label>
            <select 
              value={formData.authType}
              onChange={(e) => setFormData({...formData, authType: parseInt(e.target.value) || 0})}
              className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-accent/50 outline-none transition-all"
            >
              <option value={0}>None</option>
              <option value={1}>PAP</option>
              <option value={2}>CHAP</option>
              <option value={3}>PAP or CHAP</option>
            </select>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-black italic tracking-tighter rainbow-text">APN PROFILE MANAGER</h2>
          <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Sovereign Carrier Configuration // FCC COMPLIANT</p>
        </div>
        <button 
          onClick={() => handleOpenEditor()}
          className="gold-button !py-2 !px-4 !text-xs flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          ADD PROFILE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <motion.div 
            key={profile.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="premium-card p-6 group relative"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20">
                  <Wifi className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-tight">{profile.name}</h3>
                  <p className="text-[10px] font-mono text-accent uppercase">{profile.apn}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleOpenEditor(profile)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-all"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={() => profile.id && handleDelete(profile.id)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-text-muted hover:text-red-500 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                <p className="text-[9px] font-mono text-text-muted uppercase mb-1">MCC</p>
                <p className="text-sm font-bold text-white">{profile.mcc}</p>
              </div>
              <div className="bg-black/40 p-3 rounded-xl border border-white/5">
                <p className="text-[9px] font-mono text-text-muted uppercase mb-1">MNC</p>
                <p className="text-sm font-bold text-white">{profile.mnc}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-text-muted">
              <span className="uppercase">{profile.protocol}</span>
              <span className="uppercase">{profile.type?.split(',')[0]}</span>
            </div>
          </motion.div>
        ))}

        {profiles.length === 0 && (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-text-muted border-2 border-dashed border-white/5 rounded-3xl">
            <Globe className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-mono text-xs uppercase tracking-widest">No APN Profiles Found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default APNProfileManager;
