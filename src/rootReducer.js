import { combineReducers } from "redux";

import counter from "./counter/reducer";
import contacts from "./contacts/reducer";

const rootReducer = combineReducers({
  counter,
  contacts
});

export default rootReducer;
