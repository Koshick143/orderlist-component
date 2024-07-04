import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridCellParams } from '@mui/x-data-grid';
import { rows } from '../assets/orderData';
import '../styles/dataGridDemo.css'
import { useTheme, useMediaQuery,  } from '@mui/material';


import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { IoIosPrint } from "react-icons/io";
import { FaCopy } from "react-icons/fa6";
import { IoFilter } from "react-icons/io5";



const getStatusClass = (status: string) => {
  const lowerCaseStatus = status.toLowerCase();
  if (lowerCaseStatus === 'processing') {
    return 'status-processing';
  } else if (lowerCaseStatus === 'pending') {
    return 'status-pending';
  } else if (lowerCaseStatus === 'complete') {
    return 'status-complete';
  } else {
    return '';
  }
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'customerName', headerName: 'Customer Name', width: 150, editable: false },
  { field: 'branch', headerName: 'Branch', width: 150, editable: false },
  { field: 'paymentType', headerName: 'Payment Type', width: 150, editable: false },
  { field: 'quantity', headerName: 'Quantity', type: 'number', editable: false, width: 160 },
  { field: 'registered', headerName: 'Registered', editable: false, width: 160 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params: GridCellParams) => (
      <span className={getStatusClass(params.value as string)}>{params.value}</span>
    ),
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 70,
    renderCell: (params: GridCellParams) => (
        <div id='action-btn'>
        <div><FaEye color='blue' /></div>
        <div><FaPen color='black'/></div>
        </div>
    ),
  },
];

const DataGridDemo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredOrders = rows.filter((order) =>
    order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id='g-container'>
     
     
      <div id='input-box'>
        <input
          type="text"
          placeholder="Search Order"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div id="icons">

           <FaCopy size={28} />
           <IoIosPrint size={28}/>
           <IoFilter size={28}/>
        </div>
      </div>
      <Box sx={{ minHeight:isMobile?'max-content' : 500, maxHeight:'80vh',   width: '100%' } }>
        <DataGrid 
          rows={filteredOrders}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[25,10,5]}
          checkboxSelection
          disableRowSelectionOnClick
          rowHeight={70} 
        />
      </Box>
     
      
    </div>
  );
};

export default DataGridDemo;
