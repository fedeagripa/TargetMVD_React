import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function mapReducer(state = initialState.map, action = {}) {
  switch (action.type) {
    case types.ADD_MARKER_SUCCESS: {
      const marker = action.value;
      let newMarkersArray = state.markers.slice();
      newMarkersArray.unshift(marker);
      return {
        markers: newMarkersArray
      };
    }
    default:
      return state;
  }
}
