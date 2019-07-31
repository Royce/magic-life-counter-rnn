import { createSelector } from 'reselect';
import { numberAsStringWithExplicitSign } from '../components';

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
    const visibleItems =
      items.length > MAX_VISIBLE_HISTORY_ITEMS
        ? items.slice(items.length - MAX_VISIBLE_HISTORY_ITEMS)
        : items;
    return (
      (items.length > MAX_VISIBLE_HISTORY_ITEMS ? '... ' : '') +
      visibleItems.map(numberAsStringWithExplicitSign).join(', ')
    );
  }
);
