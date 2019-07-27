import { combineReducers } from 'redux';

import counters from './counters/reducer';
import settings from './settings/reducer';

const rootReducer = combineReducers({
  counters,
  settings,
});

export default rootReducer;
