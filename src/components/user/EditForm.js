import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../common/Input';
import * as constraints from '../../utils/constraints';
import '../../styles/layout.scss';
import '../../styles/session.scss';

const EditForm = ({ handleSubmit }) => (
    <div>
      <form onSubmit={handleSubmit} className="form container-form">
          <Field
            name="email"
            label="EMAIL"
            component={Input}
            type="email"
          />
          <Field
            name="prev"
            label="CURRENT PASSWORD"
            placeholder="MIN. 6 CHARACTERS LONG"
            component={Input}
            type="password"
          />
          <Field
            name="password"
            label="NEW PASSWORD"
            component={Input}
            placeholder="MIN. 6 CHARACTERS LONG"
            className="password"
            type="password"
          />
          <Field
            name="confirmation"
            label="CONFIRM NEW PASSWORD"
            component={Input}
            type="password"
          />
          <button type="submit" className="black-btn-large">SAVE CHANGES</button>
      </form>
    </div>
);

const { func, string } = PropTypes;

EditForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string
};

export default reduxForm({
  form: 'editForm',
  validate: constraints.validations(constraints.edit)
})(EditForm);
