import React , { useState,useContext} from 'react'
import {useHistory} from 'react-router-dom';
import '../App.css'
import {TextField, Grid,Button,Container,Typography,Paper} from '@material-ui/core';
import { Link } from 'react-router-dom';
//import {FaUnlockAlt} from 'react-icons/fa'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




    const Singup = ({mhs}) => {
      let history=useHistory(); 
     
      const mySubmiCtHandler = e => {
    
        history.push('admin/dashboard');
       
      }
              return(
                <div className="signup">
                     <div className="content" >
                           <div>
                                <form  >
                                  <h3 style={{color:"rgb(17, 141, 65)",textAlign:"center"}}> INSCRIPTION </h3>
                                  <TextField type="text"  style={{width:"100%"}} label="Username"/>  <br/> <br/>
                                  <TextField type="text"  style={{width:"100%"}} label="Name"/>  <br/> <br/>
                                  <TextField type="text" style={{width:"100%"}} label="Email"/>  <br/> <br/>
                                  <TextField type="text"   style={{width:"100%"}} label="Password"/><br/> <br/>
                                  <TextField type="text"    style={{width:"100%"}} label="Classroom"/> <br/><br/> 
                                  <TextField  type="text"  style={{width:"100%"}} label=" Phone"/><br/><br/>
                                
                                 
                                   <button 
                                       onClick={mySubmiCtHandler}
                                       style={{backgroundColor:"rgb(17, 141, 65)",fontFamily: "Times New Roman, Times, serif",color:"white",border:'none',borderRadius:'5px',height:"40px",width:"110px",float:"left"}}>
                                     SAVE
                                    </button>

                           
                                 </form>
                             <br/>
                        
                         </div> 

                        
                      
                     </div>   
                 </div>
              
              )
    }



export default Singup;
