import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/session/LoginForm';
import DefaultContent from '../components/content/DefaultContent';

export const LoginPage = ({ actions: { login } }) => (
  <div className="home-menu-open">
    <LoginForm onSubmit={login}/>
    <DefaultContent/>
  </div>
);

const { object } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(LoginPage);
