import React from 'react';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import CustomInfoField from '../../additionalСomponents/CustomInfoField/CustomInfoField';
import DepartmentEmployee from './Components/DepartmentEmployee/DepartmentEmployee';

import './Department.scss';

const Department = () => {
  const deleteDepartment = () => {};
  return (
    <>
      <CustomHeader
        headerTitle="Department Info"
        buttonTitle="Delete"
        onClickButton={deleteDepartment}
      />
      <div className="department-container">
        <CustomInfoField label="Name" value="React.js" />
        <CustomInfoField label="Creation Date" value="AUG-07-2022 02:49PM" />
        <CustomInfoField
          label="Description"
          value="Department of front-end programmers"
        />
      </div>
      <h2 className="department-employees-header">Employees</h2>
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
    </>
  );
};

export default Department;
