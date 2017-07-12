import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as constraints from '../../utils/constraints';
import Input from '../common/Input';
import TextArea from '../common/TextArea';
import smilies from '../../assets/smilies.svg';

const ContactForm = ({ handleSubmit, error }) => (
  <div>
    <img src={smilies} className="smilies"/>
    <h4>Don't be shy, drop us a line!</h4>
    <form onSubmit={handleSubmit} >
      {error && <strong>{error}</strong>}
        <Field
          name="email"
          label="EMAIL *"
          component={Input}
          type="email"
        />
        <Field
          name="message"
          label="MESSAGE *"
          component={TextArea}
          type="text"
        />
        <button className="black-btn-large" type="submit">Send</button>
    </form>
  </div>
);

const { func, string } = PropTypes;

ContactForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'contact',
  validate: constraints.validations(constraints.contact)
})(ContactForm);
