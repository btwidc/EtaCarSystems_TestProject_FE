import { EMPLOYEE_ACTIONS_TYPES } from './actionsTypes/employeeActionsTypes';

import EmployeeService from '../../services/EmployeeService';

export const getEmployeesAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_ACTION,
      });
      const employees = await EmployeeService.getEmployees();
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_SUCCESS,
        payload: employees.data,
      });
    } catch (e) {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_FAILED,
      });
    }
  };
};

export const getEmployeeAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_ACTION,
      });
      const employee = await EmployeeService.getEmployee(id);
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_SUCCESS,
        payload: employee.data,
      });
    } catch (e) {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_FAILED,
      });
    }
  };
};

export const addEmployeeAction = (
  name,
  surname,
  position,
  isHead,
  departmentName,
) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_ACTION,
      });
      const newEmployee = await EmployeeService.addEmployee(
        name,
        surname,
        position,
        isHead,
        departmentName,
      );
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_SUCCESS,
        payload: newEmployee.data,
      });
    } catch (e) {
      if (e.response.status === 404) {
        dispatch({
          type: EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_NOT_FOUND,
        });
      } else if (e.response.status === 409) {
        dispatch({
          type: EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_ALREADY_EXISTS,
        });
      } else {
        dispatch({
          type: EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_FAILED,
        });
      }
    }
  };
};

export const deleteEmployeeAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.DELETE_EMPLOYEE_ACTION,
      });
      const deletedEmployee = await EmployeeService.deleteEmployee(id);
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.DELETE_EMPLOYEE_SUCCESS,
        payload: deletedEmployee.data,
      });
    } catch (e) {
      dispatch({
        type: EMPLOYEE_ACTIONS_TYPES.DELETE_EMPLOYEE_FAILED,
      });
    }
  };
};
