import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as signUpActions from '../actions/signUpActions';
import SignUpForm from '../components/user/SignUpForm';
import HomeContent from './HomeContent';

const SignUpPage = ({ actions: { signUp } }) => (
  <div className="home-menu-open">
    <SignUpForm onSubmit={signUp}/>
    <HomeContent/>
  </div>
);

const { object } = PropTypes;

SignUpPage.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(signUpActions, dispatch)
  };
};

export default connect(null, mapDispatch)(SignUpPage);
