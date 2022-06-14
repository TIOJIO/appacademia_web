import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Paper } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';




const useStyles = makeStyles({
    main: {
     width:'auto',
     backgroundColor:'white',
     height:'5%',
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
                 <Grid  style={{display:'flex'}}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  < PeopleIcon/></Avatar>
                       &nbsp; &nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography  color='textPrimary' >Total Students Present</Typography>
                          <Typography variant='h6' style={{fontWeight:'bold'}} >943</Typography>
                       </Grid>
                  </Grid>

                  <Grid style={{display:'flex'}}>
                  <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  < PeopleIcon/></Avatar>
                       &nbsp; &nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography    color='textPrimary' >Total Teachers Present</Typography>
                          <Typography  variant='h6'  style={{fontWeight:'bold'}} >943</Typography>
                       </Grid>
                  </Grid>

                  <Grid style={{display:'flex'}}>
                  <Avatar  >  < PeopleIcon/></Avatar>
                       &nbsp; &nbsp;   <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography color='textPrimary' >Total Absents Students</Typography>
                          <Typography  style={{fontWeight:'bold'}}  >40</Typography>
                       </Grid>
                  </Grid>

                  <Grid style={{display:'flex'}}>
                  <Avatar  >  < PeopleIcon/></Avatar>
                       &nbsp; &nbsp;  <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                          <Typography color='textPrimary' >Total Teachers Absent</Typography>
                          <Typography  style={{fontWeight:'bold'}} >108</Typography>
                       </Grid>
                  </Grid>

            </Grid>
    </Grid>
    )
}