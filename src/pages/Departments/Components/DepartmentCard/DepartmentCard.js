import React from 'react';
import { Link } from 'react-router-dom';

import './DepartmentCard.scss';

const DepartmentCard = ({
  departmentId,
  name,
  creationDate,
  numberOfEmployees,
  head,
  departmentHeadId,
}) => {
  return (
    <div className="department-card-container">
      <div className="department-card-header">
        <Link to={`/department/${departmentId}`}>
          <span>{name}</span>
        </Link>
      </div>
      <div className="department-card-body">
        <h4>{creationDate}</h4>
        <h5>Number of employees: {numberOfEmployees}</h5>
        <span>Head: </span>
        <Link to={`/employee/${departmentHeadId}`}>
          <span>{head}</span>
        </Link>
      </div>
    </div>
  );
};

export default DepartmentCard;
