import React from 'react';
import { styled } from '@mui/material/styles';

import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => !['open', 'drawerWidth'].includes(prop),
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const LayoutAppBar = ({
  isDrawerEnabled,
  drawerWidth,
  isDrawerOpen,
  handleDrawerOpen,
  title,
}) => {
  return (
    <AppBar
      position="fixed"
      open={isDrawerOpen}
      drawerWidth={isDrawerEnabled ? drawerWidth : 0}
    >
      <Toolbar>
        {isDrawerEnabled && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(isDrawerOpen && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
