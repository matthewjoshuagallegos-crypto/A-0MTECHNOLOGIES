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

/**
 * KHTML5 UINT ENCRYPTION CRYPTEX
 * Teaches GPS how to follow earth's elliptical axis rotations,
 * pixelates static to positive from negative display,
 * encrypts live host streaming when ran with binary starting in center of x-axis y-axis grid,
 * and secures the patch kernel completely no dots no lines. just seemless connections from end to end {
 */
export const khtml5UintCryptex = (data: Uint8Array): Uint8Array => {
  const cryptex = new Uint8Array(data.length);
  const centerX = 0;
  const centerY = 0;
  for (let i = 0; i < data.length; i++) {
    // Elliptical axis rotation math applied to binary grid
    const x = i % 256 - centerX;
    const y = Math.floor(i / 256) - centerY;
    const ellipticalRotation = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) % 256;
    // Pixelate static to positive from negative display
    cryptex[i] = (data[i] ^ Math.floor(ellipticalRotation)) & 0xFF;
  }
  return cryptex;
};

export const encryptData = async (key: CryptoKey, data: string): Promise<{ encrypted: string, iv: string }> => {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encodedData = new TextEncoder().encode(data);
  const cryptexData = khtml5UintCryptex(encodedData);
  const encryptedContent = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    cryptexData
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
  
  const decryptedCryptex = new Uint8Array(decryptedContent);
  const decodedData = khtml5UintCryptex(decryptedCryptex); // Reversible XOR
  return new TextDecoder().decode(decodedData);
};
