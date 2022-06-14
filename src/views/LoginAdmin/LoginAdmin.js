import React , { useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import '../App.css'
import {TextField, Grid,Button,Container,Typography,Paper} from '@material-ui/core';
import { Link } from 'react-router-dom';
//import {FaUnlockAlt} from 'react-icons/fa'
import Background from './Background'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AlertError from './AlertError'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import logo from './logo.jpg';




    function Singup () {

      const [email , setEmail]=useState("");
      const [phone , setPhone]=useState("");
      const [password , setPassword]=useState("");

      const history=useHistory(); 

    
     
      async  function mySubmiCtHandler(e) {
        e.preventDefault()

           
            history.push('admin/dashboard');
          
       /* try {
        let item = (email,phone,password);
        let result =  fetch ("https://www.djangui.net/balatchi_djangui/user/login",{
           method:"POST",
           headers :{
            'Content-type':'application/json',
            'Accept':'application/json'
           },
           body:JSON.stringify(item)
        });
        result=  result.JSON
         localStorage.setItem("user-log",JSON.stringify(result))
         history.push('admin/dashboard');
          }catch(e){
              alert("error")
              console.log(e)
          }*/
        }
              return(
                <div className="signup">
                     <div className="content" >
                       <br></br>     <br></br>
                           <div>
                             <Paper> 
                                <form onSubmit={mySubmiCtHandler} >
                                <br></br>
                                 <div style={{textAlign:"center",display:"flex",marginLeft:"100px"}}>
                                     <img style={{width:'60px',height:"60px"}} src={logo}/>
                                     <p style={{fontFamily: "Times New Roman, Times, serif",fontSize:"20px",marginTop:"10px",color:"rgb(17, 141, 65)"}}><b>AppAcademia</b></p>
                                 </div>
                                <br></br>
                                  <h3 style={{color:"rgb(17, 141, 65)",fontFamily: "Times New Roman, Times, serif",textAlign:"center"}}>  ADMINISTRATEUR </h3>
                                  <p style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",textAlign:"center"}}> veillez remplir vos information pour vous connectez !</p>
                                  
                                  <br></br>
                                  <TextField  type='text' style={{width:"100%"}} label="email"
                                    onChange={(e) =>setEmail(e.target.value)} />  <br/> <br/><br/>
                                   
                                  <TextField  type='text' style={{width:"100%"}} label="phone"
                                     onChange={(e) =>setPhone(e.target.value)}/><br/> <br/><br/>
                                  <TextField  type="password" id="password" style={{width:"100%"}} label="password"
                                       onChange={(e) =>setPassword(e.target.value)}/> <br/><br/> <br/> 

                                  
                              
                                 
                                   <button 
                                       
                                       style={{backgroundColor:"rgb(17, 141, 65)",fontFamily: "Times New Roman, Times, serif",color:"white",border:'none',borderRadius:'5px',height:"40px",width:"150px",float:"center"}}>
                                     SE CONNECTER
                                    </button>
                                    <br/><br/>
                           
                                         <p><Link to="./createSchool" style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",color:"rgb(17, 141, 65)",float:"right"}}><b>creer une ecole ?</b></Link></p> <br/>    
                                         <p> <Link to="/loginUser" style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",color:"rgb(17, 141, 65)",float:"right"}}><b>Se connecte en tant que Utilisateurs?.</b></Link></p>

                                 </form>
                                 <br/>
                               </Paper>

                              
                         </div>

                        
                      
                     </div>   
                 </div>
              
              )
    }



export default Singup;
