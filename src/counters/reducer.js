import { PLAYER_ONE, PLAYER_TWO } from '../constants';
import { INCREMENT, DECREMENT, COMMIT, RESET } from './constants';

const initialState = {
  [PLAYER_ONE]: { current: 20, temp: 0, history: [] },
  [PLAYER_TWO]: { current: 20, temp: 0, history: [] },
};

const increment = ({ current, temp, history }) => ({
  current,
  temp: temp + 1,
  history,
});

const decrement = ({ current, temp, history }) => ({
  current,
  temp: temp - 1,
  history,
});

const commit = ({ current, temp, history }) => ({
  current: current + temp,
  temp: 0,
  history: temp === 0 ? history : [...history, temp],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, [action.player]: increment(state[action.player]) };
    }
    case DECREMENT: {
      return { ...state, [action.player]: decrement(state[action.player]) };
    }
    case COMMIT: {
      return {
        ...state,
        [PLAYER_ONE]: commit(state[PLAYER_ONE]),
        [PLAYER_TWO]: commit(state[PLAYER_TWO]),
      };
    }
    case RESET: {
      return { ...state, ...initialState };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
