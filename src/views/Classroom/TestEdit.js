import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import  DialogTitle from '@mui/material/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@mui/material/Slide';
import {Paper,Container} from '@material-ui/core';
import TestEditContain from  './TestEditContain';

const Transition = React.forwardRef(function Transition(props, ref) {
  return < Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ mhs  ,setAnchorEl }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      
      <Button 
           onClick={ handleClickOpen } 
          >
            Edit
          </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"      >
        <DialogContent  >
          <DialogContentText  id="alert-dialog-slide-description">
              <TestEditContain
                  mhs={mhs}
              />      
          </DialogContentText>
        </DialogContent>
      </Dialog>

      
    </div>
  );
}
