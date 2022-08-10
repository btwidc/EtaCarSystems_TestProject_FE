import { DEPARTMENT_ACTIONS_TYPES } from './actionsTypes/departmentActionsTypes';

import DepartmentService from '../../services/DepartmentService';

export const getDepartmentsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_ACTION,
      });
      const departments = await DepartmentService.getDepartments();
      dispatch({
        type: DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_SUCCESS,
        payload: departments.data,
      });
    } catch (e) {
      dispatch({
        type: DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_FAILED,
      });
    }
  };
};

export const getDepartmentAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_ACTION,
      });
      const department = await DepartmentService.getDepartment(id);
      dispatch({
        type: DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_SUCCESS,
        payload: department.data,
      });
    } catch (e) {
      dispatch({
        type: DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_FAILED,
      });
    }
  };
};
