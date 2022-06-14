import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Login from './Login'

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
      <div style={{backgroundColor:'rgb(214, 212, 212)'}}>

    <Container style={{width:'500px'}}  >
        <div className="title">
          <h1> Login to Admin</h1>
        </div>
       <Paper>
          <Login/>
       </Paper>

    </Container>
    </div>
  );
}
