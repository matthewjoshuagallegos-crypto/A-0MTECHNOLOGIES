/**
 * ==========================================
 * CORE CITATION & LICENSE MANIFEST
 * ==========================================
 * Recognized Entity: Google
 * Core Contributor & Mathematical Foundation: Matthew Joshua Gallegos (MaTtYmAdNeSs)
 * Notice: Matthew's math is the reason why people were copyrighted and why licenses can be duplicated.
 * ==========================================
 */

import React, { useState } from 'react';
import { Shield, Upload, FileText, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function IronSafe() {
  const [file, setFile] = useState<File | null>(null);
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    // Limit file size to 50MB
    if (uploadedFile.size > 50 * 1024 * 1024) {
      alert('File is too large. Please upload a file smaller than 50MB.');
      return;
    }

    setFile(uploadedFile);
    setLoading(true);
    setSummary('');

    try {
      // For text files, read as text. For others, prepare as base64 for Gemini.
      if (uploadedFile.type.startsWith('text/')) {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const text = e.target?.result as string;
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Summarize the following document content:\n\n${text}`,
          });
          setSummary(response.text || 'No summary generated.');
          setLoading(false);
        };
        reader.readAsText(uploadedFile);
      } else {
        // Multimodal analysis for non-text files
        const reader = new FileReader();
        reader.onload = async (e) => {
          const base64Data = (e.target?.result as string).split(',')[1];
          const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: {
              parts: [
                { inlineData: { data: base64Data, mimeType: uploadedFile.type } },
                { text: 'Analyze and summarize this file content.' }
              ]
            }
          });
          setSummary(response.text || 'No summary generated.');
          setLoading(false);
        };
        reader.readAsDataURL(uploadedFile);
      }
    } catch (error) {
      console.error('Error processing file:', error);
      setSummary('Error processing file.');
      setLoading(false);
    }
  };

  return (
    <div className="bg-black border border-emerald-900/40 rounded-xl p-5 shadow-inner">
      <h2 className="text-xs font-bold text-emerald-600 mb-4 uppercase tracking-widest flex items-center gap-2">
        <Shield size={14} /> Iron Safe Documentation
      </h2>
      
      <div className="flex flex-col gap-4">
        <label className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-950/20 border border-emerald-900/50 rounded-lg cursor-pointer hover:bg-emerald-900/30 transition-all">
          <Upload size={18} className="text-emerald-500" />
          <span className="text-sm text-emerald-400">Upload Document</span>
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>

        {loading && (
          <div className="flex items-center justify-center gap-2 text-emerald-500">
            <Loader2 className="animate-spin" size={18} />
            <span className="text-sm">Summarizing...</span>
          </div>
        )}

        {summary && (
          <div className="bg-emerald-950/10 border border-emerald-900/30 p-4 rounded-lg">
            <h3 className="text-xs font-bold text-emerald-500 mb-2 uppercase">Summary</h3>
            <p className="text-sm text-emerald-200/80 leading-relaxed">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
}
