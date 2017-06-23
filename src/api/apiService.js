import fetch from 'isomorphic-fetch';
import { sessionService } from 'redux-react-session';
import { browserHistory } from 'react-router';
import humps from 'humps';
import { routes } from '../constants/routesPaths';

const handleErrors = (response) =>
  new Promise((resolve, reject) => {
    if (!response) {
      reject({ message: 'No response returned from fetch' });
      return;
    }

    if (response.ok) {
      resolve(response);
      return;
    }

    sessionService.loadSession()
    .catch(() => {
      if (response.status === 401) {
        sessionService.deleteSession();
        browserHistory.replace(routes.login);
        return;
      }
    });

    response.json()
      .then(json => {
        const error = json || { message: response.statusText };
        reject(error);
      }).catch(() => reject({ message: 'Response not JSON' }));
  });

const getResponseBody = (response) => {
  const bodyIsEmpty = response.status === 204;
  if (bodyIsEmpty) {
    return Promise.resolve();
  }
  return response.json();
};

class Api {

  performRequest(uri, apiUrl, requestData = {}) {
    const url = `${apiUrl}${uri}`;
    return new Promise((resolve, reject) => {
      fetch(url, requestData)
        .then(handleErrors)
        .then(getResponseBody)
        .then(response => resolve(humps.camelizeKeys(response)))
        .catch(error => reject(humps.camelizeKeys(error)));
    });
  }

  addTokenHeader(requestData) {
    return sessionService.loadSession()
    .then(session => {
      const { token } = session;
      requestData.headers['X-USER-TOKEN'] = token;
      return requestData;
    }).catch(() => requestData);
  }

  get(uri, apiUrl = config.API_URL) {
    let requestData = {
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
    };
    return this.addTokenHeader(requestData)
    .then(data => {
      return this.performRequest(uri, apiUrl, data);
    });
  }

  post(uri, data, apiUrl = config.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    let requestData = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return this.addTokenHeader(requestData)
    .then(data => {
      return this.performRequest(uri, apiUrl, data);
    });
  }

  delete(uri, data, apiUrl = config.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    let requestData = {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return this.addTokenHeader(requestData)
    .then(data => {
      return this.performRequest(uri, apiUrl, data);
    });
  }

  put(uri, data, apiUrl = config.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    let requestData = {
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return this.addTokenHeader(requestData)
    .then(data => {
      return this.performRequest(uri, apiUrl, data);
    });
  }

  patch(uri, data, apiUrl = config.API_URL) {
    const decamelizeData = humps.decamelizeKeys(data);
    let requestData = {
      method: 'patch',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(decamelizeData)
    };
    return this.addTokenHeader(requestData)
    .then(data => {
      return this.performRequest(uri, apiUrl, data);
    });
  }
}

export default new Api();
