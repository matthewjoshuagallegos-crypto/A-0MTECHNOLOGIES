import React, { createContext, useContext, useState, useEffect } from 'react';
import { eventBus } from '../services/A0MEventBus.app';
import { kernelEngine } from '../services/A0MKernelEngine.app';

export type GameObj = { 
    id: number; 
    title: string; 
    type: string; 
    art: string; 
    downloaded: boolean; 
};

export type AppState = {
  tokens: number;
  library: GameObj[];
  migratedSources: string[];
  ide: {
    activeFile: string | null;
    content: string;
  };
  network: {
    apn: string;
    port: number;
    status: 'CONNECTED' | 'DISCONNECTED' | 'SYNCING';
    frequency: string;
    carrier: string;
    signalStrength: number;
    mcc: string;
    mnc: string;
  };
};

const defaultState: AppState = {
  tokens: 12450,
  library: [
    { id: 101, title: 'CYBER-STRIKE 2026', type: 'Cloud Save', art: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450', downloaded: true },
    { id: 102, title: 'NEON DRIFTER TV', type: 'Local Engine', art: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450', downloaded: false },
    { id: 201, title: 'PROJECT: SOVEREIGN', type: 'Installed', art: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800&h=450', downloaded: true },
    { id: 202, title: 'KERNEL WARS', type: 'Available', art: 'https://images.unsplash.com/photo-1614616235946-bdfca5cb6b36?auto=format&fit=crop&q=80&w=800&h=450', downloaded: false },
  ],
  migratedSources: [],
  ide: {
    activeFile: null,
    content: ''
  },
  network: {
    apn: 'A0M USA',
    port: 80,
    status: 'DISCONNECTED',
    frequency: '5.8GHz G',
    carrier: 'MetroPCSByT-Mobile',
    signalStrength: -85,
    mcc: '310',
    mnc: '260'
  }
};

const A0MContext = createContext<{
    state: AppState, 
    setState: React.Dispatch<React.SetStateAction<AppState>>, 
    isSaving: boolean,
    eventBus: typeof eventBus,
    kernelEngine: typeof kernelEngine
} | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AppState>(() => {
    try {
      const saved = localStorage.getItem('A0M_VAULT');
      if (!saved) return defaultState;
      const parsed = JSON.parse(saved);
      
      // Ensure basic structure exists
      if (!parsed || typeof parsed !== 'object') return defaultState;
      
      // Deep merge with defaultState to guarantee all required fields exist
      return {
        ...defaultState,
        ...parsed,
        library: Array.isArray(parsed.library) ? parsed.library : defaultState.library,
        ide: {
          ...defaultState.ide,
          ...(parsed.ide || {})
        },
        network: {
          ...defaultState.network,
          ...(parsed.network || {})
        }
      };
    } catch (e) {
      console.error("Vault Corruption detected, resetting to default", e);
      localStorage.removeItem('A0M_VAULT');
      return defaultState;
    }
  });
  
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Save to LocalStorage immediately for instant UI persistence
    localStorage.setItem('A0M_VAULT', JSON.stringify(state));
    
    // Debounced Hard-Save to physical disk to prevent I/O floor-capping
    const saver = setTimeout(() => {
      setIsSaving(true);
      fetch('/api/explorer/file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          path: 'com.a0m.vault_SECURE_KERNEL_A21S30i19GP13.json', 
          content: JSON.stringify(state, null, 2) 
        })
      }).then(() => {
        setIsSaving(false);
      }).catch(e => {
        console.error("Kernel Persistence Failure", e);
        setIsSaving(false);
      });
    }, 2000); // 2 second debounce

    return () => clearTimeout(saver);
  }, [state]);

  return (
    <A0MContext.Provider value={{ state, setState, isSaving, eventBus, kernelEngine }}>
        {children}
    </A0MContext.Provider>
  );
}

export const useA0M = () => {
  const ctx = useContext(A0MContext);
  if(!ctx) throw new Error("useA0M missing AppProvider");
  return ctx;
}
