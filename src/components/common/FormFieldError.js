import React, { PropTypes } from 'react';

const FormFieldError = ({ error }) => (
    <div className="error-container" >
    <span className="form-item-error-text">
      {error}
    </span>
  </div>
);

const { array } = PropTypes;

FormFieldError.propTypes = {
  error: array,
};

export default FormFieldError;
