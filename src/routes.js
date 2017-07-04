import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { sessionService } from 'redux-react-session';
import { routes } from './constants/routesPaths';
import withContent from './containers/withContent';
import App from './components/App';
import ContactNav from './components/navbar/ContactNav'; // eslint-disable-line import/no-named-as-default
import EditUser from './components/navbar/EditUser'; // eslint-disable-line import/no-named-as-default
import LoginPage from './containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import Navbar from './components/navbar/NavBar';
import SignUpPage from './containers/SignUpPage';
import WhatsNav from './components/navbar/WhatsNav'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path={routes.index} component={App}>
    <IndexRoute onEnter={sessionService.checkAuth} component={LoginPage} />
    <Route path={routes.login} component={LoginPage} />
    <Route path={routes.signUp} component={SignUpPage} />
    <Route path={routes.edit} component={withContent(EditUser)} />
    <Route path={routes.home} component={withContent(Navbar)} />
    <Route path={routes.about} component={withContent(WhatsNav)} />
    <Route path={routes.contact} component={withContent(ContactNav)} />
  </Route>
);
