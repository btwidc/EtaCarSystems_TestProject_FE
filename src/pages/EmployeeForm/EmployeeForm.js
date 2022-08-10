import React, { useState } from 'react';

import CustomInput from '../../additionalСomponents/CustomInput/CustomInput';
import CustomCheckbox from '../../additionalСomponents/CustomCheckbox/CustomCheckbox';

import './EmployeeForm.scss';

const EmployeeForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const addEmployee = () => {};
  return (
    <>
      <h2 className="employee-form-header">Employee Form</h2>
      <div className="employee-form">
        <CustomInput
          labelName="Name"
          type="text"
          id="name"
          placeholder="Name"
          value="Name"
          onChange=""
        />
        <CustomInput
          labelName="Surname"
          type="text"
          id="surname"
          placeholder="Surname"
          value="Surname"
          onChange=""
        />
        <CustomInput
          labelName="Position"
          type="text"
          id="position"
          placeholder="Position"
          value="Position"
          onChange=""
        />
        <CustomInput
          labelName="Department Name"
          type="text"
          id="departmentName"
          placeholder="Department Name"
          value="Department Name"
          onChange=""
        />
        <CustomCheckbox
          label="Is Head?"
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
      <button onClick={addEmployee}>Add</button>
    </>
  );
};

export default EmployeeForm;
