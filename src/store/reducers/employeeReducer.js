import { EMPLOYEE_ACTIONS_TYPES } from '../actions/actionsTypes/employeeActionsTypes';

const initialEmployeesState = {
  message: '',
  employee: null,
  employeesList: [],
};

export const employeeReducer = (state = initialEmployeesState, action) => {
  switch (action.type) {
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_ACTION: {
      return {
        ...state,
        message: 'Getting employees...',
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_FAILED: {
      return {
        ...state,
        message: 'Get employees failed',
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        message: 'Get employees success',
        employeesList: action.payload,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_ACTION: {
      return {
        ...state,
        message: 'Getting employee...',
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_FAILED: {
      return {
        ...state,
        message: 'Get employee failed',
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        message: 'Get employee success',
        employee: action.payload,
      };
    }
    default:
      return state;
  }
};
