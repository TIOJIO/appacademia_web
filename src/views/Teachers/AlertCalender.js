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
import CreateIcon from '@mui/icons-material/Create';
import axios from 'axios';
import Calender from './Calender/Calender';
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
        axios.post('http://localhost/back-end/Teachers/get_id.php?id='+mhs.idensei);
        console.log(data);
    
       
      } catch (error) {
          alert("error");
        console.log(error);
  
      
    }
}
  const handleEditClick = () => {
    
      setOpen(false);
      
 
  };

  
  
  return (
    <div>

    <StyledMenuItem  onClick={handleClickOpen} >
          <ListItemIcon>
            <CreateIcon fontSize="small" />
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
                    <Calender/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        
        <Button 
         style={{backgroundColor:'rgb(17, 141, 65)',fontFamily: "Times New Roman, Times, serif",width:'100px',color:'white'}}
         onClick={ handleEditClick } autoFocus
        >
          saves
        </Button>
      </DialogActions>
      </Dialog>
    </div>
  );
}