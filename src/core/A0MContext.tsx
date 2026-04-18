import React, { createContext, useContext, useState, useEffect } from 'react';

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
};

const defaultState: AppState = {
  tokens: 12450,
  library: [
    { id: 101, title: 'CYBER-STRIKE 2026', type: 'Cloud Save', art: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=450', downloaded: true },
    { id: 102, title: 'NEON DRIFTER TV', type: 'Local Engine', art: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=450', downloaded: false },
    { id: 201, title: 'PROJECT: SOVEREIGN', type: 'Installed', art: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800&h=450', downloaded: true },
    { id: 202, title: 'KERNEL WARS', type: 'Available', art: 'https://images.unsplash.com/photo-1614616235946-bdfca5cb6b36?auto=format&fit=crop&q=80&w=800&h=450', downloaded: false },
  ],
  migratedSources: []
};

const A0MContext = createContext<{
    state: AppState, 
    setState: React.Dispatch<React.SetStateAction<AppState>>, 
    isSaving: boolean
} | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AppState>(() => {
    const saved = localStorage.getItem('A0M_VAULT');
    return saved ? JSON.parse(saved) : defaultState;
  });
  
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let mounted = true;
    setIsSaving(true);
    
    // Save to LocalStorage immediately for instant UI persistence
    localStorage.setItem('A0M_VAULT', JSON.stringify(state));
    
    // Push the state document up to the root server to hard-save to physical disk
    fetch('/api/explorer/file', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        path: 'A0M_STATE_VAULT.json', 
        content: JSON.stringify(state, null, 2) 
      })
    }).then(() => {
      setTimeout(() => { if(mounted) setIsSaving(false) }, 800);
    }).catch(e => {
       console.error("Kernel Save Error", e);
       if(mounted) setIsSaving(false);
    });

    return () => { mounted = false; };
  }, [state]);

  return (
    <A0MContext.Provider value={{ state, setState, isSaving }}>
        {children}
    </A0MContext.Provider>
  );
}

export const useA0M = () => {
  const ctx = useContext(A0MContext);
  if(!ctx) throw new Error("useA0M missing AppProvider");
  return ctx;
}
