import React from 'react';

import './DepartmentEmployee.scss';

const DepartmentEmployee = ({ fullName, position }) => {
  return (
    <div className="department-employee">
      <h4>{fullName}</h4>
      <h5>{position}</h5>
    </div>
  );
};

export default DepartmentEmployee;
