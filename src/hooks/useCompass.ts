/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import { useState, useEffect } from 'react';

export function useCompass() {
  const [heading, setHeading] = useState<number>(0);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [permissionGranted, setPermissionGranted] = useState<boolean>(false);

  useEffect(() => {
    if (!window.DeviceOrientationEvent) {
      setIsSupported(false);
      return;
    }

    const handleOrientation = (event: any) => {
      let compassHeading = event.alpha;

      // iOS provides webkitCompassHeading for true north
      if (event.webkitCompassHeading !== undefined) {
        compassHeading = event.webkitCompassHeading;
      } else if (event.absolute === true && event.alpha !== null) {
        // Android absolute orientation
        compassHeading = 360 - event.alpha;
      } else if (event.alpha !== null) {
        // Fallback for relative alpha
        compassHeading = 360 - event.alpha;
      }

      if (compassHeading !== null) {
        setHeading(compassHeading);
      }
    };

    // For Android, we can use deviceorientationabsolute for true north
    if ('ondeviceorientationabsolute' in window) {
      (window as any).addEventListener('deviceorientationabsolute', handleOrientation);
    } else {
      (window as any).addEventListener('deviceorientation', handleOrientation);
    }

    return () => {
      if ('ondeviceorientationabsolute' in window) {
        (window as any).removeEventListener('deviceorientationabsolute', handleOrientation);
      } else {
        (window as any).removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, [permissionGranted]);

  const requestPermission = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permissionState = await (DeviceOrientationEvent as any).requestPermission();
        if (permissionState === 'granted') {
          setPermissionGranted(true);
        } else {
          console.warn('Compass permission denied');
        }
      } catch (error) {
        console.error('Error requesting compass permission:', error);
      }
    } else {
      // Non-iOS 13+ devices
      setPermissionGranted(true);
    }
  };

  return { heading, isSupported, permissionGranted, requestPermission };
}
