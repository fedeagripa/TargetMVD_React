import React, { PropTypes } from 'react';
import '../../styles/commons.scss';

const TextArea = ({ input, label, type, placeholder, meta: { touched, error } }) => (
  <div className="form-group">
    {label && <label>{label}</label>}
    <div>
      <textarea className="input-field textarea-field" {...input} {...{ placeholder, type }}/>
    </div>
    <div>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const { string, object } = PropTypes;

TextArea.propTypes = {
  input: object.isRequired,
  label: string,
  type: string.isRequired,
  placeholder: string,
  meta: object
};

export default TextArea;
