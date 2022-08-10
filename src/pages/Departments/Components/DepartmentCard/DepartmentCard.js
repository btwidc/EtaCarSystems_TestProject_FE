import React from 'react';
import { Link } from 'react-router-dom';

import './DepartmentCard.scss';

const DepartmentCard = () => {
  return (
    <div className="department-card-container">
      <div className="department-card-header">
        <Link to="/department/1">
          <span>React.js</span>
        </Link>
      </div>
      <div className="department-card-body">
        <h4>AUG-07-2022 02:49PM</h4>
        <h5>Number of employees: 4</h5>
        <span>Head: </span>
        <Link to="/employee/1">
          <span>Kirill Kravchenko</span>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;
