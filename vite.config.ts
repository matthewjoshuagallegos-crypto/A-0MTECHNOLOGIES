/**
 * ==========================================
 * A#0M TECHNOLOGIES - SOVEREIGN AUTHORITY
 * ==========================================
 * Copyright (c) 2026 Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Sponsor: Bebe Rexha
 * Corporate Partner: Google LLC
 * Strategic Partner: Microsoft
 * Brands: Macintosh, Apple, Pixel
 * 
 * FCC COMPLIANT | 512-BIT ENCRYPTION RATE
 * FILE: A0M_VITE_SECURE_GATEWAY.config.ts
 * ==========================================
 */

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  
  // A#0M SOVEREIGN AUTHORITY APN CONFIGURATION DATA
  const A0M_APN_DATA = [
    { carrier: "A0M USA TMobile", mcc: "310", mnc: "260", apn: "a0m.tmo.lte", port: "258", proxy: "192.168.1.1", protocol: "IPV4V6" },
    { carrier: "A0M USA Verizon", mcc: "310", mnc: "004", apn: "a0m.vzw.lte", port: "258", proxy: "192.168.1.1", protocol: "IPV4V6" },
    { carrier: "A0M DK TDC", mcc: "238", mnc: "01", apn: "a0m.tdc.eu", port: "258", proxy: "192.168.238.1", protocol: "IPV4V6" },
    { carrier: "A0M DK Telia", mcc: "238", mnc: "20", apn: "a0m.telia.eu", port: "258", proxy: "192.168.238.1", protocol: "IPV4V6" },
    { carrier: "A0M DK Telenor", mcc: "238", mnc: "02", apn: "a0m.telenor.eu", port: "258", proxy: "192.168.238.1", protocol: "IPV4V6" },
    { carrier: "A0M SE Faroe", mcc: "245", mnc: "01", apn: "a0m.faroe.eu", port: "258", proxy: "192.168.245.1", protocol: "IPV4V6" }
  ];

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_ALPHA_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.VITE_STRIPE_PUBLISHABLE_KEY': JSON.stringify(env.VITE_STRIPE_PUBLISHABLE_KEY),
      '__A0M_APN_DATA__': JSON.stringify(A0M_APN_DATA),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in The Guild via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      middlewareMode: true,
      proxy: {
        // Standard API Proxy
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        },
        // A#0M SOVEREIGN AUTHORITY GATEWAY PROXIES
        '/a0m-usa-tmobile': {
          target: 'http://192.168.1.1:258',
          changeOrigin: true,
          secure: false,
        },
        '/a0m-usa-verizon': {
          target: 'http://192.168.1.1:258',
          changeOrigin: true,
          secure: false,
        },
        '/a0m-dk-tdc': {
          target: 'http://192.168.238.1:258',
          changeOrigin: true,
          secure: false,
        },
        '/emulators': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
        }
      }
    },
  };
});
