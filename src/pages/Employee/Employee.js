import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeAction } from '../../store/actions/employeeActions';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import CustomInfoField from '../../additionalСomponents/CustomInfoField/CustomInfoField';

import './Employee.scss';

const Employee = () => {
  const { employee } = useSelector((state) => state.employee);

  const { id } = useParams();
  const dispatch = useDispatch();

  const deleteEmployee = () => {};

  useEffect(() => {
    dispatch(getEmployeeAction(id));
  }, []);
  return (
    <>
      <CustomHeader
        headerTitle="Employee Info"
        buttonTitle="Delete"
        onClickButton={deleteEmployee}
      />
      <div className="employee-container">
        <CustomInfoField
          label="Full name"
          value={`${employee?.name} ${employee?.surname}`}
        />
        <CustomInfoField label="Position" value={employee?.position} />
        <CustomInfoField label="Company" value={employee?.company} />
        <CustomInfoField
          label="Department"
          value={employee?.department?.name}
        />
      </div>
    </>
  );
};

export default Employee;
