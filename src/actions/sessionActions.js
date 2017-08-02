import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import { sessionService } from 'redux-react-session';
import sessionApi from '../api/sessionApi';
import { routes } from '../constants/routesPaths';

export const login = (user) => {
  return () => {
    return sessionApi.login({ user }).then(response => {
      saveUser(response);
    }).catch(err => {
      throw new SubmissionError({
        _error: err.error
      });
    });
  };
};

export const facebookLogin = (face_response) => {
  return () => {
    let user = { "type": "facebook", "fb_access_token": face_response.accessToken };
    return sessionApi.login(user).then(response => {
      saveUser(response);
    });
  };
};

export const logout = () => {
  return sessionApi.logout().then(() => {
    sessionService.deleteSession();
    sessionService.deleteUser();
    browserHistory.push(routes.login);
  }).catch(err => {
    throw (err);
  });
};

export const edit = (user, id) => {
  return () => {
    return sessionApi.edit(user, id).then( () => {
      browserHistory.push(routes.home);
    }).catch(err => {
      throw new SubmissionError({
        _error: err.error
      });
    });
  };
};

function saveUser(response) {
  const { token } = response;
  sessionService.saveSession({ token }).then(() => {
    const { image, name, userId, email } = response;
    sessionService.saveUser({ image, name, userId, email })
    .then(() => {
      browserHistory.push(routes.home);
    });
  });
}
