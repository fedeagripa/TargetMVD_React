import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function topicReducer(state = initialState.topics, action) {
  switch (action.type) {
    case types.GET_TOPICS: {
      const topics = action.topics;
      return { state, values: topics };
    }
    default:
      return state;
  }
}
