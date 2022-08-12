import { DEPARTMENTS_ROUTE, EMPLOYEES_ROUTE } from './routesPaths';

import Departments from '../pages/Departments/Departments';
import Employees from '../pages/Employees/Employees';

export const navMenuRoutes = [
  { path: DEPARTMENTS_ROUTE, Component: Departments, title: 'Departments' },
  { path: EMPLOYEES_ROUTE, Component: Employees, title: 'Employees' },
];
