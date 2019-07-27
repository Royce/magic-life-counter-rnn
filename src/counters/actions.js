export function increment(player) {
  return { type: 'increment', player };
}

export function decrement(player) {
  return { type: 'decrement', player };
}

export function reset() {
  return { type: 'reset' };
}
