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


// --- RADIUS EQUATION ---
const _radiusPromise = new Promise<{ radius: number; formula: string }>((resolve) => {
  const x = 42; // Example vertical intercept
  const y = 24; // Example horizontal intercept
  const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  resolve({ radius, formula: `r = sqrt(${x}² + ${y}²)` });
});
void _radiusPromise;
// -----------------------

import React from 'react';
import { UserProfile } from '../A0M_CORE_V2026_FINAL_SECURED_TYPES';

interface Form1099NECProps {
  userProfile: UserProfile | null;
}

export const Form1099NEC: React.FC<Form1099NECProps> = ({ userProfile }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-white text-black p-8 font-serif max-w-4xl mx-auto border-2 border-black shadow-2xl overflow-auto max-h-[80vh]">
      {/* Header */}
      <div className="flex justify-between border-b-2 border-black pb-4 mb-4">
        <div className="w-1/3 border-r-2 border-black pr-4">
          <p className="text-[10px] font-bold uppercase">Transmitter's name, street address, city or town, state or province, country, zip or foreign postal code, and telephone no.</p>
          <div className="mt-2 text-sm font-sans">
            <p className="font-bold">Wireless Network of the Grand Signal</p>
            <p>456 Signal Tower Street</p>
            <p>Grand Signal, District 1</p>
            <p>(555) 012-3456</p>
          </div>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center border-r-2 border-black">
          <p className="text-2xl font-bold">Wireless Signal Form</p>
          <p className="text-[10px] uppercase text-center">Wireless Signal<br />Compensation</p>
        </div>
        <div className="w-1/3 pl-4 flex flex-col justify-between">
          <div className="text-right">
            <p className="text-xs font-bold">Wireless No. 1545-0116</p>
            <p className="text-4xl font-bold mt-2">2025</p>
          </div>
          <p className="text-[10px] font-bold uppercase text-right mt-4">Signal Form</p>
        </div>
      </div>

      {/* TIN Section */}
      <div className="grid grid-cols-2 border-b-2 border-black mb-4">
        <div className="border-r-2 border-black p-2">
          <p className="text-[8px] font-bold uppercase">Network's Wireless ID</p>
          <p className="text-sm font-sans">XX-XXXXXXX</p>
        </div>
        <div className="p-2">
          <p className="text-[8px] font-bold uppercase">Receiver's Wireless ID</p>
          <p className="text-sm font-sans">
            {userProfile?.titheRecord?.isCompleted 
              ? `***-**-${userProfile.titheRecord.tin?.slice(-4)}` 
              : 'PENDING'}
          </p>
        </div>
      </div>

      {/* Recipient Info */}
      <div className="grid grid-cols-2 border-b-2 border-black mb-4 h-32">
        <div className="border-r-2 border-black p-2 flex flex-col">
          <p className="text-[8px] font-bold uppercase">Receiver's name</p>
          <p className="text-sm font-sans font-bold">{userProfile?.artisanName || 'Receiver Name'}</p>
          <div className="mt-auto">
            <p className="text-[8px] font-bold uppercase">Signal address (including node no.)</p>
            <p className="text-sm font-sans italic text-gray-400">[Address on file]</p>
          </div>
        </div>
        <div className="p-2 flex flex-col">
          <div className="grid grid-cols-1 gap-4">
            <div className="border-b border-black pb-1">
              <p className="text-[8px] font-bold uppercase">1 Wireless signal compensation</p>
              <p className="text-lg font-sans font-bold text-right">
                ${userProfile?.totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="border-b border-black pb-1">
              <p className="text-[8px] font-bold uppercase">4 Wireless signal withheld</p>
              <p className="text-lg font-sans font-bold text-right">$0.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="grid grid-cols-2 mb-4">
        <div className="p-2">
          <p className="text-[8px] font-bold uppercase">City or town, state or province, country, and ZIP or foreign postal code</p>
          <p className="text-sm font-sans italic text-gray-400">[City, State, ZIP]</p>
        </div>
        <div className="p-2 border-l-2 border-black">
          <p className="text-[8px] font-bold uppercase">Ledger number (see instructions)</p>
          <p className="text-sm font-sans">{userProfile?.artisanId.slice(0, 12)}</p>
        </div>
      </div>

      <div className="bg-gray-100 p-4 text-[9px] leading-tight border-t-2 border-black">
        <p className="font-bold mb-1">CORRECTED (if checked)</p>
        <p>This is important signal information and is being furnished to the Wireless Council. If you are required to file a return, a negligence penalty or other sanction may be imposed on you if this income is taxable and the Wireless Council determines that it has not been reported.</p>
        <p className="mt-2 font-mono text-[7px] uppercase">
          LICENSE: © APACHE 2036 // ISBN: 61 1C 5E 93 A7 6F 10 C2 23 62 39 34 33 31 34 32 63 31 31 65 39 30 38 35 65 0A 1C 00 // START: 07/06/2026 4:30A.M.
        </p>
        <p className="mt-1 font-mono text-[6px] uppercase opacity-70">
          OWNER: M.J. GALLEGOS // PUB: BEBE REXA // ED: S. LOPEZ // LEGAL: DOLBY MEDIA COPYRIGHT AMENDMENT OF 1954
        </p>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <p className="text-[10px] font-bold">Copy B For Receiver</p>
        <div className="text-right">
          <p className="text-[10px]">Wireless Treasury - Wireless Council</p>
        </div>
      </div>
    </div>
  );
};
