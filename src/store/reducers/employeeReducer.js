import { EMPLOYEE_ACTIONS_TYPES } from '../actions/actionsTypes/employeeActionsTypes';

const initialEmployeesState = {
  message: '',
  employee: null,
  employeesList: [],
  error: false,
};

export const employeeReducer = (state = initialEmployeesState, action) => {
  switch (action.type) {
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_ACTION: {
      return {
        ...state,
        message: 'Getting employees...',
        employee: null,
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_FAILED: {
      return {
        ...state,
        message: 'Get employees failed',
        error: true,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        message: 'Get employees success',
        employeesList: action.payload,
        employee: null,
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_ACTION: {
      return {
        ...state,
        message: 'Getting employee...',
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_FAILED: {
      return {
        ...state,
        message: 'Get employee failed',
        error: true,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.GET_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        message: 'Get employee success',
        employee: action.payload,
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_ACTION: {
      return {
        ...state,
        message: 'Adding employee...',
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_NOT_FOUND: {
      return {
        ...state,
        message: 'Department not found',
        error: true,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_ALREADY_EXISTS: {
      return {
        ...state,
        message: 'Department head already exists',
        error: true,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_FAILED: {
      return {
        ...state,
        message: 'Add employee failed',
        error: true,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.ADD_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        message: 'Add employee success',
        employee: action.payload,
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.DELETE_EMPLOYEE_ACTION: {
      return {
        ...state,
        message: 'Deleting employee...',
        error: false,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.DELETE_EMPLOYEE_FAILED: {
      return {
        ...state,
        message: 'Delete employee failed',
        error: true,
      };
    }
    case EMPLOYEE_ACTIONS_TYPES.DELETE_EMPLOYEE_SUCCESS: {
      return {
        ...state,
        message: 'Delete employee success',
        employee: action.payload,
        error: false,
      };
    }
    default:
      return state;
  }
};
