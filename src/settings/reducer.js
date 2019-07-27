import { PLAYER_ONE, PLAYER_TWO } from '../constants';
import { AVAILABLE_COLORS } from './constants';

const initialState = {
  [PLAYER_ONE]: AVAILABLE_COLORS[4],
  [PLAYER_TWO]: AVAILABLE_COLORS[9],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ONE:
    case PLAYER_TWO: {
      return { ...state, [action.type]: action.value };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
