import React from 'react';

import CustomInput from '../../additionalСomponents/CustomInput/CustomInput';

import './DepartmentForm.scss';

const DepartmentForm = () => {
  const addDepartment = () => {};
  return (
    <>
      <h2 className="department-form-header">Department Form</h2>
      <div className="department-form">
        <CustomInput
          labelName="Name"
          type="text"
          id="name"
          placeholder="Name"
          value="Name"
          onChange=""
        />
        <CustomInput
          labelName="Description"
          type="text"
          id="description"
          placeholder="Description"
          value="Description"
          onChange=""
        />
      </div>
      <button onClick={addDepartment}>Add</button>
    </>
  );
};

export default DepartmentForm;
