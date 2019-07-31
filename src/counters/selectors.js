import { createSelector } from 'reselect';

const getCounters = state => state.counters;

const getPlayer = (_s, player) => player;

export const getCurrent = createSelector(
  getCounters,
  getPlayer,
  (counters, player) => {
    return counters[player].current;
  }
);

export const getTemp = createSelector(
  getCounters,
  getPlayer,
  (counters, player) => {
    return counters[player].temp;
  }
);

export const getNextTotal = createSelector(
  getCurrent,
  getTemp,
  (current, temp) => {
    return current + temp;
  }
);

const MAX_VISIBLE_HISTORY_ITEMS = 5;
export const getHistoryString = createSelector(
  getCounters,
  getPlayer,
  (counters, player) => {
    const items = counters[player].history;
    return items.join(', ');
  }
);
