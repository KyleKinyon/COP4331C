import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import { connect, } from "mongoose";
import cards from './api/cards';

const env = dotenv.config();

let app = express();

app.use(express.json());
app.use(cors());

app.use("/cards", cards);

const mongoURI: string =
	`mongodb+srv://${process.env.ADDRESS}`;

connect(mongoURI, {
	auth: {
		username: process.env.USERNAME,
		password: process.env.PASSWORD
	},
	dbName: process.env.DATABASE,
	retryWrites: true,
	w: "majority"
})
	.then(() => console.log("Mongodb connected"))
	.catch((err) => {
		console.log("Error with db")
		console.error(err)
	});



app.listen(8080, () => console.log("Server running on port 8080"));