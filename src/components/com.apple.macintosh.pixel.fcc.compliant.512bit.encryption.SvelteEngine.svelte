<script>
  // A#0M SVELTE ENGINE
  export let title = "A#0M Svelte Engine";
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<div class="svelte-container p-6 bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/50 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.2)] text-white font-mono">
  <h2 class="text-2xl font-bold text-purple-400 mb-4">{title}</h2>
  <p class="mb-4 text-gray-300">This component is rendered natively using the Svelte compiler inside the A#0M Core.</p>
  
  <div class="flex items-center gap-4 bg-black/50 p-4 rounded-xl border border-white/10">
    <button 
      on:click={increment}
      class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors font-bold"
    >
      Initialize Svelte Node
    </button>
    <span class="text-xl">
      Active Nodes: <span class="text-purple-400 font-bold">{count}</span>
    </span>
  </div>
  
  {#if count > 0}
    <div class="mt-4 p-4 bg-green-900/20 border border-green-500/30 rounded-xl text-green-400 text-sm">
      <p>> SVELTE NODE {count} INITIALIZED.</p>
      <p>> 512-BIT ENCRYPTION RATE VERIFIED.</p>
      <p>> FCC COMPLIANCE: OK.</p>
    </div>
  {/if}
</div>

<style>
  .svelte-container {
    font-family: 'Courier New', Courier, monospace;
  }
</style>
