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
import req from "../../utils/request";


export default function ChangeFirstNameModal({propName}:any) {
  const [open, setOpen] = React.useState(false);

  const {firstName, setFirst}= useContext(modalContext);
  

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
    if(firstName)
    {
       console.log(firstName);
       saveFirstName();
       //Call saveFirstName which will update database with new first name

    }
    //console.log(value);
  };

  const saveFirstName = async () => {
    try {
      //Pass in First name 
       await req.post("/user/changeName", {firstName});

      
      //setFirst(data.firstName);
      console.log("The first name was updated to " + firstName);

    } catch (error) {
      console.log("Issue replacing new username");
      console.error(error);
    }
  };


  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <Edit/>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change First Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To change your first name, please enter the newly desired first in the field provided.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="firstName"
            fullWidth
            variant="standard"
            value={firstName}
          onChange={(e) => {
            setFirst(e.target.value);
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