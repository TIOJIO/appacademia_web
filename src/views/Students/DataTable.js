

import React, {useState} from 'react';
import Deroul from './Deroul';
import {Avatar} from '@material-ui/core';




const Element = ({mhs , key=mhs.id , refresh , componentDidMount,contact ,handleEditClick,handleDeleteClick}) =>  {
 
  return (


<tr style={{textAlign:"justify"}}>
 <td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",textAlign:"center",padding:"15px 0px 15px 0px"}}>
     <Avatar style={{marginLeft:"20px"}} > 
     <img style={{width:'40px'}} src={mhs.image} />

      </Avatar> 
 </td>
 <td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",textAlign:"center",padding:"15px 0px 15px 0px"}}>
      {mhs.names}
 </td>

 <td style={{fontWeight:"bold",borderBottom: " 1px solid #ddd",color:"rgb(17, 141, 65)",textAlign:"center"}}> {mhs.matricule} </td> 
 <td style={{textAlign:"center",borderBottom: " 1px solid #ddd"}}>
 <p style={{color:"white",width:"auto",padding:"5px 0px 5px 0px",borderRadius:"10px",backgroundColor:"rgb(17, 141, 65)"}}> 
 {mhs.classroom}
   </p> 
   </td> 

   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}>Administrator </td> 
   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}>{mhs.datnaiss}</td> 
   <td style={{textAlign:"center",borderBottom: " 1px solid #ddd",padding:"15px 0px 15px 0px"}}> {mhs.lieu}</td> 



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


