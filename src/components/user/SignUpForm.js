import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { sex_options } from '../../constants/constants';
import { routes } from '../../constants/routesPaths';
import AutoSelect from '../common/AutoSelect';
import Input from '../common/Input';
import * as constraints from '../../utils/constraints';
import smilies from '../../assets/smilies.svg';
import 'react-select/dist/react-select.css';
import '../../styles/layout.scss';
import '../../styles/session.scss';

const SignUpForm = ({ handleSubmit }) => (
  <div className="myNav">
    <div>
      <img src={smilies} className="smilies"/>
      <form onSubmit={handleSubmit} className="form container-form">
          <h3>SIGN UP</h3>
          <Field
            name="name"
            label="NAME"
            component={Input}
            type="text"
          />
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
          <Field
            name="passwordConfirmation"
            label="CONFIRM PASSWORD"
            component={Input}
            type="password"
          />
          <Field
            name="gender"
            options={sex_options}
            component={AutoSelect}
            label="GENDER"
            className="mySelect"
          />
          <button type="submit" className="black-btn-large">SIGN UP</button>
      </form>
      <div className="line"/>
      <Link to={routes.login} className="SIGN-UP"> SIGN IN </Link>
    </div>
  </div>
);

const { func, string } = PropTypes;

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'signUp',
  validate: constraints.validations(constraints.signUp)
})(SignUpForm);
