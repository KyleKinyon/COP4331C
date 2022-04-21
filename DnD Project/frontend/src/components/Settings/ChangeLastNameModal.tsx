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

  const {lastName, setLast}= useContext(modalContext);
  

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
    if(lastName)
    {
       console.log(lastName);
       saveLastName();
    }
    //console.log(value);
  };

  const saveLastName = async () => {
    try {
      //Pass in First name 
       await req.post("/user/changeName", {lastName});

      
      //setFirst(data.firstName);
      console.log("The first name was updated to " + lastName);

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
        <DialogTitle>Change Last Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To change your last name, please enter the newly desired last name in the field provided.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="lastName"
            fullWidth
            variant="standard"
            value={lastName}
          onChange={(e) => {
            setLast(e.target.value);
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