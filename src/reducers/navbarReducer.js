import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function navbarReducer(state = initialState.navbar, action = {}) {
  switch (action.type) {
    case types.CHANGE_STEP: {
      return { ...state, step: state.step + 1 };
    }
    case types.CHANGE_EDITING: {
      return { ...state, editing: !state.editing };
    }
    case types.RETURN_TO_STEPS: {
      return state;
    }
    case types.CONTACT: {
      return state;
    }
    default:
      return state;
  }
}
