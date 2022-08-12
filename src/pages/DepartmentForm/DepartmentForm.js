import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { DEPARTMENTS_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import { addDepartmentAction } from '../../store/actions/departmentActions';

import CustomInput from '../../additionalСomponents/CustomInput/CustomInput';

import './DepartmentForm.scss';

const departmentInitialFormState = {
  name: '',
  description: '',
};

const DepartmentForm = () => {
  const { error, message, department } = useSelector(
    (state) => state.department,
  );

  const [departmentFormState, setDepartmentFormState] = useState(
    departmentInitialFormState,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setDepartmentFormState({
      ...departmentFormState,
      [e.target.id]: e.target.value,
    });
  };

  const addDepartment = (e) => {
    e.preventDefault();
    dispatch(
      addDepartmentAction(
        departmentFormState?.name,
        departmentFormState?.description,
      ),
    );
    if (!error && department) {
      setDepartmentFormState(departmentInitialFormState);
    }
  };

  useEffect(() => {
    if (department) {
      navigate(DEPARTMENTS_ROUTE);
    }
  }, [department]);

  return (
    <>
      <h2 className="department-form-header">Department Form</h2>
      <div className="department-form">
        <CustomInput
          labelName="Name"
          type="text"
          id="name"
          placeholder="Name"
          value={departmentFormState?.name}
          onChange={handleInputChange}
        />
        <CustomInput
          labelName="Description"
          type="text"
          id="description"
          placeholder="Description"
          value={departmentFormState?.description}
          onChange={handleInputChange}
        />
      </div>
      {error && <h4 className="department-form-error-message">{message}</h4>}
      <button onClick={addDepartment}>Add</button>
    </>
  );
};

export default DepartmentForm;
