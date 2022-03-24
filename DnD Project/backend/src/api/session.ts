import { Router } from "express";
import Session from "../models/Session";
import checkAuth from "../utils/CheckAuth";
import { genSalt, hash } from "bcrypt";

const router = Router();

router.use(checkAuth);

router.post("/createSession", async (req, res) => {
    const { sessionName, sessionPassword } = req.body;

	let data = await Session.findOne({ sessionName: sessionName }).exec();
	if (data) {
		return res.status(400).json({ error: "Session name is already in use" })
	}

    const salt = await genSalt(12);
	const hashedPassword: string = await hash(sessionPassword, salt);

	data = await Session.create({ sessionName: sessionName, sessionPassword: hashedPassword, map: "" });
	res.status(200).json({
		data
	});
});

router.post("/deleteSession", async (req, res) => {
	const { sessionId } = req.body;

	let data = await Session.findOneAndDelete({ _id: sessionId }).exec();
	if (data) {
		return res.status(200).json({ message: "Session successfully deleted" })
	} else {
		return res.status(400).json({ error: "Session does not exist" })
	}
});

router.post("/changeMap", async (req, res) => {
	const { sessionId, map } = req.body;

	const filter = { _id: sessionId }
	const update = { map: map }
	let data = await Session.findOneAndUpdate(filter, update).exec();
	if (data) {
		return res.status(200).json({ message: "Map updated" })
	} else {
		return res.status(400).json({ error: "Session does not exist" })
	}
});

router.post("/updateCoords", async (req, res) => {

})

export default router;
