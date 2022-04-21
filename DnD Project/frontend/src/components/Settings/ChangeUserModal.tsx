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
import {  useContext,useEffect,useRef } from "react";
import { modalContext } from './ModalContext';



export default function ChangeUserModal({propName}:any) {
  const [open, setOpen] = React.useState(false);

  const {username,oldUsername, setUsername, setOldUsername}= useContext(modalContext);
  

  const handleClickOpen = () => {
    setOpen(true);
    //setUsername(oldUsername);
    //setOldUsername(username);
    console.log(`Old username is ${oldUsername}`);
  };

  //Close modal without saving contents on input field
  const handleClose = () => {
    setOpen(false);
    setOldUsername(username);
    

    console.log(username);
  };

  //Close modal while saving contents of input field into database
  const handleSubmit = (e:any) => {
    setOpen(false);
    e.preventDefault();
    setUsername(username);
    if(username)
    {
       console.log(`Current username ${username} and old username was $`);
    }
    //console.log(value);
  };



  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <Edit/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Username</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To change your username, please enter the newly desired username in the field provided.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            fullWidth
            variant="standard"
            value={username}
          onChange={(e) => {
            setUsername(e.target.value);
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