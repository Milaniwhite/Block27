import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">Restaurant Dashboard</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
