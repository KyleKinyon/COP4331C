import { Router } from "express";
import Session from "../models/Session";
import checkAuth from "../utils/CheckAuth";
import { genSalt, hash } from "bcrypt";
import User from "../models/User";
import { compare } from "bcrypt";

const router = Router();

router.use(checkAuth);

router.post("/createSession", async (req, res) => {
    const { sessionName, sessionPassword } = req.body;
	const { _id: userId } = res.locals;

	if (!sessionName || !sessionPassword) {
		return res.status(400).json({ error: "Session info not provided" });
	}

	let data = await Session.findOne({ sessionName: sessionName }).exec();

	if (data) {
		return res.status(400).json({ error: "Session name is already in use" });
	}

	const filter = { _id: userId, sessionName: "" };
	const update = { sessionName: sessionName };

	data = await User.findOneAndUpdate(filter, update).exec();

	if (!data) {
		return res.status(400).json({ error: "User is already in a session" });
	}

    const salt = await genSalt(12);
	const hashedPassword: string = await hash(sessionPassword, salt);

	data = await Session.create({ sessionName: sessionName, sessionPassword: hashedPassword, map: "" });
	
	return res.status(200).json({ data });
});

router.delete("/deleteSession", async (req, res) => {
	const { sessionId, sessionName } = req.body;

	if (!sessionId || !sessionName) {
		return res.status(400).json({ error: "Session info not provided" });
	}

	let data = await Session.findOneAndDelete({ _id: sessionId, sessionName: sessionName }).exec();

	if (!data) {
		return res.status(400).json({ error: "Session does not exist" });
	}

	const filter = { sessionName: sessionName };
	const update = { sessionName: "" };

	await User.updateMany(filter, update).exec();

	res.status(200).json({ message: "Session successfully deleted" });
});

router.post("/joinSession", async (req, res) => {
	const { sessionName, sessionPassword } = req.body;
	const { _id: userId } = res.locals;

	if (!sessionName || !sessionPassword) {
		return res.status(400).json({ error: "Session info not provided" });
	}

	let data = await Session.findOne({ sessionName: sessionName }).exec();

	if (!data) {
		return res.status(400).json({ error: "Session does not exist" });
	}

	const validPassword = await compare(sessionPassword, data.sessionPassword);
	if (!validPassword) {
		return res.status(400).json({ error: "Incorrect password" });
	}

	const filter = { _id: userId, sessionName: "" };
	const update = { sessionName: sessionName };

	data = await User.findOneAndUpdate(filter, update).exec();

	if (!data) {
		return res.status(400).json({ error: "User is already in a session" });
	}

	res.status(200).json({ message: "User added to session" });
});

router.post("/leaveSession", async (req, res) => {
	const { sessionName } = req.body;
	const { _id: userId } = res.locals;

	if (!sessionName) {
		return res.status(400).json({ error: "Session info not provided" });
	}

	const filter = { _id: userId, sessionName: sessionName };
	const update = { sessionName: "" };

	let data = await User.findOneAndUpdate(filter, update).exec();

	if (!data) {
		return res.status(400).json({ error: "User does not belong to this session" });
	}
	
	data = await User.findOne({ sessionName: sessionName }).exec();
	if (!data) {
		let data = await Session.findOneAndDelete({ sessionName: sessionName }).exec();
	}

	res.status(200).json({ message: "User left session" });
});

router.post("/changeMap", async (req, res) => {
	const { sessionId, map } = req.body;

	if (!sessionId) {
		return res.status(400).json({ error: "Session info not provided" });
	}
	if (!map) {
		return res.status(400).json({ error: "Map info not provided" });
	}

	const filter = { _id: sessionId };
	const update = { map: map };

	let data = await Session.findOneAndUpdate(filter, update).exec();

	if (!data) {
		return res.status(400).json({ error: "Session does not exist" });
	}
	
	res.status(200).json({ message: "Map updated" });
});

router.post("/updateCoords", async (req, res) => {
});

export default router;
