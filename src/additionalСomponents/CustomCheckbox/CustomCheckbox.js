import React from 'react';

import './CustomCheckbox.scss';

const CustomCheckbox = ({ label, onChange }) => {
  return (
    <div className="custom-checkbox-container">
      <label className="custom-checkbox-label">{label}</label>
      <input
        className="custom-checkbox-field"
        type="checkbox"
        onChange={onChange}
      />
    </div>
  );
};
export default CustomCheckbox;
