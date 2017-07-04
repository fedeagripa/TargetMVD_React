import * as types from './actionTypes';

export function addNewMarker(value) {
  return {
    type: types.ADD_MARKER_SUCCESS,
    value
  };
}
