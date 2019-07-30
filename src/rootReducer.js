import { combineReducers } from 'redux';

import counters from './counters/reducer';
import settings from './settings/reducer';
import startingPlayer from './startingPlayer/reducer';
import versions from './versions/reducer';

const rootReducer = combineReducers({
  counters,
  settings,
  startingPlayer,
  versions,
});

export default rootReducer;
