import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getDepartmentsAction } from '../../store/actions/departmentActions';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import DepartmentCard from './Components/DepartmentCard/DepartmentCard';

import './Departments.scss';

const Departments = () => {
  const { departmentsList } = useSelector((state) => state.department);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToDepartmentForm = () => {
    navigate('/department-form');
  };

  useEffect(() => {
    dispatch(getDepartmentsAction());
  }, []);
  return (
    <>
      <CustomHeader
        headerTitle="Departments"
        buttonTitle="Add"
        onClickButton={navigateToDepartmentForm}
      />
      <div className="departments-container">
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
