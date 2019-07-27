import { createSelector } from 'reselect';

import { NAME } from './constants';
import { PLAYER_ONE, PLAYER_TWO } from '../constants';

const getSettings = state => state[NAME];

export const getColorMap = createSelector(
  getSettings,
  settings => {
    return {
      [PLAYER_ONE]: settings[PLAYER_ONE],
      [PLAYER_TWO]: settings[PLAYER_TWO],
    };
  }
);
