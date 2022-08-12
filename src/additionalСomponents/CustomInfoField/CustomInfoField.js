import React from 'react';

import './CustomInfoField.scss';

const CustomInfoField = ({ label, value }) => {
  return (
    <div className="info-field">
      <h3>{label}</h3>
      {value ? <h4>{value}</h4> : <h4>none</h4>}
    </div>
  );
};

export default CustomInfoField;
