import React, { PropTypes } from 'react';
import Select from 'react-select';
import FormFieldError from './FormFieldError';
import '../../styles/commons.scss';

const AutoSelect = ({ input, label, placeholder, options, meta: { touched, error } }) => {
  return (
    <div className="form-group">
      <div>
        { label && <label className="field-title">{label}</label> }
        <Select
          {...input}
          options={options}
          clearable={false}
          onBlur={() => input.onBlur(input.value.value)}
          placeholder={placeholder}
        />
      </div>
      <div>
        { touched && error && <FormFieldError error={error} /> }
      </div>
    </div>
  );
};

const { object, string, array } = PropTypes;

AutoSelect.propTypes = {
  placeholder: string,
  options: array,
  meta: object,
  label: string,
  input: object.isRequired,
};

export default AutoSelect;
