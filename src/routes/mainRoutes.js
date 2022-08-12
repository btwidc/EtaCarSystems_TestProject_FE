import {
  MAIN_ROUTE,
  DEPARTMENT_ROUTE,
  DEPARTMENT_FORM_ROUTE,
  EMPLOYEE_ROUTE,
  EMPLOYEE_FORM_ROUTE,
} from './routesPaths';

import DashBoard from '../pages/Dashboard/DashBoard';
import Department from '../pages/Department/Department';
import DepartmentForm from '../pages/DepartmentForm/DepartmentForm';
import Employee from '../pages/Employee/Employee';
import EmployeeForm from '../pages/EmployeeForm/EmployeeForm';

export const mainRoutes = [
  { path: MAIN_ROUTE, Component: DashBoard },
  { path: DEPARTMENT_ROUTE, Component: Department },
  { path: DEPARTMENT_FORM_ROUTE, Component: DepartmentForm },
  { path: EMPLOYEE_ROUTE, Component: Employee },
  { path: EMPLOYEE_FORM_ROUTE, Component: EmployeeForm },
];
