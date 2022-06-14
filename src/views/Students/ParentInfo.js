/*import * as React from 'react';
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
      this.onChangeNames = this.onChangeNames.bind(this);
      this.onChangeMatricule = this.onChangeMatricule.bind(this);
      this.onChangeLieunaiss = this.onChangeLieunaiss.bind(this);
      this.onChangeDatnaiss = this.onChangeDatnaiss.bind(this);
      this.onChangeClassroom = this.onChangeClassroom.bind(this);
      this.onImageChange=this.onImageChange.bind(this);

            
  this.state ={
     names : '',
      matricule: '',
      classroom : '',
      lieunaiss : '',
      datnaiss :'',
      image :null,
     
  }

   }




    onChangeNames = (e) => {
    this.setState({ names: e.target.value})
  }

  onChangeMatricule = (e) => {
    this.setState({ matricule: e.target.value})
  }



    onChangeClassroom = (e) => {
    this.setState({ classroom: e.target.value})
  }

  onChangeLieunaiss = (e) => {
    this.setState({ lieunaiss: e.target.value})
  }


  onChangeDatnaiss = (e) => {
    this.setState({ datnaiss: e.target.value})
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
          names  : this.state.names,
          matricule : this.state.matricule,
          classroom : this.state.classroom,
          lieunaiss : this.state.lieunaiss,
          datnaiss : this.state.datnaiss,
          image : this.state.image
       }
       
        try {
        axios.post('http://localhost/back-end/students/add_students.php',data);
        console.log(data);

       this.setState({
 
             names : '',
             matricule: '',
            classroom : '',
            lieunaiss : '',
            datnaiss : '',
             image : null,
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

         <Typography style={{color:'rgb(17, 141, 65)',fontWeight:'bold',fontSize:'20px'}}> Informations sur les parents</Typography> <br/>

         <div style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}>
            <div style={{backgroundColor:'rgb(17, 141, 65)', borderRadius:'10px 10px 0px 0px',}}>
             <Typography style={{color:'white',padding:'7px 0px 7px 30px',fontWeight:'bold'}}>Veillez remplir toute les informations</Typography>
           </div>
        </div>
            

      <Paper>
           <form >

             
   <div style={{display:'flex',justifyContent:'space-evenly',width:'auto',backgroundColor:'white'}}>
     
         
            

            <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>
                 <Typography style={{fontWeight:'bold',}}>Nom Pere </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled"
                 type="text" onChange={this.onChangeNames} value={this.state.names} name="Name"  placeholder='nom...'/>
                
                <Typography style={{fontWeight:'bold',}}> Telephone </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled" 
                   type="text" onChange={this.onChangeMatricule} value={this.state.matricule} name="Matricule"  placeholder='tel...'/>
                
                <Typography style={{fontWeight:'bold',}}> Nationnalite </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled" 
                   type="text" onChange={this.onChangeMatricule} value={this.state.matricule} name="Matricule"  placeholder='nationnalite...'/>

                <Typography style={{fontWeight:'bold',}}>  Residence </Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled"
                      type="text" onChange={this.onChangeClassroom} value={this.state.classroom} name="Classroom"  placeholder='residence...'/>

              
              </div>  


              <div style={{width:'450px',padding:'30px 0px 7px 0px',lineHeight:'80px'}}>    

                 <Typography style={{fontWeight:'bold'}}>Nom Mere</Typography>
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled" 
                   type="text" onChange={this.onChangeLieunaiss} value={this.state.lieunaiss} name="lieunaiss" placeholder=' nom...'/>

                <Typography style={{fontWeight:'bold'}}> Telephone </Typography>   
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled"
                   type="text" onChange={this.onChangeDatnaiss} value={this.state.datnaiss} name="datnaiss"  placeholder=' tel...'/>
               
                
               <Typography style={{fontWeight:'bold'}}> Nationnalite </Typography>   
                <TextField
                  style={{  width: '100%',borderRadius:'20px',backgroundColor:'white'}}  variant="filled"
                   type="text" onChange={this.onChangeDatnaiss} value={this.state.datnaiss} name="datnaiss"  placeholder=' nationnalite...'/>
               

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
           
            
        </div>
     )
  }
}

export default AddTeacher;