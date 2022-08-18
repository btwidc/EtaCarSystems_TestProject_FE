import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getDepartmentsAction } from '../../store/actions/departmentActions';
import { getEmployeesAction } from '../../store/actions/employeeActions';

import DepartmentCard from '../Departments/Components/DepartmentCard/DepartmentCard';
import DepartmentEmployee from '../Department/Components/DepartmentEmployee/DepartmentEmployee';

import './Dashboard.scss';

const DashBoard = () => {
  const lastDepartments = useSelector((state) =>
    state.department.departmentsList.slice(0, 5),
  );
  const lastEmployees = useSelector((state) =>
    state.employee.employeesList.slice(0, 5),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartmentsAction());
    dispatch(getEmployeesAction());
  }, []);
  return (
    <div className="content__body content__body_dashboard">
      <div className="dashboard-departments">
        <div className="dashboard-departments__header">
          <h2>Dashboard</h2>
        </div>
        <div className="dashboard-departments__title">
          <h3>Top 5 Departments</h3>
        </div>
        <div className="dashboard-departments__cards">
          {lastDepartments?.map((department) => (
            <DepartmentCard
              key={department?.id}
              departmentHeadId={department?.department_head_id}
              departmentId={department?.id}
              name={department?.name}
              creationDate={department?.creation_date}
              numberOfEmployees={department?.number_of_employees}
              head={department?.department_head}
            />
          ))}
        </div>
      </div>
      <div className="dashboard-employees">
        <div className="dashboard-employees__title">
          <h3>Recently Added Employees</h3>
        </div>
        {lastEmployees?.map((employee) => (
          <DepartmentEmployee
            key={employee?.id}
            id={employee?.id}
            fullName={`${employee?.name} ${employee?.surname}`}
            position={employee?.position}
          />
        ))}
      </div>
    </div>
  );
};

export default DashBoard;
