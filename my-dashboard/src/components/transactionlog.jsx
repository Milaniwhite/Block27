import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const TransactionLog = ({ data}) => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'item', headerName: 'Item', width: 150 },
    { field: 'quantity', headerName: 'Quantity', width: 150 },
    { field: 'revenue', headerName: 'Revenue', width: 150 },
    { field: 'date', headerName: 'Date', width: 180 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} />
    </div>
  );
};

export default TransactionLog;
