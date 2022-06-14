import React, {Component} from "react";
import API  from '../axios/Api';
import { makeStyles } from '@material-ui/core/styles';
import TestCount from './TestCount';
import DataTable from "./DataTable";
import TeachCount from "../Dashboard_/TeachCount"
import axios from 'axios'
import jsPDF from "jspdf";
import {Typography,Button}  from '@material-ui/core';
import "jspdf-autotable";


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

   exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Liste Enseignants";
    const headers = [["Nom", "Email", "Classe", "Mots de pass", "Telephone"]];

    const data = this.state.mhs.map(mhs=> [mhs.usernames, mhs.email, mhs.classroom, mhs.passwords, mhs.phone]);

    let content = {
      startY: 50,
      head: headers,
      body: data
    };

    doc.text(title, marginLeft, 40);
    doc.autoTable(content);
    doc.save("ListeEnseigants.pdf")
  }
   
    render(){
       const renderData = this.state.mhs.map(mhs => {
         return (

                  <DataTable mhs={mhs}  key={mhs.id} refresh={this.componentDidMount}/>

         
         )
       });

       
       
       
       return(
           <div>


                  <button 
                  onClick={() => this.exportPDF()}
                  >
                     Telecharger la Liste
                  </button>
     
              <table  style={{borderCollapse: "collapse",width:"100%"}}>
            <thead>
                <tr style={{}}>
                      <td style={{fontFamily: "Times New Roman, Times, serif",fontWeight:"bold",textAlign:"center",padding:"10px 0px 10px 0px"}}>Teachers </td>
                </tr>
                 
                <tr style={{backgroundColor:"rgb(17, 141, 65)"}}>
                <th  style={{padding:"5px"}} > </th> 
                <th style={{ fontFamily: "Times New Roman, Times, serif",color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}} >Name </th> 
                <th style={{ fontFamily: "Times New Roman, Times, serif",color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}} >Email </th> 
                <th style={{ fontFamily: "Times New Roman, Times, serif",color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}}>Classroom </th> 
                <th style={{fontFamily: "Times New Roman, Times, serif", color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}}>Password</th> 
                <th style={{fontFamily: "Times New Roman, Times, serif", color:'white', fontWeight:"bold", textAlign:"center", padding:"10px"}}>Phone </th> 
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
                        <td style={{ fontFamily: "Times New Roman, Times, serif",fontWeight:"bold",display:'flex', textAlign:"center", padding:"10px"}}>
                          Teacher :  &nbsp;&nbsp; <TeachCount/>
                         </td>
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







