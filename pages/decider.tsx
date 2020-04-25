import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FistToFive } from './FistToFive';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    height: 140,
    width: 200,
  }
}));

export function DeciderButton(IDecision) {
  
}

export default function options() {
    const [choice, setChoice] = React.useState(2);
    const classes = useStyles();
  
    const handleChange = (event) => {
      setChoice(Number(event.target.value));
    };

    const decisions = FistToFive;
  
    return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item>
            <Grid container justify="center">
              {decisions.map((value) => (
                <Grid key={value.value} item>
                  <Button variant="contained" color="primary"><h1>value.value</h1><p>value.description</p></Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

      </Grid>


    );
};