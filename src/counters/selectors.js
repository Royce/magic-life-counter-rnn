import { createSelector } from 'reselect';

const getCounters = state => state.counters;

const getPlayer = (_s, player) => player;

export const getCounter = createSelector(
  getCounters,
  getPlayer,
  (counters, player) => {
    return counters[player];
  }
);
