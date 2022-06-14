import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import Deroul from './Deroul';

import Add from '@material-ui/icons/Add';
import logo from './img.jpg';
import logo1 from './img1.jpg';
import logo2 from './img2.jpg';
import logo3 from './img3.jpg';
import logo4 from './img4.jpg';




const useStyles = makeStyles({
    main: {
     width:'100%',
     backgroundColor:'white',
     height:'100%',
     margin:'auto',
     borderRadius:'10px',
     display:'flex',
     flexDirection:'column'
    },
    bloc: {
      display:'flex',
      width:'100%',
      justifyContent:'space-evenly',
      padding:'0px 0px 35px 0px',
      cursor: 'pointer',
    
     },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>
                

                      
                         <Grid  container >
                             <Grid style={{padding:'25px 0px 25px 150px'}}>
                             <Typography variant='h6' style={{fontWeight:'bold'}} >Unpaid Student intuition</Typography>
                       </Grid>
                       </Grid>

                     
                 <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                       <Typography style={{fontWeight:'bold'}} >Tiojio romain</Typography>
                       <Typography style={{color:'rgb(17, 141, 65)'}} >ID 123456789</Typography>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <PersonIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >close</Typography>
                            <Typography color='textPrimary' >VII</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Deroul/>
                       </Grid>


                                
                 <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                       <Typography style={{fontWeight:'bold'}} >Tiojio romain</Typography>
                       <Typography style={{color:'rgb(17, 141, 65)'}} >ID 123456789</Typography>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <PersonIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >close</Typography>
                            <Typography color='textPrimary' >VII</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Deroul/>
                       </Grid>


                                
                 <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                       <Typography style={{fontWeight:'bold'}} >Tiojio romain</Typography>
                       <Typography style={{color:'rgb(17, 141, 65)'}} >ID 123456789</Typography>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <PersonIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >close</Typography>
                            <Typography color='textPrimary' >VII</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Deroul/>
                       </Grid>


                                
                 <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                       <Typography style={{fontWeight:'bold'}} >Tiojio romain</Typography>
                       <Typography style={{color:'rgb(17, 141, 65)'}} >ID 123456789</Typography>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <PersonIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >close</Typography>
                            <Typography color='textPrimary' >VII</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Deroul/>
                       </Grid>


                                
                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                       <Typography style={{fontWeight:'bold'}} >Tiojio romain</Typography>
                       <Typography style={{color:'rgb(17, 141, 65)'}} >ID 123456789</Typography>

                     <Grid style={{display:'flex'}}>
                             <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <PersonIcon style={{color:'white',}}/></Avatar> 
                            &nbsp;&nbsp;&nbsp; <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}> 
                             <Typography style={{fontWeight:'bold'}} >close</Typography>
                            <Typography color='textPrimary' >VII</Typography>
                            </Grid>
                     </Grid>
                       <Typography style={{fontWeight:'bold'}} >$ 50.023</Typography>
                       <Deroul/>
                       </Grid>


                       



            </Grid>
    </Grid>
    )
}