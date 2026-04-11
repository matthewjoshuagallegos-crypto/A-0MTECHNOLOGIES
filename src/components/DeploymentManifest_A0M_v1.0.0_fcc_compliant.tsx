/**
 * Copyright (c) 2026 A#0M Technologies. All rights reserved.
 * Corp: Google LLC
 * Sponsor: Bebe Rexha
 * Brands: Macintosh, Apple, Pixel, Microsoft
 * Attorneys: Proctor & Gamble
 * Design: Java
 * Secret: Bitcoin
 * File: DeploymentManifest_A0M_v1.0.0_fcc_compliant.tsx
 */

import React from 'react';
import { DEPLOYMENT_MANIFEST } from '../A0M_CORE_V2026_FINAL_SECURED_CONSTANTS';
import { Download } from 'lucide-react';

export const DeploymentManifest: React.FC = () => {
  const downloadManifest = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(DEPLOYMENT_MANIFEST, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "deployment_manifest.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{DEPLOYMENT_MANIFEST.name}</h2>
      <div className="space-y-4">
        <p className="text-sm text-gray-600"><strong>ID:</strong> {DEPLOYMENT_MANIFEST.id}</p>
        <p className="text-sm text-gray-600"><strong>Version:</strong> {DEPLOYMENT_MANIFEST.version}</p>
        <p className="text-sm text-gray-600"><strong>Timestamp:</strong> {DEPLOYMENT_MANIFEST.timestamp}</p>
        
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Security</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            <li>Encryption: {DEPLOYMENT_MANIFEST.security.encryption}</li>
            <li>Integrity: {DEPLOYMENT_MANIFEST.security.integrity}</li>
            <li>Key Derivation: {DEPLOYMENT_MANIFEST.security.keyDerivation}</li>
            <li>Network: {DEPLOYMENT_MANIFEST.security.network}</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Artifacts</h3>
          {DEPLOYMENT_MANIFEST.artifacts.map((artifact, index) => (
            <div key={index} className="mb-2 p-2 bg-white rounded border border-gray-100">
              <p className="text-sm font-medium">{artifact.label} ({artifact.type})</p>
              <p className="text-xs text-gray-500">{artifact.file} - {artifact.size}</p>
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={downloadManifest}
        className="mt-6 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        <Download size={18} />
        Download Manifest JSON
      </button>
    </div>
  );
};
