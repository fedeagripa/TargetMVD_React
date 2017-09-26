import api from './apiService.js';

class Session {
  static login(user) {
    return api.post(`/users/sign_in`, user);
  }

  static logout() {
    return api.delete(`/users/sign_out`);
  }

  static signUp(user) {
    return api.post(`/users`, user);
  }

  static editPassword(user, id) {
    return api.put(`/users/${id}/password/change`, { user });
  }

  static edit(user, id) {
    return api.put(`/users/${id}`, { user });
  }
}

export default Session;
