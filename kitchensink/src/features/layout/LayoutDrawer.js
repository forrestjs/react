import React from 'react';
import { styled, useTheme } from '@mui/material/styles';

import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { LayoutDrawerHeader } from './LayoutDrawerHeader';
import { LayoutDrawerList } from './LayoutDrawerList';

const openedMixin = (theme, width) => ({
  width: width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => !['open', 'width'].includes(prop),
})(({ theme, open, width }) => ({
  width: width,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, width),
    '& .MuiDrawer-paper': openedMixin(theme, width),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const LayoutDrawer = ({
  width,
  isOpen,
  handleClose,
  primaryItems,
  secondaryItems,
}) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={isOpen} width={width}>
      <LayoutDrawerHeader>
        <IconButton onClick={handleClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </LayoutDrawerHeader>
      {primaryItems.length > 0 && <LayoutDrawerList items={primaryItems} />}
      {secondaryItems.length > 0 && <LayoutDrawerList items={secondaryItems} />}
    </Drawer>
  );
};
