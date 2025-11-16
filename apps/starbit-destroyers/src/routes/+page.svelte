<script lang="ts">
  import { games } from 'math-sdk';
  import type { SpinResult } from 'math-sdk';

  const game = games['starbit-destroyers'];

  let spinResult: SpinResult | null = null;

  function handleSpin() {
    spinResult = game.spin();
  }
</script>

<h1>{game.config.name}</h1>

<button on:click={handleSpin}>Spin</button>

{#if spinResult}
  <h2>Spin Result</h2>
  <p>Payout: {spinResult.payout}</p>
  <div class="grid">
    {#each spinResult.grid as reel}
      <div class="reel">
        {#each reel as symbol}
          <div class="symbol">{symbol}</div>
        {/each}
      </div>
    {/each}
  </div>
{/if}

<style>
  .grid {
    display: flex;
  }
  .reel {
    margin-right: 1rem;
  }
  .symbol {
    padding: 0.5rem;
    border: 1px solid #ccc;
    margin-bottom: 0.5rem;
  }
</style>
