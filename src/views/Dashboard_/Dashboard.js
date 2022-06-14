import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Grid,Container,Paper, Divider } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Dash4 from './Dash4';
import Input from './Input';
import Dash1 from './Dash1';
import Dash2 from './Dash2';
import Dash3 from './Dash3';


const useStyles = makeStyles((theme)=>({
    main: {
        
     },
    root: {
        display:'flex',
        justifyContent:'space-between',
        width:'100%',
        height:'auto',
       
      
    /*  margin: theme.spacing('auto'),
      justifyContent:'flex-start'*/
      },
  }));

export default function Main(){
    const classes = useStyles();

    return(
         

        <div className={classes.root} >
            <div style={{width:'80%', marginTop:'60px'}}>
                     <div style={{display:'flex',justifyContent:'space-between',width:'98%'}}>
                             <Typography variant='h5' style={{color:'black',fontWeight:'bold'}} >Dashboard</Typography> 
                                <Grid container style={{width:'40%'}}>
                                      <Input /> 
                                </Grid>
                       </div>
                        <div  style={{width:'98%'}}>
                          <Dash1 className={classes.main}/> 
                       </div> <br/>

                       <div  style={{width:'98%'}}>
                          <Dash3 className={classes.main}/>
                       </div> <br/>

                       <div  style={{width:'98%'}}>
                          <Dash4 className={classes.main}/>
                       </div>
             
            </div>
          
            <div style={{width:'30%'}} > 
               <Dash2 className={classes.main}/> 
            </div>
        </div>  
    
    )
}
