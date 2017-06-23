import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import EditUser from './components/navbar/EditUser'; // eslint-disable-line import/no-named-as-default
import Navbar from './components/navbar/NavBar';
import { sessionService } from 'redux-react-session';
import withContent from './containers/withContent';
import LoginPage from './containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import LogOutPage from './containers/LogOutPage'; // eslint-disable-line import/no-named-as-default
import SignUpPage from './containers/SignUpPage';
import { routes } from './constants/routesPaths';

export default (
  <Route path={routes.index} component={App}>
    <IndexRoute onEnter={sessionService.checkAuth} component={LoginPage} />
    <Route path={routes.login} component={LoginPage} />
    <Route path={routes.logout} component={LogOutPage} />
    <Route path={routes.signUp} component={SignUpPage} />
    <Route path={routes.edit} component={withContent(EditUser)} />
    <Route path={routes.home} component={withContent(Navbar)} />
  </Route>
);
