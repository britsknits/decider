import Head from 'next/head';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FistToFive } from './FistToFive';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { FormControl, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

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
      width: 200,
      margin: 10
    },
    top: {
      backgroundColor: theme.palette.primary.main,
      padding:15,

    }
    
  }));
  const decisions = FistToFive;
  const [choice, setChoice] = React.useState("0");
  const classes = useStyles();

  const handleChange = (event) => {
    setChoice(event.target.value);
  };


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.top}>
        <Grid container justify="center" >
          <Grid item key="display">
            <Paper className={classes.control}>
              <h1>{decisions[choice].value}</h1>
              <h2>{decisions[choice].description}</h2>
            </Paper>
          </Grid>
          
         </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <FormControl component="fieldset">
              <RadioGroup aria-label="fist to five" name="fist-to-five" value={choice} onChange={handleChange} row>
                {decisions.map((value) => (
                  <FormControlLabel key={value.value} value={value.value} control={<Radio />} label={value.value + " " + value.description} />

                ))}
          </RadioGroup>
          </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
}
