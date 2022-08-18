import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { DEPARTMENT_FORM_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentsAction } from '../../store/actions/departmentActions';

import ContentHeader from '../../additionalСomponents/ContentHeader/ContentHeader';
import DepartmentCard from './Components/DepartmentCard/DepartmentCard';

import './Departments.scss';

const Departments = () => {
  const { departmentsList, department } = useSelector(
    (state) => state.department,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToDepartmentForm = () => {
    navigate(DEPARTMENT_FORM_ROUTE);
  };

  useEffect(() => {
    dispatch(getDepartmentsAction());
  }, [department]);
  return (
    <>
      <ContentHeader
        headerTitle="Departments"
        buttonTitle="Add"
        onClickButton={navigateToDepartmentForm}
      />
      <div className="content__body content__body_departments">
        {departmentsList?.map((department) => (
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
    </>
  );
};

export default Departments;
