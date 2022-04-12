import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { connect, } from "mongoose";
import cookieParser from 'cookie-parser';
import auth from './api/auth';
import character from "./api/character";
import session from "./api/session";
import user from "./api/user";
import path from "path";
import { Server } from "socket.io";

const env = dotenv.config(); // env variables
const port = process.env.PORT || 8080;
const publicPath = path.resolve(__dirname, '../../frontend/build');

const app_name = "cop4331-dnd";
const baseURL = process.env.NODE_ENV === "production"
  ? `https://${app_name}.herokuapp.com/`
  : `http://localhost:3000`;

let app = express(); // api library
app.use(cookieParser()); // parsing cookie data (refresh token)
app.use(express.json()); // allow for sending json
app.use(express.urlencoded({ extended: true })); // allows for encoded sending
app.use(cors({
	origin: true,
	credentials: true
}));  // allow for cors and sending credentials

app.use("/auth", auth);
app.use("/char", character);
app.use("/session", session);
app.use("/user", user);

// connection to mongodb based off env and url
const mongoURI: string = `mongodb+srv://${process.env.ADDRESS}`;

connect(mongoURI, {
	auth: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD
	},
	dbName: process.env.DATABASE,
	retryWrites: true,
	w: "majority"
})
	.then(() => console.log("Mongodb connected")) // good
	.catch((err) => {
		// bad
		console.log("Error with db");
		console.error(err);
	});

// launching server
let server = app.listen(port, () => console.log(`Server running on port ${port}`));
let io = new Server(server, {
  cors: {
    origin: baseURL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// Socket.io ServerToClient Events
io.sockets.on("connection", (socket) => {
  console.log(`User ${socket.id} connected`);

  // Console logs which socket.id left (for debugging)
  // Emits which user left, for text chat
  socket.on("disconnect", (username: string) => {
	console.log(`User ${socket.id} disconnected`)
	io.emit(username);
  });

  // Emits which user has joined the lobby
  // Should be used to display in text chat
  socket.on("join", (username: string) => {
	io.emit(username);
  });
  
  // Emits a message sent by a user for text chat
  socket.on("message", (username: string, message: string) => {
	io.emit("message", username, message);
  });

  // PRE-GAME SOCKET EVENTS
  //------------------------------------------------------------\\

  // Emits the DM's userId
  socket.on("electDm", (username: string) => {
	io.emit("electDm", username);
  });

  // Emits User's ID and the ID of their chosen Character
  socket.on("chooseChar", (userId: string, charId: string) => {
	io.emit("chooseChar", userId, charId);
  });

  // Emits the map selection
  socket.on("chooseMap", (map: string) => {
	io.emit("chooseMap", map);
  });

  // Uhh... still not sure what all this needs...
  socket.on("beginGame", () => {
  });

  // MAIN GAME SOCKET EVENTS
  //------------------------------------------------------------\\

  socket.on("moveChars", (data) => {
  });

  socket.on("editCharSheet", (data) => {
  });

  socket.on("rollDice", (data) => {
  });

  
});

// For Heroku deployment

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(publicPath));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(publicPath, 'index.html'));
  });
}
/*
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'group25DemoGod@gmail.com', // Change to your recipient
  from: 'group25DemoGod@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)

*/
  export default server;
