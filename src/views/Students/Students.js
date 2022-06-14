import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Avatar,Grid ,Box,TextField} from '@material-ui/core';
import { Route, BrowserRouter as Router , Link, Switch} from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import Add from '@material-ui/icons/Add';
import AddTeacher from './AddTeacher';
import Parent from './Education';
import InputAdd from './InputAdd';
import TableTeacher from './TableTeacher';
import Deroul from './Deroul';
import Puce from './Puce';
import Input from './Input';
import logo from './img.jpg';
import App from './Addteachers/App';
import TestAdd from './TestAdd';
import Head from './Head/Head'



const useStyles = makeStyles({
    main: {
    maxHeight:'auto',
    margin:'auto',
    display:'flex',
   justifyContent:'space-between',
   margin:'0px'

  
    },
    bloc: {
      display:'flex',
      flexDirection:'column',
      textAlign:'justify',
      lineHeight:'20px',
      margin:'3% 0% 0% 0%'
      },
      blocc: {
        display:'flex',
        width:'25%',
        flexDirection:'column',
        textAlign:'justify',
        lineHeight:'20px',
        margin:'3% 0% 0% 0%',
        textAlign:'justify'
       
        },
        
      
  });

export default function Main(){
    const classes = useStyles();

    return(

      <div>
        
      <br/>
      <Head/>
      <br/><br/>
      <TestAdd/>
      
      </div>
   /*       
<div><br/>
      
      <div className={classes.main} >
         <div className={classes.bloc}>
       <Typography variant='h5' style={{color:'rgb(17, 141, 65)',fontWeight:'bold'}}> Teachers  </Typography>
          <br/> <br/><br/>
           <div >
           < Input/>
           </div>
        </div>

          <div className={classes.blocc}> 
              <div style={{display:'flex',justifyContent:'space-evenly'}}> 
                 <Deroul/>
                  <Deroul/>
                    <div  style={{display:'flex'}}>
                     <div  style={{textAlign:'end'}}>
                        <Typography style={{fontWeight:'bold'}}>  GSB Romain </Typography>
                         <Typography color='textSecondary'>  Admin </Typography> 
                       </div>
                       &nbsp;&nbsp;
                       <Avatar style={{ backgroundColor:'rgb(17, 141, 65)'}} > <img style={{width:'40px'}} src={logo}/> </Avatar>                     

                  </div>
                
             </div>
             <br/>
              <div style={{display:'flex'}} > 
                  <div > 
                     <Puce/>
                 </div>
               <a href='#add'> 
                     <div style={{backgroundColor:'rgb(17, 141, 65)',textDecoration:'none',display:'flex',width:'auto',borderRadius:'20px'}}  > 
                           &nbsp;<Typography style={{color:'white',textDecoration:'none',justifyContent:'center',margin:'10px 5px 10px 25px'}}> +&nbsp;  New Student </Typography>
                     </div> 
               </a>
              </div>
          </div>
      
      </div>
      <br/>
 
      <Grid style={{width:'auto'}}>
       <TableTeacher />
     
      </Grid>
 
   

      <br/>
      <Grid style={{width:'auto'}}>
       <InputAdd />
      </Grid>

      <br/>
 
    
     <Grid id='add' style={{width:'auto'}}>
          <AddTeacher />
     </Grid>

     <br/> <br/>
 
      <Grid style={{width:'auto'}}>
            <Parent/>
        </Grid>
  
 </div>
 */
    )
}


