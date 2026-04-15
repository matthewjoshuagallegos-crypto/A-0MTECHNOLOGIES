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

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Send, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { submitHighLevelQuery } from '../services/com.google.android.mac.samsung.fcc.compliant.512bit.encryption.AIReasoningService';

export const AIQueryInterface: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await submitHighLevelQuery(query);
      setResponse(result);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="bg-gradient-to-br from-accent/20 to-purple-600/20 border border-accent/30 rounded-3xl p-8 relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-accent/20 rounded-xl">
              <Brain className="text-accent" size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-display italic">High-Level Reasoning & Analysis</h2>
              <p className="text-text-muted">Submit queries for academic and educational analysis. Sources cited in APA & MLA format.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter your query for high-level analysis..."
              className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 focus:outline-none focus:border-accent resize-none font-mono text-sm"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="bg-accent text-black px-6 py-3 rounded-xl font-bold hover:shadow-[0_0_15px_rgba(157,78,221,0.4)] transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {isLoading ? 'Analyzing...' : 'Submit Query'}
              </button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200">
              {error}
            </div>
          )}

          {response && (
            <div className="mt-8">
              <h3 className="text-xl font-display italic mb-4 text-accent">Analysis Result</h3>
              <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="markdown-body prose prose-invert max-w-none">
                  <Markdown>{response}</Markdown>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
