import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles/';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import PageItemTitle from './PageItemTitle';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  inner: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export const PageItem = ({
  title,
  subtitle,
  fixedHeight,
  children,
  ...props
}) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(
    classes.paper,
    fixedHeight && classes.fixedHeight,
  );

  const titleBar =
    title || subtitle ? (
      <PageItemTitle title={title} subtitle={subtitle} />
    ) : null;

  return (
    <Grid item {...props}>
      <Paper className={fixedHeightPaper}>
        {titleBar}
        <div className={classes.inner}>{children}</div>
      </Paper>
    </Grid>
  );
};

PageItem.defaultProps = {
  xs: 12,
  md: 12,
  lg: 12,
  fixedHeight: false,
};
