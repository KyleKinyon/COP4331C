import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Edit } from "@mui/icons-material";
import {  useContext } from "react";
import { modalContext } from './ModalContext';


export default function ChangeFirstNameModal({propName}:any) {
  const [open, setOpen] = React.useState(false);

  const {password, setPassword}= useContext(modalContext);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //console.log(value);
  };

  const handleSubmit = (e:any) => {
    setOpen(false);
    e.preventDefault();
    if(password)
    {
       console.log(password);
    }
    //console.log(value);
  };


  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <Edit/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To change your password, please enter the newly desired password in the field provided.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}