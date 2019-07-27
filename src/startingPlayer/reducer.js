import { START_PLAYER } from './constants';

const initialState = { [START_PLAYER]: undefined };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_PLAYER: {
      return { ...state, [START_PLAYER]: action.value };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
