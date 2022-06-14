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
        nom_class: mhs.nom_class,
        nombre_max : mhs.nombre_max,
        specificite : mhs.specificite,
        date_creation : mhs.date_creation
        
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
        axios.post('http://localhost/back-end/classes/get_id.php?id_class='+mhs.id_class);
        console.log(data);
    
       
      } catch (error) {
          alert("error");
        console.log(error);
  
      
    }
}
  const handleEditClick = () => {
    try{
      axios.post('http://localhost/back-end/classes/edit_classes.php?id_class='+mhs.id_class , data);
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
          <div className="signup">
                     <div className="content" >
                           <div>
                                <form  >
                                  <h5 style={{color:"rgb(17, 141, 65)",textAlign:"center"}}> MODIFIER LA CLASSE  </h5>
                                  <TextField type="text" value={data.nom_class} onChange={(e)=> handle(e)}  id="nom_class" style={{width:"100%"}} label="Nom classe"/>  <br/> <br/>
                                  <TextField type="number" value={data.nombre_max} onChange={(e)=> handle(e)}   id="nombre_max" style={{width:"100%"}} label="nombre max d'eleve"/>  <br/> <br/>
                                  <TextField type="text" value={data.specificite} onChange={(e)=> handle(e)} id="specificite" style={{width:"100%"}} label="specificite"/>  <br/> <br/>
                                  <TextField type="date"  value= {data.date_creation} onChange={(e)=> handle(e)} id="date_creation" style={{width:"100%"}} label="date creation"/><br/> <br/>
                           
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