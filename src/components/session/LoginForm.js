import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import Input from '../common/Input';
import FacebookButton from '../common/FacebookButton';
import * as constraints from '../../utils/constraints';
import { routes } from '../../constants/routesPaths';
import smilies from '../../assets/smilies.svg';
import '../../styles/layout.scss';
import '../../styles/session.scss';

const LoginForm = ({ handleSubmit, error }) => (
  <div className="myNav">
    <div className="full-div separate-div">
      <img src={smilies} className="smilies"/>
      <h3>TARGET MVD</h3>
      <form onSubmit={handleSubmit} className="form container-form">
        {error && <strong>{error}</strong>}
          <Field
            name="email"
            label="EMAIL"
            component={Input}
            type="email"
          />
          <Field
            name="password"
            label="PASSWORD"
            component={Input}
            type="password"
          />
          <button className="black-btn-large" type="submit">Submit</button>
        <div className="form-group">
          <a className="forgot-password"> Forgot your password? </a>
        </div>
      </form>
      <FacebookButton />
      <div className="line"/>
      <Link to={routes.signUp} className="SIGN-UP"> SIGN UP </Link>
    </div>
  </div>
);

const { func, string } = PropTypes;

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'login',
  validate: constraints.validations(constraints.login)
})(LoginForm);
