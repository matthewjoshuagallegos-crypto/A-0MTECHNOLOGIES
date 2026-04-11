/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Owner: Matthew Joshua Gallegos (04/27/1990) [525-87-1108]
 * Sponsor: BeBe Rexa
 * TM: A#0M Technologies
 * Brands: Macintosh, Apple, Pixel, Microsoft
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * License: PROPRIETARY & CONFIDENTIAL - Matthew Joshua Gallegos (Sole Proprietor of A#0M Technologies, No Custodian)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */


// --- RADIUS EQUATION ---
// -----------------------

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './A0M_CORE_V2026_FINAL_SECURED_APP.tsx';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './lib/ThemeContext';
import { Toaster } from 'react-hot-toast';
import A0M_KEYCHAIN_LOGIN from './components/A0M_KEYCHAIN_LOGIN';

// Initialize MOCCANET custom scripts
// injectSystemViewport();
// forceAiStudioOverride();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider appContent={
      <ErrorBoundary appContent={
        <>
          <Toaster position="top-center" toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }} />
          <A0M_KEYCHAIN_LOGIN>
            <App />
          </A0M_KEYCHAIN_LOGIN>
        </>
      } />
    } />
  </StrictMode>,
);
