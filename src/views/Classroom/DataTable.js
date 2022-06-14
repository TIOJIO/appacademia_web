/*import React from 'react'
import {Link} from 'react-router-dom'

function DataTable ({mhs , refresh}) {
    return(
       <tr>
           <td>{mhs.usernames} &nbsp;&nbsp; {mhs.names}</td>
           <td>{mhs.email}</td>
           <td>{mhs.password}</td>
           <td>{mhs.classroom}</td>
           <td>{mhs.phone}</td>
       </tr>
    )
} 

export default DataTable;*/

import React, {useState} from 'react';
import Deroul from './Deroul';
import {Avatar} from '@material-ui/core';




const Element = ({mhs , key=mhs.id , refresh , componentDidMount,contact ,handleEditClick,handleDeleteClick}) =>  {
     
  return (


<tr style={{textAlign:"justify"}}>

 <td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",textAlign:"center",padding:"15px 0px 15px 0px"}}>
     {mhs.usernames}&nbsp;&nbsp; {mhs.date_creation}
 </td>

 <td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",color:"rgb(17, 141, 65)",textAlign:"center"}}>{mhs.nombre_max}</td> 
 <td style={{textAlign:"center",borderBottom: " 1px solid #ddd"}}>
 <p style={{color:"white",width:"auto",marginTop:"15px",padding:"5px 0px 5px 0px",borderRadius:"10px",backgroundColor:"rgb(17, 141, 65)"}}> 
   {mhs.nom_class}
   </p>
   </td> 

   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}> {mhs.nombre_max}</td> 
   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}> VOIR ELEVES</td> 



 <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}>
 <Deroul
     mhs={mhs} 
      key= {mhs.id} 
    contact={contact}
     refresh={refresh}
    componentDidMount={componentDidMount}
    handleEditClick={handleEditClick}
    handleDeleteClick={handleDeleteClick}
    /> 
  </td> 

</tr> 

         
   
  );
    
}

export default Element;


