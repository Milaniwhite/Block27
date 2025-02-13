import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <IconButton onClick={toggleSidebar}>
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem button="true">
            <ListItemText primary="Home Page" />
          </ListItem>
          <ListItem button="true">
            <ListItemText primary="Transaction log " />
          </ListItem>
          <ListItem button="true">
            <ListItemText primary="Customers" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
