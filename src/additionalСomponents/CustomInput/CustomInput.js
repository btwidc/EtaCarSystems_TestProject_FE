import React from 'react';

import './CustomInput.scss';

const CustomInput = ({ id, labelName, type, placeholder, value, onChange }) => {
  return (
    <div className="custom-input-container">
      <label htmlFor={id} className="custom-input-label">
        {labelName}
      </label>
      <input
        className="custom-input-field"
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
