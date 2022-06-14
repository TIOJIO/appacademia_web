import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import '../App.css'
import {TextField, Grid,Container,Typography,Paper} from '@material-ui/core';





const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: "rgb(17, 141, 65)",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function AlertDialog({ mhs  ,setAnchorEl,refresh, componentDidMount }) {

    const [data ,setData]= React.useState({
        usernames: mhs.usernames,
        names : mhs.names,
        email: mhs.email,
        passwords : mhs.passwords,
        classroom : mhs.classroom,
        phone : mhs.phone
        
    });
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handle = (e) =>{
    const  newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)
};
 
  componentDidMount = () => {
    try{
        axios.post('http://localhost/back-end/Teachers/get_id.php?id='+mhs.id);
        console.log(data);
    
       
      } catch (error) {
          alert("error");
        console.log(error);
  
      
    }
}
  const handleEditClick = () => {
    try{
      axios.post('http://localhost/back-end/Teachers/edit_teachears.php?id='+mhs.id , data);
      console.log(data);
      setOpen(false);
      
      return refresh();
     
    } catch (error) {
        alert("error");
      console.log(error);

    
  }
  };

  
  
  return (
    <div>

    <StyledMenuItem  onClick={handleClickOpen} >
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </StyledMenuItem>
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className="signup">
                     <div className="content" >
                           <div>
                                <form  >
                                  <h3 style={{color:"rgb(17, 141, 65)",textAlign:"center"}}> UPDATE USER  </h3>
                                  <TextField type="text" value={data.usernames} onChange={(e)=> handle(e)}  id="usernames" style={{width:"100%"}} label="Username"/>  <br/> <br/>
                                  <TextField type="text" value={data.names} onChange={(e)=> handle(e)}   id="names" style={{width:"100%"}} label="Name"/>  <br/> <br/>
                                  <TextField type="text" value={data.email} onChange={(e)=> handle(e)} id="email" style={{width:"100%"}} label="Email"/>  <br/> <br/>
                                  <TextField type="text"  value= {data.passwords} onChange={(e)=> handle(e)} id="passwords" style={{width:"100%"}} label="Password"/><br/> <br/>
                                  <TextField type="text"  value={data.classroom} onChange={(e)=> handle(e)}  id="classroom" style={{width:"100%"}} label="Classroom"/> <br/><br/> 
                                  <TextField  type="text" value={data.phone} onChange={(e)=> handle(e)}      id="phone" style={{width:"100%"}} label=" Phone"/><br/><br/>
                           
                                 </form>                             
                        
                         </div> 

                     </div>   
                 </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
        <Button 
         style={{backgroundColor:'rgb(17, 141, 65)',fontFamily: "Times New Roman, Times, serif",width:'100px',color:'white'}}
         onClick={ handleEditClick } autoFocus
        >
          save
        </Button>
      </DialogActions>
      </Dialog>
    </div>
  );
}