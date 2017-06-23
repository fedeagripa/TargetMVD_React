import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import sessionApi from '../api/sessionApi';
import { sessionService } from 'redux-react-session';

export const signUp = (user) => {
  return () => {
    return sessionApi.signUp({ user }).then(response => {
      //Remove this to force go login
      const { token } = response;
      sessionService.saveSession({ token }).then(() => {
        const { image, name, userId, email } = response;
        sessionService.saveUser({ image, name, userId, email })
        .then(() => {
          browserHistory.push('/');
        });
      });
    }).catch(err => {
      throw new SubmissionError(err.errors);
    });
  };
};
