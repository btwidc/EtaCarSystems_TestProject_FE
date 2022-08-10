import React from 'react';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import CustomInfoField from '../../additionalСomponents/CustomInfoField/CustomInfoField';

import './Employee.scss';

const Employee = () => {
  const deleteEmployee = () => {};
  return (
    <>
      <CustomHeader
        headerTitle="Employee Info"
        buttonTitle="Delete"
        onClickButton={deleteEmployee}
      />
      <div className="employee-container">
        <CustomInfoField label="Full name" value="Kirill Kravchenko" />
        <CustomInfoField label="Position" value="Junior Node.js Developer" />
        <CustomInfoField label="Company" value="EtaCar Systems" />
        <CustomInfoField label="Department" value="HR" />
      </div>
    </>
  );
};

export default Employee;
