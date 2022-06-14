/*\import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}*/


import React , {Component} from 'react'
import axios from 'axios'
import {Typography,Button}  from '@material-ui/core';
import {TextField, Grid,Container,Paper} from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Toast from './Toast'
import {useHistory} from 'react-router-dom';




class AddTeacher extends Component {
   
   constructor(props){
      super(props);
      this.onChangeNom_class = this.onChangeNom_class.bind(this);
      this.onChangeNombre_max = this.onChangeNombre_max.bind(this);
      this.onChangeSpecificite = this.onChangeSpecificite.bind(this);
      this.onChangeDate_creation = this.onChangeDate_creation.bind(this);

            
  this.state ={
    nom_class: '',
    nombre_max : '',
    specificite : '',
    date_creation : ''
     
  }

}


  onChangeNom_class = (e) => {
    this.setState({ nom_class: e.target.value})
  }

    onChangeNombre_max = (e) => {
    this.setState({ nombre_max: e.target.value})
  }


    onChangeSpecificite = (e) => {
    this.setState({ specificite: e.target.value})
  }

    onChangeDate_creation = (e) => {
    this.setState({ date_creation: e.target.value})
  }

 
   

   handlerSubmit = async (event) => {
      
     event.preventDefault();
       const data = {
        nom_class : this.state.nom_class,
        nombre_max  : this.state.nombre_max,
        specificite : this.state.specificite,
        date_creation : this.state.date_creation,
       }
       
        try {
        axios.post('http://localhost/back-end/classes/add_classes.php',data);
        console.log(data);

       this.setState({
        nom_class: '',
        nombre_max : '',
        specificite : '',
        date_creation : '',
            
       })
       alert("success");
       
    
        } catch (error) {
            console.log(error);
            alert("error");
        }
 
  }
  


    
  
  render(){
     return(

         <div>

         <Typography style={{color:'rgb(17, 141, 65)',fontWeight:'bold',fontSize:'20px'}}> Add New Teacher</Typography> <br/>

         <div style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}>
            <div style={{backgroundColor:'rgb(17, 141, 65)', borderRadius:'10px 10px 0px 0px',}}>
             <Typography style={{color:'white',padding:'7px 0px 7px 30px',fontWeight:'bold'}}>Personal Detailes</Typography>
           </div>
        </div>
            

      <Paper>
           <form >

             
   <div style={{display:'flex',justifyContent:'space-evenly',width:'auto',backgroundColor:'white'}}>
     
        
            

            <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>
                 <Typography style={{fontWeight:'bold',}}>  Nom  de la classe </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled"
                 type="text" onChange={this.onChangeNom_class} value={this.state.nom_class} name="nom_class"  placeholder='names...'/>
                
                <Typography style={{fontWeight:'bold',}}>  Nombre Maximun d'eleves </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled" 
                   type="number" onChange={this.onChangeNombre_max} value={this.state.nombre_max} name="nombre"  placeholder='nombre...'/>
                
              
              </div>  


              <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>    

                 <Typography style={{fontWeight:'bold'}}>specificite</Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled" 
                   type="text" onChange={this.onChangeSpecificite} value={this.state.specificite} name="specificite" placeholder='specificite...'/>

                <Typography style={{fontWeight:'bold'}}> Date de Creation </Typography>   
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled"
                   type="Date" onChange={this.onChangeDate_creation} value={this.state.date_creation} name="date_creation"  placeholder='phone...'/>
               
               <Button
                  style={{ backgroundColor:'rgb(17, 141, 65)',width:'100px',color:'white'}}
                  type='submit' 
                  onClick = { this.handlerSubmit}
                  > 
                     SAVE
                  </Button> 

             </div>

             </div>   
            </form>
         </Paper>
              <Toast/>
            
        </div>
     )
  }
}

export default AddTeacher;