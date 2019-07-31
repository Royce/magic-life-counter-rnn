import { INCREMENT, DECREMENT, COMMIT, RESET } from './constants';

export function increment(player) {
  return async function(dispatch, getState) {
    dispatch({ type: INCREMENT, player });
    _resetTimout(() => dispatch(commit()));
  };
}

export function decrement(player) {
  return async function(dispatch, getState) {
    dispatch({ type: DECREMENT, player });
    _resetTimout(() => dispatch(commit()));
  };
}

function commit() {
  return { type: COMMIT };
}

export function reset() {
  _clearTimeout();
  return { type: RESET };
}

var _timer;
function _resetTimout(cb) {
  clearTimeout(_timer);
  _timer = setTimeout(cb, 2000);
}
function _clearTimeout() {
  clearTimeout(_timer);
}
