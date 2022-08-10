import React from 'react';

import DepartmentCard from '../Departments/Components/DepartmentCard/DepartmentCard';
import DepartmentEmployee from '../Department/Components/DepartmentEmployee/DepartmentEmployee';

import './Dashboard.scss';

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-departments">
        <h2 className="dashboard-header">Dashboard</h2>
        <h3 className="dashboard-title">Top 5 Departments</h3>
        <div className="dashboard-departments-cards">
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
          <DepartmentCard />
        </div>
      </div>
      <div className="dashboard-employees">
        <h3 className="dashboard-title">Recently Added Employees</h3>
        <DepartmentEmployee
          fullName="Kirill Kravchenko"
          position="Junior Front-end Developer"
        />
        <DepartmentEmployee
          fullName="Kirill Kravchenko"
          position="Junior Front-end Developer"
        />
        <DepartmentEmployee
          fullName="Kirill Kravchenko"
          position="Junior Front-end Developer"
        />
        <DepartmentEmployee
          fullName="Kirill Kravchenko"
          position="Junior Front-end Developer"
        />
        <DepartmentEmployee
          fullName="Kirill Kravchenko"
          position="Junior Front-end Developer"
        />
      </div>
    </div>
  );
};

export default DashBoard;
