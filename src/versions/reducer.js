import {
  CODE_PUSH_STATUS,
  INSTALL_DATE,
  LAST_CHECK,
  APP_VERSION,
  PENDING_VERSION,
} from './constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CODE_PUSH_STATUS:
    case LAST_CHECK:
    case APP_VERSION:
    case PENDING_VERSION:
    case INSTALL_DATE: {
      return { ...state, [action.type]: action.value };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
