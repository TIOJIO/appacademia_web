import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Avatar,Divider } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import Add from '@material-ui/icons/Add';
import logo from './img.jpg';
import logo1 from './img1.jpg';
import logo2 from './img2.jpg';
import logo3 from './img3.jpg';
import logo4 from './img4.jpg';
import logo5 from './img6.jpg';




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
      '&:hover':{
          transform: 'scale(0.8)',
      }
     },
  
  });

export default function Main(){
    const classes = useStyles();

    return(
    <Grid > 

            <Grid container  className={classes.main}>


                      <br></br> <br></br> <br></br> <br></br> <br></br>
                         <Grid  container className={classes.bloc}>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recents Students</Typography>
                            <Typography color='textPrimary' >you have 450 Students</Typography>
                       </Grid>
                       &nbsp; &nbsp; &nbsp;<Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <Add/></Avatar>
                       </Grid>

                     
                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recents Students</Typography>
                            <Typography color='textPrimary' >you have 450 Students</Typography>
                       </Grid>
                      <Avatar style={{ backgroundColor:'white',border:'1px solid black'}} >  <MailIcon style={{color:'black'}}/></Avatar>
                       </Grid>



                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} > <img style={{width:'40px'}} src={logo2}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recents Students</Typography>
                            <Typography color='textPrimary' >you have 450 Students</Typography>
                       </Grid>
                    <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <MailIcon/></Avatar>
                       </Grid>



                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} > <img style={{width:'40px'}} src={logo3}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recents Students</Typography>
                            <Typography color='textPrimary' >you have 450 Students</Typography>
                       </Grid>
                       <Avatar style={{ backgroundColor:'white',border:'1px solid black'}} >  <MailIcon style={{color:'black'}}/></Avatar>
                       </Grid>


                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} >  <img style={{width:'40px'}} src={logo4}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recents Students</Typography>
                            <Typography color='textPrimary' >you have 450 Students</Typography>
                       </Grid>
                       <Avatar style={{ backgroundColor:'white',border:'1px solid black'}} >  <MailIcon style={{color:'black'}}/></Avatar>
                       </Grid>




                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} > <img style={{width:'40px'}} src={logo}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Recents Students</Typography>
                            <Typography color='textPrimary' >you have 450 Students</Typography>
                       </Grid>
                       <Avatar style={{ backgroundColor:'white',border:'1px solid black'}} >  <MailIcon style={{color:'black'}}/></Avatar>
                       </Grid>



                       <Grid  container className={classes.bloc}>
                             <Grid style={{backgroundColor:'rgba(17, 141, 65, 0.219)',borderRadius:"10px",width:"70%",textAlign:'center'}}>
                             <Typography style={{fontWeight:'bold',color:'rgb(17, 141, 65)',border:'100px 0px 10px 0px'}} >View More</Typography>
                       </Grid>
                       </Grid>




                       <Grid  container >
                             <Grid style={{}}>
                             <Typography style={{fontWeight:'bold', padding:'0px 0px 20px 30px',color:'rgb(28, 37, 87)'}} >Messages</Typography>
                           </Grid>
                       </Grid>

                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} > <img style={{width:'40px'}} src={logo}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Tiojio Romain</Typography>
                            <Typography color='textPrimary' >salut ! commnent?</Typography>
                       </Grid>
                       <Typography color='textPrimary' >13:14 PM</Typography>
                       </Grid>
                      
                      
                       
                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} ><img style={{width:'40px'}} src={logo1}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Mahop </Typography>
                            <Typography color='textPrimary' >je suis pas a l'ecole</Typography>
                       </Grid>
                       <Typography color='textPrimary' >02:15 PM</Typography>

                       </Grid>


      

                       <Grid  container className={classes.bloc}>
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} > <img style={{width:'40px'}} src={logo}/></Avatar>
                             <Grid style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                             <Typography style={{fontWeight:'bold'}} >Tiojio Romain</Typography>
                            <Typography color='textPrimary' >salut ! commnent?</Typography>
                       </Grid>
                       <Typography color='textPrimary' >13:14 PM</Typography>
                       </Grid>
                      
                 
                       <Grid  container className={classes.bloc}>
                             <Grid style={{backgroundColor:'rgba(17, 141, 65, 0.219)',borderRadius:"10px",width:"70%",textAlign:'center'}}>
                             <Typography style={{fontWeight:'bold',color:'rgb(17, 141, 65)',border:'100px 0px 10px 0px'}} >View More</Typography>
                       </Grid>
                       </Grid>

                       <Grid  container className={classes.bloc}>
                             <Typography style={{fontWeight:'bold'}} >Live Teaching Right Now</Typography>
                       </Grid>

                  <Grid  container className={classes.bloc}>
                      <img style={{width:'80%',borderRadius:'10px'}} src={logo5}/>
                   </Grid>


            </Grid>
    </Grid>
    )
}