import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Typography} from '@material-ui/core';
import Dash1 from './Dash1';
import Head from './Head/Head';


const useStyles = makeStyles({
    main: {
     marginLeft:'20%'
    },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <Grid>
           <Head/><br></br><br></br>
            <h2> Today's Attendances Status </h2>
            <Dash1/>

            <h2> Last Week Attendances Status </h2>
            <Dash1/>

            <h2> Last Month Attendances Status </h2>
            <Dash1/>
    </Grid>
    )
}