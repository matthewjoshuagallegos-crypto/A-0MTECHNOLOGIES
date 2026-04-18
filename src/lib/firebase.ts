/**
 * A#0M Firebase Orchestrator
 * Copyright (c) 2026 Matthew Joshua Gallegos
 * Protocol: 512-Bit Encryption
 */

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("A#0M Firebase Segment: Engaged");
