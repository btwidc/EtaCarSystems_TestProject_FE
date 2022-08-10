import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesAction } from '../../store/actions/employeeActions';

import { DataGrid } from '@mui/x-data-grid';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
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
    headerClassName: 'employees-table-column-name',
    width: 140,
  },
  {
    field: 'surname',
    headerName: 'Last name',
    headerClassName: 'employees-table-column-name',
    width: 160,
  },
  {
    field: 'position',
    headerName: 'Position',
    headerClassName: 'employees-table-column-name',
    sortable: false,
    width: 300,
  },
  {
    field: 'company',
    headerName: 'Company',
    headerClassName: 'employees-table-column-name',
    sortable: false,
    width: 160,
  },
  {
    field: 'addition_date',
    headerName: 'Addition date',
    headerClassName: 'employees-table-column-name',
    sortable: false,
    width: 250,
  },
];

const Employees = () => {
  const { employeesList } = useSelector((state) => state.employee);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToEmployeeForm = () => {
    navigate('/employee-form');
  };

  const getEmployeeOnRowClick = (employee) => {
    navigate(`/employee/${employee.id}`);
  };

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, []);
  return (
    <>
      <CustomHeader
        headerTitle="Employees"
        buttonTitle="Add"
        onClickButton={navigateToEmployeeForm}
      />
      <div className="employees-table-container">
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
