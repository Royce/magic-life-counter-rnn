import { combineReducers } from 'redux';

import counters from './counters/reducer';
import settings from './settings/reducer';
import startingPlayer from './startingPlayer/reducer';

const rootReducer = combineReducers({
  counters,
  settings,
  startingPlayer,
});

export default rootReducer;
