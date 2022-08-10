import React from 'react';

import './CustomCheckbox.scss';

const CustomCheckbox = ({ label, isChecked, setIsChecked }) => {
  return (
    <div className="custom-checkbox-container">
      <label className="custom-checkbox-label">{label}</label>
      <input
        className="custom-checkbox-field"
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
    </div>
  );
};
export default CustomCheckbox;
