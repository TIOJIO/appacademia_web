import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import AlertDelete from './AlertDelete';
import AlertEdit from './AlertEdit';
import AlertCalender from './AlertCalender';
import Calender from './Calender/Calender';


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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomizedMenus({mhs , contact,refresh ,componentDidMount  }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
    setAnchorEl(null);
  };


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>

      <div
       aria-controls="customized-menu"
       aria-haspopup="true"
       variant="contained"
       sx={{backgroundColor:'white'}}
       onClick={handleClick}
      >
        <MoreVertIcon />
      </div>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      
          <AlertEdit
           handleClose ={handleClose}
            setAnchorEl ={setAnchorEl}
             mhs={mhs}
             refresh={refresh}
             componentDidMount={componentDidMount}
             
          />

        <AlertDelete
           handleClose ={handleClose}
            setAnchorEl ={setAnchorEl}
             mhs={mhs}
             refresh={refresh}
             
          />

      <AlertCalender
           handleClose ={handleClose}
            setAnchorEl ={setAnchorEl}
             mhs={mhs}
             refresh={refresh}
             
          />
       
     
      
      <button className="button" onClick={handleClickOpen}>calender</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose1}
        aria-describedby="alert-dialog-slide-description"      >
        <DialogContent  >
          <DialogContentText id="alert-dialog-slide-description">
             <div style={{width:"100%"}} >   <Calender/> </div>
                   
          </DialogContentText>
        </DialogContent>
      </Dialog>
  
      </StyledMenu>
    </div>
  );
}

/*
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Login from '../Login/Login'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <button className="button" onClick={handleClickOpen}>Connexion</button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"      >
        <DialogContent  >
          <DialogContentText  id="alert-dialog-slide-description">
                      <Login/>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      
    </div>
  );
}*/
