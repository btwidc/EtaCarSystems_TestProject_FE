import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { DEPARTMENTS_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import { addDepartmentAction } from '../../store/actions/departmentActions';

import FormInput from '../../additionalСomponents/FormInput/FormInput';

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
      <div className="content__header">
        <h2>Department Form</h2>
      </div>
      <div className="content__body content__body_department_form">
        <FormInput
          labelName="Name"
          type="text"
          id="name"
          placeholder="Name"
          value={departmentFormState?.name}
          onChange={handleInputChange}
        />
        <FormInput
          labelName=" Description"
          type="text"
          id="description"
          placeholder="Description"
          value={departmentFormState?.description}
          onChange={handleInputChange}
        />
      </div>
      {error && (
        <div className="content__error content__error_department_form">
          <h4>{message}</h4>
        </div>
      )}
      <div className="content__footer">
        <button onClick={addDepartment}>Add</button>
      </div>
    </>
  );
};

export default DepartmentForm;
