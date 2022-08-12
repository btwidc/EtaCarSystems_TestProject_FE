import React from 'react';
import { Link } from 'react-router-dom';

import './DepartmentEmployee.scss';

const DepartmentEmployee = ({ id, fullName, position }) => {
  return (
    <div className="department-employee">
      <Link to={`/employee/${id}`}>
        <h4 className="department-employee-label">{fullName}</h4>
      </Link>
      <h5>{position}</h5>
    </div>
  );
};

export default DepartmentEmployee;
