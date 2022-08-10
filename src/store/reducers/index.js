import { combineReducers } from 'redux';

import { departmentReducer } from './departmentReducer';
import { employeeReducer } from './employeeReducer';

export const rootReducer = combineReducers({
  department: departmentReducer,
  employee: employeeReducer,
});
