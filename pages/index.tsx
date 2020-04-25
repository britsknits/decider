import Head from 'next/head';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FistToFive } from './FistToFive';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { FormControl } from '@material-ui/core';

export default function Home() {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      height: 140,
      width: 200,
      margin: 10
    },
    control: {
      padding: theme.spacing(2),
      height: 140,
      width: 200,
      margin: 10
    },
    
  }));
  const [choice, setChoice] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  const decisions = FistToFive;
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center">
        <Grid item xs={12}>
        <Paper className={classes.control}>
          <h1>{choice}</h1>
        </Paper>
      </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          {decisions.map((value) => (
            <Grid key={value.value} item>
              <Button variant="contained" color="primary" className={classes.button} onChange={handleChange}>
                <h1>{value.value}</h1><br />
                <p>{value.description}</p>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  );
}
