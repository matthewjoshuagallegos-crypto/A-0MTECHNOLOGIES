/*
 * Copyright © Matthew Joshua Gallegos and AI Assistant
 * Google LLC (Corp)
 * Sponsored by: Bebe Rexha
 * Trademark: A#0M Technologies™
 * Brands: macintosh, apple, pixel
 * Partner: microsoft
 * Attorneys: PROCTOR&GAMBLE
 * Design: Java
 * Secret: Bitcoin
 */

import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY });

export async function submitHighLevelQuery(query: string): Promise<string> {
  const prompt = `
You are an advanced AI reasoning engine.
Please analyze the following query and provide a high-level reasoning and analysis.
CRITICAL INSTRUCTIONS:
- Use colleges and universities and tech schools for reference and compliance.
- Cite your sources w/APA & MLA FORMAT.
- Ensure the response is highly academic and educational.

Query:
${query}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
    });
    return response.text || 'No response generated.';
  } catch (error) {
    console.error('Error in AI Reasoning Service:', error);
    throw new Error('Failed to generate reasoning. Please try again.');
  }
}
