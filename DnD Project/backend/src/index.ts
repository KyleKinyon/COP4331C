import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { connect, } from "mongoose";
import cookieParser from 'cookie-parser';
import auth from './api/auth';
import character from "./api/character";
import session from "./api/session";
import user from "./api/user";

const env = dotenv.config(); // env variables

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

const mongoURI: string = `mongodb+srv://${process.env.ADDRESS}`;

// connection to mongodb based off env and url
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
app.listen(8080, () => console.log("Server running on port 8080"));
