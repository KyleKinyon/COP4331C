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
import { useContext, useState } from "react";
import { modalContext } from './ModalContext';
import req from "../../utils/request";
import { InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

export default function ChangeFirstNameModal({propName}:any) {
  const [open, setOpen] = React.useState(false);

  const {password, setPassword}= useContext(modalContext);
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

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
      savePassword();
    }
    //console.log(value);
  };

  const savePassword = async () => {
    try {
      //Pass in First name 
       await req.post("/user/changePassword", {newPassword: password});

      
      //setFirst(data.firstName);
      console.log("The password was updated to " + password);

    } catch (error) {
      console.log("Issue replacing new password");
      console.error(error);
    }
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
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="standard"
            value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
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