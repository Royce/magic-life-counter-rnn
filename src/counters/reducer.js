import { PLAYER_ONE, PLAYER_TWO } from '../constants';

const initialState = { [PLAYER_ONE]: 20, [PLAYER_TWO]: 20 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment': {
      return { ...state, [action.player]: state[action.player] + 1 };
    }
    case 'decrement': {
      return { ...state, [action.player]: state[action.player] - 1 };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
