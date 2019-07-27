import { combineReducers } from 'redux';

import counter from './counter/reducer';
import settings from './settings/reducer';

const rootReducer = combineReducers({
  counter,
  settings,
});

export default rootReducer;
