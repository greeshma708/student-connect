import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ProfileTable = ({ profiles }) => {
  // Column definitions for the table
  const columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Likes', field: 'likes', sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        rowData={profiles} // Data to display (profiles array)
        columnDefs={columnDefs} // Column definitions
        pagination={true} // Enable pagination
        paginationPageSize={10} // Show 10 rows per page
      />
    </div>
  );
};

export default ProfileTable;