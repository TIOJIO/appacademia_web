import React , { useState,useContext} from 'react'
import {TextField, Grid,Button,Container,Typography,Paper} from '@material-ui/core';
import {FirebaseContext} from "../Firebase";
import { Link } from 'react-router-dom';
import {FaUnlockAlt} from 'react-icons/fa'
import Background from './Background'
import '../App.css'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import AlertError from './AlertError'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';




    const Singup = (props) => {
        const [open, setOpen] = React.useState(false);
        const handleClose = () => {
          setOpen(false);
        };
      

//enregistrement et verification des données
    const firebase = useContext(FirebaseContext);   
     
const data={
    pseudo:"",
    email:"",
    password:"",
    Confirmpassword:""
}
const  [loginData,SetLoginData] = useState(data)
const  [error,SetError] = useState('')
const handlechange = (e) => {
    SetLoginData ({...loginData, [e.target.id]: e.target.value});

}

const handleSubmit = (e) =>{
   
    setOpen(!open);
    e.preventDefault();
 
const {email,password} = loginData;
    firebase. signupUser (email , password )
    .then (user =>{
        
        SetLoginData ({...data});
        props.history.push('/Welcom');
    })
    .catch(error =>{
        setOpen(false);
        setOpen1(true);
        SetError(error)
        SetLoginData ({...data});

    })
}
//fonction de visualisation du password
const view = (event) => {
    let input1 = document.getElementById("password"); 
    let input2 = document.getElementById("Confirmpassword"); 
    if (input1.type === "password" && input2.type === "password" )
     { 
   input1.type = "text"; 
   input2.type = "text"; 
   } 
   else
   { 
   input1.type = "password"; 
   input2.type = "password"; 
   } 
    }
    // fonction alert error

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };

  //gestion du button
const {pseudo,email,password ,Confirmpassword} = loginData;
const btn = pseudo === "" || email === "" || password === "" || Confirmpassword == "" ?
<Button  disabled style={{backgroundColor:"rgba(152, 223, 179, 0.521)",width:"110px",float:"left"}}>Inscription</Button>:
<button 
   style={{backgroundColor:"rgb(17, 141, 65)",fontFamily: "Times New Roman, Times, serif",color:"white",border:'none',borderRadius:'5px',height:"40px",width:"110px",float:"left"}}>
    INSCRIPTION
    </button>
//gestin erreur

 const errorMsg = error !== '' && 
 <div>
 
 <Dialog
   open={open1}
   onClose={handleClose1}
   aria-labelledby="alert-dialog-title"
   aria-describedby="alert-dialog-description"
 >
   <DialogTitle id="alert-dialog-title">
     {"Alert Error"}
   </DialogTitle>
   <DialogContent>
     <DialogContentText style={{color:'red'}} id="alert-dialog-description">
       veillez verifier votre connexion internet ! et reesayer
     </DialogContentText>
   </DialogContent>
   <DialogActions>
     <Button onClick={handleClose1} autoFocus>
      close
     </Button>
   </DialogActions>
 </Dialog>
</div> 
              return(
                <Container className="signup">
                     <Grid container className="content">
                     <Grid>       
              
                    </Grid>
                        <Grid className="content1">
                        <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
                        <form onSubmit={handleSubmit}  >
                           <h2 style={{color:"rgb(17, 141, 65)",textAlign:"center"}}> INSCRIPTION</h2>
                             <TextField onChange={handlechange} value={pseudo} id="pseudo" style={{width:"100%"}} label="pseudo"/>  <br/> <br/><br/>
                             <TextField onChange={handlechange} value={email} id="email" style={{width:"100%"}} label="Email"/><br/> <br/><br/>
                             <TextField  onChange={handlechange} value={password} type="password" id="password" style={{width:"100%"}} label="password"/> <br/><br/> <br/> 
                             <div style={{display:'flex'}}>
                             <TextField onChange={handlechange} value={Confirmpassword} type="password" id="Confirmpassword" style={{width:"100%"}} label="Confirm password"/> <FaUnlockAlt style={{marginTop:'20px'}} onClick={view} /><br/><br/>
                             </div>
                             {errorMsg} <br/><br/>
                             {btn}
                             <h6 style={{color:"white"}}>............................................................................................................................</h6>

                             <Link to="./Login"><h3 style={{color:"rgb(17, 141, 65)"}}> Déja inscrit ? Connecté-vous.</h3></Link>
                         </form>
                        </Grid>
                     </Grid>
              </Container>
              )
    }



export default Singup;
