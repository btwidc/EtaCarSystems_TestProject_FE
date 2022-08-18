import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { EMPLOYEE_FORM_ROUTE } from '../../routes/routesPaths';

import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAction } from '../../store/actions/employeeActions';

import { DataGrid } from '@mui/x-data-grid';

import ContentHeader from '../../additionalСomponents/ContentHeader/ContentHeader';
import EmployeesTableCustomPagination from './Components/EmployeesTableCustomPagination/EmployeesTableCustomPagination';

import './Employees.scss';

const columns = [
  {
    field: 'id',
    hide: true,
  },
  {
    field: 'name',
    headerName: 'First name',
    headerClassName: 'employees-table__column',
    width: 140,
  },
  {
    field: 'surname',
    headerName: 'Last name',
    headerClassName: 'employees-table__column',
    width: 160,
  },
  {
    field: 'position',
    headerName: 'Position',
    headerClassName: 'employees-table__column',
    sortable: false,
    width: 300,
  },
  {
    field: 'company',
    headerName: 'Company',
    headerClassName: 'employees-table__column',
    sortable: false,
    width: 160,
  },
  {
    field: 'addition_date',
    headerName: 'Addition date',
    headerClassName: 'employees-table__column',
    sortable: false,
    width: 250,
  },
];

const Employees = () => {
  const { employeesList, employee } = useSelector((state) => state.employee);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToEmployeeForm = () => {
    navigate(EMPLOYEE_FORM_ROUTE);
  };

  const getEmployeeOnRowClick = (employee) => {
    navigate(`/employee/${employee.id}`);
  };

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [employee]);
  return (
    <>
      <ContentHeader
        headerTitle="Employees"
        buttonTitle="Add"
        onClickButton={navigateToEmployeeForm}
      />
      <div className="content__body content__body_employees_table">
        <DataGrid
          sx={{
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#B0C1D9',
            },
          }}
          className="employees-table"
          rows={employeesList}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          components={{
            Pagination: EmployeesTableCustomPagination,
          }}
          onRowClick={getEmployeeOnRowClick}
        />
      </div>
    </>
  );
};

export default Employees;
