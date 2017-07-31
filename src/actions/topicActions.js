import topicApi from '../api/topicApi';
import * as types from './actionTypes';

export const getTopicList = (topics) => ({
  type: types.GET_TOPICS,
  topics
});

export const getTopics = () => (dispatch) => {
  return topicApi.topics().then(response => {
    dispatch(getTopicList(response.topics));
  }).catch( () => {
    console.log('No topics could be retrieved');
  });
};
