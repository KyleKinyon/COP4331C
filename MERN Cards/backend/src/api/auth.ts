import { Router } from "express";
import User from "../models/User";

const router = Router();

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	if (!username) {
		res.status(400).json({ error: "Username does not exist" });
		return;
	}

	let data = await User.findOne({ username, password }).exec();

	// only username in user collection of mongodb
	if (data) {
		res.status(200).json({ data });
	} else {
		res.status(400).json({ error: "Invalid user info" });
	}
});

router.post("/signup", async (req, res) => {
	const { username, password, firstName, lastName } = req.body;
	if ([username, password, firstName, lastName].some(item => item === null || item === undefined)) {
		res.status(400).json({ error: "Sign up info does not exist" });
		return;
	}

	let data = await User.findOne({ username }).exec();

	// only username in user collection of mongodb
	if (data) {
		res.status(400).json({ error: "Username already exists" });
	} else {
		res.status(200).json({});
	}
});

export default router