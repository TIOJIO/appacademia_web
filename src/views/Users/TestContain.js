import React, {Component} from "react";
import API  from '../axios/Api';
import { makeStyles } from '@material-ui/core/styles';
import TestCount from './TestCount';
import DataTable from "./DataTable"
import axios from 'axios'


const useStyles = makeStyles({
  main : {
    color:'white',
    fontWeight:"bold",
    textAlign:"center",
    padding:"10px"
  }

})


 class Views extends Component {
   state ={
     mhs :[]
   }
   componentDidMount = async ()=>{
      await axios.get("http://localhost/back-end/Teachers/view_teachers.php")
      .then(response => this.setState({
        mhs: response.data
      }))
   } 
    render(){
       const renderData = this.state.mhs.map(mhs => {
         return (

                  <DataTable mhs={mhs}  key={mhs.id} refresh={this.componentDidMount}/>

         
         )
       });

       
       
       
       return(
           <div>
              <table  style={{borderCollapse: "collapse",width:"100%"}}>
            <thead>
                <tr style={{}}>
                      <td style={{fontWeight:"bold",textAlign:"center",padding:"10px 0px 10px 0px"}}>Teachers </td>
                </tr>
                 
                <tr style={{backgroundColor:"rgb(17, 141, 65)"}}>
                <th  style={{padding:"5px"}} > </th> 
                <th style={{ color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}} >Name </th> 
                <th style={{ color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}} >Email </th> 
                <th style={{ color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}}>Classroom </th> 
                <th style={{ color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}}>Password</th> 
                <th style={{ color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}}>Phone </th> 
                <th > </th> 
                </tr> 
                
            </thead>
                  <tbody>
                      {renderData}

                      <tr><td></td></tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{ fontWeight:"bold", textAlign:"center", padding:"10px"}}>Teacher :</td>
                      </tr>
                      </tbody>
             </table>
                   
           </div>
       )
    }
}
 export default Views;















/*
import React, {useState} from 'react';
import Deroul from './Deroul';
import {Avatar} from '@material-ui/core';




const Element = ({ contact ,handleEditClick,handleDeleteClick }) =>  {
 
  return (

<tr style={{textAlign:"justify"}}>
<td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",textAlign:"center",padding:"15px 0px 15px 0px"}}>{contact.fullName} </td> 
 <td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",color:"rgb(17, 141, 65)",textAlign:"center"}}>{contact.address} </td> 
 <td style={{textAlign:"center",borderBottom: " 1px solid #ddd"}}>
 <p style={{color:"white",width:"auto",padding:"5px 0px 5px 0px",borderRadius:"10px",backgroundColor:"rgb(17, 141, 65)"}}> 
   {contact.phoneNumber} 
   </p> 
   </td> 

   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}>Administrator </td> 
   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}> {contact.email}</td> 



 <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}>
 <Deroul
    contact={contact}
    handleEditClick={handleEditClick}
    handleDeleteClick={handleDeleteClick}
    /> 
  </td> 

</tr> 

         
   
  );
    
}

export default Element;*/







