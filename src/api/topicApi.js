import api from './apiService.js';

class Topic {
  static topics() {
    return api.get('/topics/');
  }
}

export default Topic;
