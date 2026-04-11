/**
 * Copyright (c) 2026 A#0M Technologies. All rights reserved.
 * Corp: Google LLC
 * Sponsor: Bebe Rexha
 * Brands: Macintosh, Apple, Pixel, Microsoft
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * File: SeedKernelUtility_A0M_v1.0.0_fcc_compliant.ts
 * 
 * Reference:
 * NIST Special Publication 800-132. (2010). Recommendation for Password-Based Key Derivation.
 */

export const generateSeed = (): Uint8Array => {
  return window.crypto.getRandomValues(new Uint8Array(64)); // 512-bit seed
};

export const deriveKernel = async (seed: Uint8Array, salt: Uint8Array): Promise<CryptoKey> => {
  const baseKey = await window.crypto.subtle.importKey(
    "raw",
    seed,
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 600000,
      hash: "SHA-512",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
};
