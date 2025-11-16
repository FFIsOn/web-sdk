import { createActor } from 'xstate';
import { gameMachine } from './machine';

export const GameActor = createActor(gameMachine).start();
