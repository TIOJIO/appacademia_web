import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Market from './Market'


const useStyles = makeStyles({
    main: {
     width:'auto',
     backgroundColor:'white',
     height:'auto',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     flexDirection:'column'
   
    
     
    },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <div style={{ textAlign:'center'}} > 
       <Paper> 
       <Market/>
         
       </Paper>
     
    </div>
    )
}