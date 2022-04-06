import * as React from "react";
import { Box, Button, TextField, FormLabel, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { io } from "socket.io-client";
import {useState} from 'react';

export default function TestChat() {
    const [value, setValue] = useState("");
    const textInput = React.useRef(null);
    const socket = io('http://localhost:8080');

    //WebSocket event that emits a console logged message to all users
    socket.on('message', text => {
      console.log("The message was "+ "'" + text + "'");
      setValue('');
    });

  //Create button to test function (will eventually be sending messages)
    const SendButton = () => (
    <IconButton onClick = {() => socket.emit('message', value) }>
      <SendIcon />
    </IconButton>
    );

  return (
    <>
      <Box sx={{ flexGrow: 1, width: 1, height: 1 }}>

        <TextField
          id="standard-basic"
          label="Message"
          variant="standard"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          InputProps={{ endAdornment: <SendButton /> }}
        />
      </Box>
    </>
  );
}
