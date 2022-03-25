import { Router } from "express";
import Session from "../models/Session";
import checkAuth from "../utils/CheckAuth";
import { genSalt, hash } from "bcrypt";

const router = Router();

router.use(checkAuth);

router.post("/createSession", async (req, res) => {
    const { sessionName, sessionPassword } = req.body;

	if (!sessionName || !sessionPassword) {
		return res.status(400).json({ error: "Session info not provided" });
	}

	let data = await Session.findOne({ sessionName: sessionName }).exec();

	if (data) {
		return res.status(400).json({ error: "Session name is already in use" });
	}

    const salt = await genSalt(12);
	const hashedPassword: string = await hash(sessionPassword, salt);

	data = await Session.create({ sessionName: sessionName, sessionPassword: hashedPassword, map: "" });
	
	return res.status(200).json({ data });
});

router.delete("/deleteSession", async (req, res) => {
	const { sessionId } = req.body;

	if (!sessionId) {
		return res.status(400).json({ error: "SessionId not provided" });
	}

	let data = await Session.findOneAndDelete({ _id: sessionId }).exec();

	if (!data) {
		return res.status(400).json({ error: "Session does not exist" });
	}
	
	return res.status(200).json({ message: "Session successfully deleted" });
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
	
	return res.status(200).json({ message: "Map updated" });
});

router.post("/updateCoords", async (req, res) => {
});

export default router;
