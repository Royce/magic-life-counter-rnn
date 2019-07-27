export const PLAYER_ONE = 'player/one';
export const PLAYER_TWO = 'player/two';

export function otherPlayer(player) {
  return player === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
}
