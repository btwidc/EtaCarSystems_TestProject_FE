import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { DEPARTMENTS_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import {
  getDepartmentAction,
  deleteDepartmentAction,
} from '../../store/actions/departmentActions';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import CustomInfoField from '../../additionalСomponents/CustomInfoField/CustomInfoField';
import DepartmentEmployee from './Components/DepartmentEmployee/DepartmentEmployee';

import './Department.scss';

const Department = () => {
  const { department } = useSelector((state) => state.department);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteDepartment = () => {
    dispatch(deleteDepartmentAction(id));
    navigate(DEPARTMENTS_ROUTE);
  };

  useEffect(() => {
    dispatch(getDepartmentAction(id));
  }, []);
  return (
    <>
      <CustomHeader
        headerTitle="Department Info"
        buttonTitle="Delete"
        onClickButton={deleteDepartment}
      />
      <div className="department-container">
        <CustomInfoField label="Name" value={department?.name} />
        <CustomInfoField
          label="Creation Date"
          value={department?.creation_date}
        />
        <CustomInfoField label="Description" value={department?.description} />
      </div>
      <h2 className="department-employees-header">Employees</h2>
      {department?.employees?.map((employee) => (
        <DepartmentEmployee
          key={employee?.id}
          id={employee?.id}
          fullName={`${employee?.name} ${employee?.surname}`}
          position={employee?.position}
        />
      ))}
    </>
  );
};

export default Department;
