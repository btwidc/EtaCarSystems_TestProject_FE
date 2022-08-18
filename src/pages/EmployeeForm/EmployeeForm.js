import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { EMPLOYEES_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import { addEmployeeAction } from '../../store/actions/employeeActions';

import FormInput from '../../additionalСomponents/FormInput/FormInput';
import FormCheckbox from '../../additionalСomponents/FormCheckbox/FormCheckbox';

import './EmployeeForm.scss';

const employeeInitialFormState = {
  name: '',
  surname: '',
  position: '',
  departmentName: '',
};

const EmployeeForm = () => {
  const { error, message, employee } = useSelector((state) => state.employee);

  const [employeeFormState, setEmployeeFormState] = useState(
    employeeInitialFormState,
  );
  const [isHead, setIsHead] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setEmployeeFormState({
      ...employeeFormState,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setIsHead((prev) => !prev);
  };

  const addEmployee = (e) => {
    e.preventDefault();
    dispatch(
      addEmployeeAction(
        employeeFormState?.name,
        employeeFormState?.surname,
        employeeFormState?.position,
        isHead,
        employeeFormState?.departmentName,
      ),
    );
    if (!error && employee) {
      setEmployeeFormState(employeeInitialFormState);
      setIsHead(false);
    }
  };

  useEffect(() => {
    if (employee) {
      navigate(EMPLOYEES_ROUTE);
    }
  }, [employee]);
  return (
    <>
      <h2 className="content__header">Employee Form</h2>
      <div className="content__body content__body_employee_form">
        <FormInput
          labelName="Name"
          type="text"
          id="name"
          placeholder="Name"
          value={employeeFormState?.name}
          onChange={handleInputChange}
        />
        <FormInput
          labelName="Surname"
          type="text"
          id="surname"
          placeholder="Surname"
          value={employeeFormState?.surname}
          onChange={handleInputChange}
        />
        <FormInput
          labelName="Position"
          type="text"
          id="position"
          placeholder="Position"
          value={employeeFormState?.position}
          onChange={handleInputChange}
        />
        <FormInput
          labelName="Department Name"
          type="text"
          id="departmentName"
          placeholder="Department Name"
          value={employeeFormState?.departmentName}
          onChange={handleInputChange}
        />
        <FormCheckbox label="Is Head?" onChange={handleCheckboxChange} />
      </div>
      {error && (
        <div className="content__error content__error_department_form">
          <h4>{message}</h4>
        </div>
      )}
      <div className="content__footer">
        <button onClick={addEmployee}>Add</button>
      </div>
    </>
  );
};

export default EmployeeForm;
