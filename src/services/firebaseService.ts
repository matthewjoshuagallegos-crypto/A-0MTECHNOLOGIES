/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import { auth, db } from '../A0M_CORE_V2026_FINAL_SECURED_FIREBASE';
import { LeaderboardEntry, UserProfile, Specialization } from '../A0M_CORE_V2026_FINAL_SECURED_TYPES';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc, 
  increment, 
  arrayUnion,
  getDoc, 
  setDoc,
  serverTimestamp,
  limit
} from 'firebase/firestore';

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function listenToCourierStream(callback: (msgs: any[]) => void) {
  const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(msgs);
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, 'messages');
  });
}

export async function dispatchCourierMessage(artisanId: string, artisanName: string, text: string, role: string) {
  try {
    await addDoc(collection(db, 'messages'), {
      userId: artisanId,
      userName: artisanName,
      text,
      role,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, 'messages');
  }
}

export async function recordWithdrawal(artisanId: string, amount: number, method: string, tag: string | undefined) {
  try {
    const userRef = doc(db, 'users', artisanId);
    const historyItem: any = {
      amount,
      method,
      timestamp: new Date().toISOString(),
      status: 'Completed',
    };
    if (tag) {
      if (method === 'Stripe') historyItem.stripeBank = tag;
      else historyItem.cashTag = tag;
    }

    await updateDoc(userRef, {
      earningsHistory: arrayUnion(historyItem),
      balance: increment(-amount),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, `users/${artisanId}`);
  }
}

export async function recordEarningsHistory(artisanId: string, amount: number, method: string, tag: string | undefined) {
  try {
    const userRef = doc(db, 'users', artisanId);
    await updateDoc(userRef, {
      earningsHistory: arrayUnion({
        amount,
        method,
        timestamp: new Date().toISOString(),
        status: 'Completed',
        cashTag: tag,
      }),
      totalEarnings: increment(amount),
      balance: increment(amount),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function updateCashTag(artisanId: string, cashTag: string) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { cashTag });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function updateChimeTag(artisanId: string, chimeTag: string) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { chimeTag });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function updateStripeBank(artisanId: string, stripeBank: string) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { stripeBank });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function updateConnections(artisanId: string, connections: any) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { connections });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function toggleGuildMonetization(artisanId: string, active: boolean) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { monetizationActive: active });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function updateTitheRecord(artisanId: string, tin: string, tinType: string) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { titheRecord: { tin, tinType, isCompleted: true, lastUpdated: new Date().toISOString() } });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function resetTitheRecord(artisanId: string) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { titheRecord: { isCompleted: false, lastUpdated: new Date().toISOString() } });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function updateUserProfile(artisanId: string, profile: any) {
  try {
    await updateDoc(doc(db, 'users', artisanId), profile);
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export async function transmitToBankingGateway(artisanId: string, amount: number, method: string, tag: string, guildTag: string | undefined) {
  try {
    const response = await fetch('/api/create-payout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, destination: tag }),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to process payout');
    }
    
    const data = await response.json();
    console.log('Payout processed:', data);
    return data;
  } catch (error) {
    console.error('Error transmitting to banking gateway:', error);
    throw error;
  }
}

export async function incrementTotalEarnings(artisanId: string, amount: number) {
  try {
    await updateDoc(doc(db, 'users', artisanId), { 
      totalEarnings: increment(amount),
      balance: increment(amount)
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, 'users');
  }
}

export function listenToLeaderboard(callback: (entries: LeaderboardEntry[]) => void) {
  const q = query(collection(db, 'leaderboard'), orderBy('score', 'desc'), limit(50));
  return onSnapshot(q, (snapshot) => {
    const entries = snapshot.docs.map(doc => ({ ...doc.data() } as LeaderboardEntry));
    callback(entries);
  }, (error) => {
    handleFirestoreError(error, OperationType.LIST, 'leaderboard');
  });
}

export async function updateLeaderboardScore(entry: Partial<LeaderboardEntry>) {
  if (!entry.uid) return;
  try {
    const leaderboardRef = doc(db, 'leaderboard', entry.uid);
    await setDoc(leaderboardRef, {
      ...entry,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'leaderboard');
  }
}
