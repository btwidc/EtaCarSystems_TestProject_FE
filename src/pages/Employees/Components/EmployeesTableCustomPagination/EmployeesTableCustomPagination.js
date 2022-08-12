import React from 'react';

import { Pagination, PaginationItem } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridSelector,
  useGridApiContext,
} from '@mui/x-data-grid';

const EmployeesTableCustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

export default EmployeesTableCustomPagination;
