import React , { useState,useContext} from 'react'
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
import axios from 'axios';
import Role from './Role';
import logo from './logo.jpg';






    const Singup = (props) => {

      const [data ,setData]= React.useState({
       usernames: '' ,
        email:  '',
        passwords : '' ,   
        confpasswords : ''    
    });
      
      
    const handle = (e) =>{
      const  newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)
  };

  const objet = {
    usernames : data.usernames,
    email : data.email,
    password : data.passwords,
 
 }
     
    const history=useHistory(); 
      const mySubmiCtHandler = e => {
         axios.post('http://localhost/back-end/login/login.php',JSON.stringify(data))
        .then((res) => res.json())
         .then((response)=>{
          
           alert( JSON.stringify(response));

          /* if (response=='testok') {
            alert('page suivante');
           } else {
            alert('verivier vos information');
           }*/
         
        }).catch((error)=>{
           console.log(error);
           alert('error verification');
        })
       
      }


              return(
              
                <div className="signup">
                    <br></br>
                    
                    <Paper>
                     <div className="content" >
                           <div>
                          
                             <form  >
                             <br></br>
                                 <div style={{textAlign:"center",display:"flex",marginLeft:"100px"}}>
                                     <img style={{width:'60px',height:"60px"}} src={logo}/>
                                     <p style={{fontFamily: "Times New Roman, Times, serif",fontSize:"20px",marginTop:"10px",color:"rgb(17, 141, 65)"}}><b>AppAcademia</b></p>
                                 </div>
                                <br></br>
                                  <h3 style={{fontFamily: "Times New Roman, Times, serif",color:"rgb(17, 141, 65)",textAlign:"center"}}> SE CONNECTER</h3> 
                                  <p style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",textAlign:"center"}}> veillez remplir vos information pour vous connectez !</p>

                                  <TextField 
                                   value={data.usernames} onChange={(e)=> handle(e)}   id="usernames"
                                   type="text"  style={{width:"100%"}} placeholder="Name..." />  <br/> <br/><br/>

                                  <TextField 
                                     value={data.email} onChange={(e)=> handle(e)}  id="email"
                                      type="text" style={{width:"100%"}} placeholder="Email..."/><br/> <br/><br/>


                                    <Role/>
                                        <br></br>  <br></br>
                                   <TextField  
                                   value={data.passwords} onChange={(e)=> handle(e)}  id="passwords"
                                    type="password"  style={{width:"100%"}} placeholder="password..."/> <br/><br/> <br/> 
                                   
                                    <div style={{display:'flex'}}>
                                      <TextField  
                                      value={data.confpasswords} onChange={(e)=> handle(e)}  id="confpasswords"
                                      type="password" style={{width:"100%"}} placeholder="Confirm password..."/><br/><br/>
                                   </div>
                                   <br/><br/>
                                 
                                   <button 
                                       onClick={mySubmiCtHandler}
                                       style={{backgroundColor:"rgb(17, 141, 65)",fontFamily: "Times New Roman, Times, serif",color:"white",border:'none',borderRadius:'5px',height:"40px",width:"150px",float:"left"}}>
                                      SE CONNECTER
                                    </button>
                                    <br/><br/><br/><br/>


                                    <Link to="./loginAdmin" style={{fontFamily: "Times New Roman, Times, serif",fontSize:"15px",color:"rgb(17, 141, 65)",float:"right"}}><b>Se connecte en tant que administrateur?.</b></Link>
                                 </form>    
                             
                         </div> 

                     </div> <br/><br/>
                     </Paper>  
                     <br/><br/>

                 </div>
                
              )
    }



export default Singup;

/*
import React, { Component } from 'react';
import { View, Pressable, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

export default class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : '',
      check_textInputChange : false,
      secureTextEntry : true,
    };
  }

  InsertRecord=()=>{
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length==0) || (Password.length==0)){
      alert("Required Field Is Missing!!!");
    }else{
      var APIURL = "http://10.0.2.2:80/SignIn/login.php";

      var headers = {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      };
            
      var Data ={
        Email: Email,
        Password: Password
      };

      fetch(APIURL,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Data)
      })
      .then((Response)=>Response.json())
      .then((Response)=>{
        alert(Response[0].Message)
        if (Response[0].Message == "Success") {
          console.log("true")
          this.props.navigation.navigate("HomeScreen");
        }
        console.log(Data);
      })
      .catch((error)=>{
        console.error("ERROR FOUND" + error);
      })
    }
  }

  updateSecureTextEntry(){
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter Email"
              placeholderTextColor="#ff0000"
              style={styles.textInput}
              onChangeText={email=>this.setState({email})}
              />
          </View>

          <View style={styles.action}>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor="#ff0000"
              style={styles.textInput}
              secureTextEntry={this.state.secureTextEntry ? true : false}
              onChangeText={password=>this.setState({password})}
              />
                <TouchableOpacity
                  onPress={this.updateSecureTextEntry.bind(this)}>
                  {this.state.secureTextEntry ?
                  <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
                  />
                :  
                  <Feather
                  name="eye"
                  color="black"
                  size={20}
                  />
                }
                </TouchableOpacity>  
          </View>


            

                <View style={styles.loginButtonSection}>    
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      this.InsertRecord()
                    }}
                    >
                      <Text style={styles.text}>Sign In</Text>
                  </Pressable>
                </View>

                <View style={styles.loginButtonSection}>
                  <Pressable
                    style={styles.loginButton} 
                    onPress={()=>{
                      // this.InsertRecord()
                    }}
                    >
                      <Text style={styles.text}>Create new Account</Text>
                    </Pressable>
                  </View>
      </View>
    );
  }
}

*/