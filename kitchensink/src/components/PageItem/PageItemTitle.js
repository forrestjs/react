import React from 'react';
import { makeStyles } from '@mui/styles/';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: theme.palette.primary.main,
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
}));

export const PageItemTitle = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.toolbar}>
      {title && (
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      )}
    </Toolbar>
  );
};

export default PageItemTitle;
