import { PLAYER_ONE, PLAYER_TWO } from '../constants';
import { START_PLAYER } from './constants';

export function roll() {
  const player = Math.random() > 0.5 ? PLAYER_ONE : PLAYER_TWO;
  return { type: START_PLAYER, value: player };
}
