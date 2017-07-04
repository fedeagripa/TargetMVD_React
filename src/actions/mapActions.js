import * as types from './actionTypes';

export function setMyPosition(position) {
  return {
    type: types.SET_POSITION,
    position
  };
}
