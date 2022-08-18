import React from 'react';

import './FormInput.scss';

const FormInput = ({ id, labelName, type, placeholder, value, onChange }) => {
  return (
    <div className="form-input">
      <div className="form-input__label">
        <label htmlFor={id}>{labelName}</label>
      </div>
      <div className="form-input__field">
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
