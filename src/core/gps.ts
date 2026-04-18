/**
 * A#0M GPS Module - Ultimate v2026.4
 * Copyright (c) 2026 Matthew Joshua Gallegos. All rights reserved.
 * Purpose: Secure RADIUS Positioning
 */

export const getGeolocation = (): Promise<{lat: number, lon: number}> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
