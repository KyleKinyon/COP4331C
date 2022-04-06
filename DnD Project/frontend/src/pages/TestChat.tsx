import * as React from "react";
import { Box, Button, TextField, FormLabel, IconButton } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@mui/icons-material/Send";
import { io, Socket } from "socket.io-client";
import {useState} from 'react';

export default function TestChat() {
    const [value, setValue] = useState("");
    const textInput = React.useRef(null);
    var io = require('socket.io-client');
    const socket = io.connect('http://localhost:8080', {reconnect:true});

    //Test if socket is connected
      function sendMsg() {
          console.log("Socket connected"+socket.connected);
        socket.emit("message", "HELLO WORLD");
      }

      function testingMessage(){
        console.log("The message was"+"'"+ value+"'");
         setValue('');
      }
  //Create button to test function (will eventually be sending messages)
    const SendButton = () => (
    <IconButton  onClick={() =>testingMessage() }>
      <SendIcon />
    </IconButton>

  )
 
  ;

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
