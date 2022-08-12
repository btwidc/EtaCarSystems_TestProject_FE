import { DEPARTMENT_ACTIONS_TYPES } from '../actions/actionsTypes/departmentActionsTypes';

const initialDepartmentsState = {
  message: '',
  department: null,
  departmentsList: [],
  error: false,
};

export const departmentReducer = (state = initialDepartmentsState, action) => {
  switch (action.type) {
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_ACTION: {
      return {
        ...state,
        message: 'Getting departments...',
        department: null,
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_FAILED: {
      return {
        ...state,
        message: 'Get departments failed',
        error: true,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENTS_SUCCESS: {
      return {
        ...state,
        message: 'Get departments success',
        departmentsList: action.payload,
        department: null,
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_ACTION: {
      return {
        ...state,
        message: 'Getting department...',
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_FAILED: {
      return {
        ...state,
        message: 'Get department failed',
        error: true,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.GET_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        message: 'Get department success',
        department: action.payload,
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.ADD_DEPARTMENT_ACTION: {
      return {
        ...state,
        message: 'Adding department...',
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.ADD_DEPARTMENT_ALREADY_EXISTS: {
      return {
        ...state,
        message: 'Department already exists',
        error: true,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.ADD_DEPARTMENT_FAILED: {
      return {
        ...state,
        message: 'Add department failed',
        error: true,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.ADD_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        message: 'Add department success',
        department: action.payload,
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.DELETE_DEPARTMENT_ACTION: {
      return {
        ...state,
        message: 'Deleting department...',
        error: false,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.DELETE_DEPARTMENT_FAILED: {
      return {
        ...state,
        message: 'Delete department failed',
        error: true,
      };
    }
    case DEPARTMENT_ACTIONS_TYPES.DELETE_DEPARTMENT_SUCCESS: {
      return {
        ...state,
        message: 'Delete department success',
        department: action.payload,
        error: false,
      };
    }
    default:
      return state;
  }
};
