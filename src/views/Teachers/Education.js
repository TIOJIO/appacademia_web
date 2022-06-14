import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import{Typography}  from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Save from './Save';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'auto',
    borderRadius:'20px',
    backgroundColor:'white'
   
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color:'rgb(17, 141, 65)',
    fontWeight:'bold'
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div style={{width:'auto',height:'auto'}}>
        <div className={classes.root}>
             <div style={{backgroundColor:'rgb(17, 141, 65)', borderRadius:'10px 10px 0px 0px',}}>
                 <Typography style={{color:'white',padding:'7px 0px 7px 30px',fontWeight:'bold'}}> Education</Typography>
               </div>
       </div>

          
       <div style={{display:'flex',justifyContent:'space-evenly',width:'auto',backgroundColor:'white'}}>
     
               <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>
                 <Typography style={{fontWeight:'bold',}}> Students Details</Typography>
                 <TextField className={classes.root}  id="filled-basic" label="Doe" variant="filled" />

                        <Typography style={{fontWeight:'bold'}}> Students Details</Typography>
                             <TextField className={classes.root}  id="filled-basic" label="Doe" variant="filled" />

                             <Typography style={{fontWeight:'bold'}}> Students Details</Typography>
                             <textarea cols='55' rows='9'> </textarea>

               </div>

               <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>
                 <Typography style={{fontWeight:'bold'}}> Students Details</Typography> 
                 <TextField className={classes.root}  id="filled-basic" label="Doe" variant="filled" />

                 <Typography style={{fontWeight:'bold'}}> Students Details</Typography>
                 <TextField className={classes.root}  id="filled-basic" label="Doe" variant="filled" />

                 <Typography style={{fontWeight:'bold'}}> Paiement*</Typography>



               </div>
       </div>  <br/> <br/>
       <div style={{display:'flex',justifyContent:'center'}}>  
          <Save/>
             <div style={{backgroundColor:'rgb(17, 141, 65)',height:'50px',display:'flex',width:'100px',borderRadius:'20px'}}  > 
              <Typography style={{color:'white',justifyContent:'center',margin:'8px 5px 8px 8px'}}> Submit </Typography>
              </div>
        </div> 
    </div>
  );
}