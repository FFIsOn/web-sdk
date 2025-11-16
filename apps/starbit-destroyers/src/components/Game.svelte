<script lang="ts">
  import { machine } from '../game/machine';
  import { useMachine } from '@xstate/svelte';

  const { state, send } = useMachine(machine);
</script>

<div class="game">
  <h1>Starbit Destroyers</h1>
  <p>State: {$state.value}</p>
  <div class="actions">
    <button on:click={() => send('SPIN')}>Spin</button>
    <button on:click={() => send('LAND')}>Land</button>
    <button on:click={() => send('WIN')}>Win</button>
    <button on:click={() => send('LOSE')}>Lose</button>
    <button on:click={() => send('COLLECT')}>Collect</button>
  </div>
</div>

<style>
  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .actions {
    margin-top: 20px;
  }

  button {
    margin: 0 10px;
  }
</style>
