import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar } from '@material-ui/core';
import Input from './Input';
import Deroul from './Deroul';
import MailIcon from '@material-ui/icons/Mail';
import logo from './img.jpg';



export default function Head(){
     return(
        <Grid container style={{display:'flex',justifyContent:'space-between',marginTop:'40px'}}>
             <Typography variant='h5' style={{color:'rgb(17, 141, 65)',fontWeight:'bold'}} >Attendance</Typography> 
      
             <Grid  style={{display:'flex'}}>
             <Input/>
             &nbsp;&nbsp; &nbsp;&nbsp;
                
            </Grid>

       </Grid>
     )
}