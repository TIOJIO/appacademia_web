

import React , {Component} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Grid,Container,Paper} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Background from './Background';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom';




class CreateSchool extends Component {
   
   constructor(props){
      super(props);
      this.onChangeNameschool = this.onChangeNameschool.bind(this);
      this.onChangePays = this.onChangePays.bind(this);
      this.onChangeVille = this.onChangeVille.bind(this);
      this.onChangeQuartier = this.onChangeQuartier.bind(this);
      this.onChangeNameadmin = this.onChangeNameadmin.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePasswords = this.onChangePasswords.bind(this);
      this.onChangeOpen = this.onChangeOpen.bind(this);
      this.onImageChange=this.onImageChange.bind(this);

            
  this.state ={
     nameschool: '',
     pays : '',
     ville: '',
     quartier : '',
     nameadmin:'',
     email : '',
     passwords : '',
     open : false,
      image :null
  }

}


  onChangeNameschool = (e) => {
    this.setState({ nameschool: e.target.value})
  }

    onChangePays = (e) => {
    this.setState({ pays: e.target.value})
  }

  onChangeVille = (e) => {
    this.setState({ ville: e.target.value})
  }  
  
  onChangeQuartier = (e) => {
    this.setState({ quartier: e.target.value})
  }

  onChangeNameadmin = (e) => {
    this.setState({ nameadmin: e.target.value})
  }
    onChangeEmail = (e) => {
    this.setState({ email: e.target.value})
  }

    onChangePasswords  = (e) => {
    this.setState({ passwords: e.target.value})
  }

  onChangeOpen  = (e) => {
    this.setState({ open: e.target.value})
  }

  handleClose  = (e) => {
    this.setState({ open: false })
  }
 


  onImageChange= (event) => {
    if(event.target.files && event.target.files[0]){
        let img =event.target.files[0];
        this.setState({
            image: URL.createObjectURL(img)
        });
    }
};

   

   handlerSubmit = async (event) => {
     event.preventDefault();
       const data = {

        nameschool: this.state.nameschool,
        pays : this.state.pays,
        ville: this.state.ville,
        quartier : this.state.quartier,
        nameadmin:this.state.nameadmin,
        email : this.state.email,
        passwords : this.state.passwords,
         image :this.state.image

       }

       
        try {
          this.setState({ open: true });

         
               if (data.nameschool=="" || data.pays=="" || data.ville=="" || data.quartier=="" || data.nameadmin=="" || data.email =="" || data.passwords=="" || data.passwords=="image" ) {                          
                     
                     alert("veillez remplir toute les informations ...");
                      this.setState({ open: false });
                     

               } else {

                    axios.post('http://localhost/back-end/school/add_school.php',data);
                    console.log(data);
                   window.location.href="admin/dashboard";
                    
               }
       
    
        } catch (error) {
            console.log(error);
            alert("error");
        }
 
  }
  


    
  
  render(){
     return(

         <div>

         <br></br>
         <Typography style={{color:'rgb(17, 141, 65)',fontWeight:'bold',fontSize:'20px'}}>CREATE A NEW SCHOOL</Typography> <br/>

         <div style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}>
            <div style={{backgroundColor:'rgb(17, 141, 65)', borderRadius:'10px 10px 0px 0px',}}>
             <Typography style={{color:'white',padding:'7px 0px 7px 30px',fontWeight:'bold'}}>School Details</Typography>
           </div>
        </div>
            

      <Paper>
           <form >

             
   <div style={{display:'flex',justifyContent:'space-evenly',width:'auto',backgroundColor:'white'}}>
     
          <div style={{width:'100px',textAlign:"center",padding:"30px 0px 0px 0px"}}>
                 <Typography style={{fontWeight:'bold'}}>&nbsp;&nbsp;&nbsp; Profil *</Typography><br/><br/>
                  <div>
                    <img style={{width:"100px",height:"110px",borderRadius:"100%",boxShadow:"1px 1px 2px 2px rgba(95, 99, 96, 0.267)"}} src={this.state.image} />
                    <br/><br/>
                       <input style={{color:"transparent"}} type="file"  name="myImage" onChange={this.onImageChange} />
                 </div>
            </div>
            

            <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>
                 <Typography style={{fontWeight:'bold',}}>  Name of School </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                 type="text" onChange={this.onChangeNameschool} value={this.state.nameschool} name="nameschool"  placeholder='name of school...'/>
                
                <Typography style={{fontWeight:'bold',}}>  Pays </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                   type="text" onChange={this.onChangePays} value={this.state.pays} name="pays"  placeholder='pays...'/>
                
                <Typography style={{fontWeight:'bold',}}>  Ville </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                      type="text" onChange={this.onChangeVille} value={this.state.ville} name="ville"  placeholder='ville...'/>

                <Typography style={{fontWeight:'bold',}}>  Quartier </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                   type="text" onChange={this.onChangeQuartier} value={this.state.quartier} name="quartier"  placeholder='quartier...'/>
                
              </div>  


              <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>    

                 <Typography style={{fontWeight:'bold'}}>Name of administrator</Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                   type="text" onChange={this.onChangeNameadmin} value={this.state.nameadmin} name="nameadmin" placeholder='Name of administrator...'/>

                <Typography style={{fontWeight:'bold'}}> Email </Typography>   
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                   type="text" onChange={this.onChangeEmail} value={this.state.email} name="email"  placeholder='email...'/>

                <Typography style={{fontWeight:'bold'}}> Password </Typography>   
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}} variant="standard"
                   type="text" onChange={this.onChangePasswords} value={this.state.passwords} name="passwords"  placeholder='passwords...'/>
               
                <Button               
                 style={{ backgroundColor:'rgb(17, 141, 65)',width:'100px',color:'white',padding:"10px 20px 10px 20px"}}
                  onClick = { this.handlerSubmit}
                  > 
                     Save
                  </Button>

             </div>

             </div>   
            </form>
         </Paper><br></br>
        <p> <Link to="/loginUser" style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",color:"rgb(17, 141, 65)",float:"right"}}> <b>Se connecte en tant que Utilisateurs?</b></Link></p><br></br>
         <p><Link to="./loginAdmin" style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",color:"rgb(17, 141, 65)",float:"right"}}> <b>Se connecte en tant que administrateur?</b></Link></p>
  
         <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={this.state.open}
   //     onChange={this.onChangeOpen}
        onClick={this.handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
     )
  }
}

export default CreateSchool;