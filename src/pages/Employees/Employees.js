import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import CustomHeader from '../../additionalСomponents/CustomHeader/CustomHeader';
import EmployeesTableCustomPagination from './Components/EmployeesTableCustomPagination/EmployeesTableCustomPagination';

import './Employees.scss';

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'employees-table-column-name',
    width: 50,
  },
  {
    field: 'name',
    headerName: 'First name',
    headerClassName: 'employees-table-column-name',
    width: 160,
  },
  {
    field: 'surname',
    headerName: 'Last name',
    headerClassName: 'employees-table-column-name',
    width: 180,
  },
  {
    field: 'position',
    headerName: 'Position',
    headerClassName: 'employees-table-column-name',
    sortable: false,
    width: 280,
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

const rows = [
  {
    id: 1,
    name: 'Kirill',
    surname: 'Kravchenko',
    position: 'Team Lead Node.js Developer',
    company: 'EtaCar Systems',
    addition_date: 'AUG-07-2022 02:49PM',
  },
  {
    id: 2,
    name: 'Aleksandr',
    surname: 'Burkovski',
    position: 'Junior Node.js Developer',
    company: 'EtaCar Systems',
    addition_date: 'AUG-06-2022 02:49PM',
  },
];

const Employees = () => {
  const navigate = useNavigate();

  const navigateToEmployeeForm = () => {
    navigate('/employee-form');
  };

  const getEmployeeOnRowClick = (employee) => {
    navigate(`/employee/${employee.id}`);
  };

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
          rows={rows}
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
