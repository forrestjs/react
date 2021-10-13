import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';

import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { LayoutDrawerList } from './LayoutDrawerList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}));

export const LayoutDrawer = ({
  isOpen,
  handleClose,
  primaryItems,
  secondaryItems,
}) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      classes={{
        paper: clsx(classes.drawerPaper, !isOpen && classes.drawerPaperClose),
      }}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {primaryItems.length > 0 && <LayoutDrawerList items={primaryItems} />}
      {secondaryItems.length > 0 && <LayoutDrawerList items={secondaryItems} />}
    </Drawer>
  );
};
