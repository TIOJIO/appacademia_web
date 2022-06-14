import React, {useState , Fragment } from 'react'
import {nanoid} from 'nanoid';
 import TestContain from './TestContain';
import TestEdit from './TestEdit';
import {Paper,Container} from '@material-ui/core';
import setOpen from './AlertDelete'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import TestImage from "./TestImage";
import AddTeacher from './AddTeacher';
import TestCount from './TestCount';
import Calender from './Calender/Calender';
import Axios from 'axios'

const useStyles = makeStyles({
  main : {
    color:'white',
    fontWeight:"bold",
    textAlign:"center",
    padding:"10px"
  }

})

const App = () => {

 
  const data = [
    {
      "id" : 1,
    "fullName" : "mouafo paul",
    "address" : "#12345665",
    "phoneNumber" : "SIL",
    "email" : "moafo@gmail0.com"
  },
  {
    "id" : 2,
  "fullName" : "tadjouaa jacque",
  "address" : "#98745678",
  "phoneNumber" : "CM1",
  "email" : "moafo@gmail0.com"
},
{
  "id" : 3,
"fullName" : "tadjouaa jacque",
"address" : "#98745678",
"phoneNumber" : "CM1",
"email" : "moafo@gmail0.com"
},
{
  "id" : 4,
"fullName" : "tadjouaa jacque",
"address" : "#98745678",
"phoneNumber" : "CM1",
"email" : "moafo@gmail0.com"
},
{
  "id" : 5,
"fullName" : "tadjouaa jacque",
"address" : "#98745678",
"phoneNumber" : "CM1",
"email" : "moafo@gmail0.com"
},
{
  "id" : 6,
"fullName" : "tadjouaa jacque",
"address" : "#98745678",
"phoneNumber" : "CM1",
"email" : "moafo@gmail0.com"
},


  
  ]

  const [contacts , setContacts]=useState(data);
  const [editContactId , setEditContactId] =useState(null);



  const [addFormData , setAddFormData]=useState({
       fullName:"",
       address:"",
       phoneNumber:"",
       email:"",
  });

  const [editFormData , setEditFormData] =useState({
    fullName:"",
    address:"",
    phoneNumber:"",
    email:"",
  })


  const handleAddFormChange = (event) =>{
      event.preventDefault();
      
      const  fieldName = event.target.getAttribute("name");
      const  fieldValue = event.target.value;
      const  newFormData = {...addFormData};
      newFormData[fieldName]=fieldValue;
      setAddFormData(newFormData);
  };

  const  handleEditFormChange = (event) => {
    event.preventDefault();
    const  fieldName = event.target.getAttribute("name");
    const  fieldValue = event.target.value;
    const  newFormData = {...editFormData};
    newFormData[fieldName]=fieldValue;

    setEditFormData(newFormData);

  }

  const handleAddFormSubmit = (event) =>{
    event.preventDefault();
     const newContact = {
       id:nanoid() ,
       fullName: addFormData.fullName,
       address: addFormData.address,
       phoneNumber: addFormData.phoneNumber,
       email: addFormData.email,
     };
     const newContacts = [...contacts ,newContact  ];
     setContacts(newContacts); 
     event.target.getAttribute("name");
     event.target.value="";

  };

  const handleEditFormSubmit = (event) =>{
    event.preventDefault();

    const editedContact = {
      id:editContactId.id,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }
    const newContacts = [...contacts ];
    const  index = contacts.findIndex((contact) => contact.id === editContactId)
   
    newContacts[index]=editedContact;
  setContacts(newContacts);
  setEditContactId(null);
  }

  const handleEditClick = (event ,contact) =>{
    event.preventDefault();
    
    setEditContactId(contact.id);

    const  formValue = {
      fullName:contact.fullName,
      address: contact.address,
       phoneNumber: contact.phoneNumber,
       email: contact.email,
    }
    setEditFormData(formValue);
  };
  const handleCancelClick = () =>{
    setEditContactId(null);
    
  }

  const handleDeleteClick = (key) =>{
    
    const newContacts=[...contacts];
    const  index = contacts.findIndex((contact) => contact.id === contactId)
    newContacts.splice(index,1);
    setContacts(newContacts);
    
  }

  const Total = (contacts) =>{
    const to=contacts.length;

  }
  const nombre=  contacts.length ;
  const [nbr , setNbr] =useState(nombre);

  const classes = useStyles();
    return (
        <div>


     <Paper>  
         <TestContain/> 
     </Paper>
       <br></br><br></br>
      

       <AddTeacher
           
           handleAddFormSubmit={handleAddFormSubmit}
           handleAddFormChange={handleAddFormChange}
       />
      
        <Calender/>

        
        </div>
    )
}

export default App;