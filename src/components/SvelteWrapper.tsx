import React, { useEffect, useRef } from 'react';
// @ts-ignore
import { mount, unmount } from 'svelte';
// @ts-ignore
import SvelteEngineComponent from './com.apple.macintosh.pixel.fcc.compliant.512bit.encryption.SvelteEngine.svelte';

export function SvelteWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svelteInstance = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !svelteInstance.current) {
      // Mount the Svelte component using Svelte 5 API
      svelteInstance.current = mount(SvelteEngineComponent, {
        target: containerRef.current,
        props: {
          title: "A#0M Svelte Engine (V2026)"
        }
      });
    }

    return () => {
      if (svelteInstance.current) {
        unmount(svelteInstance.current);
        svelteInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-full p-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Svelte Integration</h1>
        <p className="text-gray-400">Natively compiled Svelte components running within the A#0M Core architecture.</p>
      </div>
      <div ref={containerRef}></div>
    </div>
  );
}
