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
      
             <Grid  style={{display:'flex'}}>
             <Input/>
           
             &nbsp;&nbsp; &nbsp;&nbsp;
                
            </Grid>
            <div style={{backgroundColor:'rgb(17, 141, 65)',textDecoration:'none',display:'flex',width:'150px',borderRadius:'20px'}}  > 
                           &nbsp;<Typography style={{fontFamily: "Times New Roman, Times, serif",color:'white',textDecoration:'none',justifyContent:'center',margin:'10px 20px 10px 20px'}}> New Student </Typography>
                     </div> 

       </Grid>
     )
}