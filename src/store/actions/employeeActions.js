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
