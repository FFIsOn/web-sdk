
import { createMachine, assign } from 'xstate';

export const machine = createMachine({
  id: 'game',
  initial: 'idle',
  states: {
    idle: {
      on: {
        SPIN: 'spin',
      },
    },
    spin: {
      on: {
        LAND: 'land',
      },
    },
    land: {
      on: {
        WIN: 'win',
        LOSE: 'idle',
      },
    },
    win: {
      on: {
        COLLECT: 'idle',
      },
    },
  },
});
