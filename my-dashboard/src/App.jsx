import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import TransactionLog from './components/TransactionLog';
import { Grid } from '@mui/material';
import data from './path/to/your/data.json'; 

const DashboardLayout = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={9}>
        <TransactionLog data={data} />
      </Grid>
    </Grid>
  );
};

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <DashboardLayout />
      </div>
    </div>
  );
};

export default App;





