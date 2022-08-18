import React from 'react';

import './FormCheckbox.scss';

const FormCheckbox = ({ label, onChange }) => {
  return (
    <div className="form-checkbox">
      <div className="form-checkbox__label">
        <label>{label}</label>
      </div>
      <div className="form-checkbox__field">
        <input type="checkbox" onChange={onChange} />
      </div>
    </div>
  );
};
export default FormCheckbox;
