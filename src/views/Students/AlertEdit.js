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
        names : mhs.names,
        matricule: mhs.matricule,
        classroom : mhs.classroom,
        lieunaiss : mhs.lieu,
        datnaiss : mhs.datnaiss,
        image : mhs.image
        
    });
    
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };


 const onImageChange= (event) => {
    if(event.target.files && event.target.files[0]){
        let img =event.target.files[0];
        setData({
            image: URL.createObjectURL(img)
        });
    }
};

  const handle = (e) =>{

    const  newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(newdata)


};
 
  componentDidMount = () => {
    try{
        axios.post('http://localhost/back-end/students/get_id.php?id='+mhs.id);
        console.log(data);
    
       
      } catch (error) {
          alert("error");
        console.log(error);
  
      
    }
}
  const handleEditClick = () => {
    try{
      axios.post('http://localhost/back-end/students/edit_students.php?id='+mhs.id , data);
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
                                  <h6 style={{color:"rgb(17, 141, 65)",textAlign:"center"}}> UPDATE STUDENTS  </h6>
                                  <TextField type="text" value={data.names} onChange={(e)=> handle(e)}   id="names"  style={{width:"100%"}} label="Name"/>  <br/> <br/>
                                  <TextField type="text" value={data.matricule} onChange={(e)=> handle(e)} id="matricule" style={{width:"100%"}} label="matricule"/>  <br/> <br/>
                                  <TextField type="text"  value= {data.classroom} onChange={(e)=> handle(e)} id="classroom" style={{width:"100%"}} label="classroom"/><br/> <br/>
                                  <TextField type="text"  value={data.lieunaiss} onChange={(e)=> handle(e)}  id="lieu" style={{width:"100%"}} label="lieux naissance"/> <br/><br/> 
                                  <TextField  type="text" value={data.datnaiss} onChange={(e)=> handle(e)}      id="datnaiss" style={{width:"100%"}} label=" date naissance"/><br/><br/>


                                 </form>  

                                 
                                  <div>
                                    <img style={{width:"100px",height:"110px",borderRadius:"100%",boxShadow:"1px 1px 2px 2px rgba(95, 99, 96, 0.267)"}} src={data.image} />
                                    <br/><br/>
                                    <input style={{color:"transparent"}} type="file" id='image' name="myImage" onChange={(e)=> onImageChange(e)}   />
                                  </div>                           
                        
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