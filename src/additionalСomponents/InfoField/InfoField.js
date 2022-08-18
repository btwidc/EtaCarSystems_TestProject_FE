import React from 'react';

import './InfoField.scss';

const InfoField = ({ label, value }) => {
  return (
    <div className="info-field">
      <h3>{label}</h3>
      {value ? <h4>{value}</h4> : <h4>none</h4>}
    </div>
  );
};

export default InfoField;
