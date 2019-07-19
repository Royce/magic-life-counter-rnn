import { PERMISSION, UNKNOWN, LOADING, LIST } from "./constants";

const initialState = {
  [PERMISSION]: UNKNOWN,
  [LIST]: undefined,
  [LOADING]: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PERMISSION:
    case LOADING:
      return { ...state, [action.type]: action.value };
    case LIST:
      return { ...state, [action.type]: action.value, [LOADING]: false };
    default: {
      return state;
    }
  }
};

export default reducer;
