import { createSelector } from 'reselect';
import { START_PLAYER } from './constants';

const getStartingPlayer = state => state.startingPlayer;

export const get = createSelector(
  getStartingPlayer,
  all => {
    return all[START_PLAYER];
  }
);
