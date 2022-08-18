import React, { useEffect } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { DEPARTMENTS_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import {
  getDepartmentAction,
  deleteDepartmentAction,
} from '../../store/actions/departmentActions';

import ContentHeader from '../../additionalСomponents/ContentHeader/ContentHeader';
import InfoField from '../../additionalСomponents/InfoField/InfoField';
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
      <ContentHeader
        headerTitle="Department Info"
        buttonTitle="Delete"
        onClickButton={deleteDepartment}
      />
      <div className="content__body content__body_department">
        <div className="department-info">
          <InfoField label="Name" value={department?.name} />
          <InfoField label="Creation Date" value={department?.creation_date} />
          <InfoField label="Description" value={department?.description} />
        </div>
        <div className="department-employees">
          <h2 className="department-employees__header">Employees</h2>
          {department?.employees?.map((employee) => (
            <DepartmentEmployee
              key={employee?.id}
              id={employee?.id}
              fullName={`${employee?.name} ${employee?.surname}`}
              position={employee?.position}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Department;
