import React from 'react';
import { makeStyles } from '@mui/styles/';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export const PageContent = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          {children}
        </Grid>
      </Container>
    </main>
  );
};
