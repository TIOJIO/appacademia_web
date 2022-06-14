import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Header from './Header/Header'
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import SchoolIcon from '@material-ui/icons/School';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import TeachCount from './TeachCount';
import StudCount from './StudCount';
import SalleCount from './SalleCount';

const useStyles = makeStyles({
    main: {
     width:'auto',
     backgroundColor:'white',
     height:'auto',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     justifyContent:'space-evenly',
     marginTop:'40px',
     padding:'5% 0% 5% 0%'
    
     
    },
  
  });

export default function Main(){
  
   

    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>
                 <Grid  style={{fontFamily: "Times New Roman, Times, serif",display:'flex'}}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  < PeopleIcon/></Avatar>
                       &nbsp; &nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif"}} color='textPrimary' >Students</Typography>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} > <StudCount/> </Typography>
                       </Grid>
                  </Grid>

                  <Grid style={{display:'flex'}}>
                       <Avatar style={{ backgroundColor:'rgba(185, 183, 183, 0.829)'}} >  <PersonIcon/></Avatar>
                       &nbsp; &nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif"}} color='textPrimary' >Teachers</Typography>
                          <Typography  style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} ><TeachCount/></Typography>
                       </Grid>
                  </Grid>

                  <Grid style={{display:'flex'}}>
                       <Avatar style={{ backgroundColor:'rgba(250, 207, 90, 0.973)'}} >  <SchoolIcon/></Avatar>
                       &nbsp; &nbsp;   <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif"}} color='textPrimary' >classes</Typography>
                          <Typography  style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} > <SalleCount/></Typography>
                       </Grid>
                  </Grid>

                  <Grid style={{display:'flex'}}>
                       <Avatar style={{ backgroundColor:'rgba(71, 71, 69, 0.973)'}} >  <LocalDiningIcon/></Avatar>
                       &nbsp; &nbsp;  <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography style={{fontFamily: "Times New Roman, Times, serif"}} color='textPrimary' >Attendance</Typography>
                          <Typography  style={{fontFamily: "Times New Roman, Times, serif",fontWeight:'bold'}} >108</Typography>
                       </Grid>
                  </Grid>

            </Grid>
    </Grid>
    )
}