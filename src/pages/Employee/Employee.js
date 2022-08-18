import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { EMPLOYEES_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import {
  getEmployeeAction,
  deleteEmployeeAction,
} from '../../store/actions/employeeActions';

import ContentHeader from '../../additionalСomponents/ContentHeader/ContentHeader';
import InfoField from '../../additionalСomponents/InfoField/InfoField';

import './Employee.scss';

const Employee = () => {
  const { employee } = useSelector((state) => state.employee);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteEmployee = () => {
    dispatch(deleteEmployeeAction(id));
    navigate(EMPLOYEES_ROUTE);
  };

  useEffect(() => {
    dispatch(getEmployeeAction(id));
  }, []);
  return (
    <>
      <ContentHeader
        headerTitle="Employee Info"
        buttonTitle="Delete"
        onClickButton={deleteEmployee}
      />
      <div className="content__body content__body_employee">
        <InfoField
          label="Full name"
          value={`${employee?.name} ${employee?.surname}`}
        />
        <InfoField label="Position" value={employee?.position} />
        <InfoField label="Company" value={employee?.company} />
        <InfoField
          label="Department"
          value={employee?.department?.name}
        />
      </div>
    </>
  );
};

export default Employee;
