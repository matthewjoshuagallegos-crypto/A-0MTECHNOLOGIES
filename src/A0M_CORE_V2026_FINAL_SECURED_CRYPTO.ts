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

export const generateKey = async () => {
  return await window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  );
};

export const encryptData = async (key: CryptoKey, data: string): Promise<{ encrypted: string, iv: string }> => {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encodedData = new TextEncoder().encode(data);
  const encryptedContent = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encodedData
  );
  
  // Convert ArrayBuffer to base64
  const encryptedArray = Array.from(new Uint8Array(encryptedContent));
  const encryptedBase64 = btoa(String.fromCharCode.apply(null, encryptedArray as any));
  const ivBase64 = btoa(String.fromCharCode.apply(null, Array.from(iv) as any));
  
  return { encrypted: encryptedBase64, iv: ivBase64 };
};

export const decryptData = async (key: CryptoKey, encryptedBase64: string, ivBase64: string): Promise<string> => {
  const encryptedArray = new Uint8Array(atob(encryptedBase64).split("").map(c => c.charCodeAt(0)));
  const iv = new Uint8Array(atob(ivBase64).split("").map(c => c.charCodeAt(0)));
  
  const decryptedContent = await window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encryptedArray
  );
  
  return new TextDecoder().decode(decryptedContent);
};
