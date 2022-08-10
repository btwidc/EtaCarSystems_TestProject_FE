import React from 'react';
import { useNavigate } from 'react-router-dom';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import DepartmentCard from './Components/DepartmentCard/DepartmentCard';

import './Departments.scss';

const Departments = () => {
  const navigate = useNavigate();

  const navigateToDepartmentForm = () => {
    navigate('/department-form');
  };
  return (
    <>
      <CustomHeader
        headerTitle="Departments"
        buttonTitle="Add"
        onClickButton={navigateToDepartmentForm}
      />
      <div className="departments-container">
        <DepartmentCard />
        <DepartmentCard />
        <DepartmentCard />
      </div>
    </>
  );
};

export default Departments;
