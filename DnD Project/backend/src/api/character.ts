import { Router } from "express";
import User from "../models/User";
import Char from "../models/Character";
import checkAuth from "../utils/CheckAuth";

const router = Router();

router.use(checkAuth);

router.post("/createCharacter", async (req, res) => {
	const { charName, ...charInfo } = req.body;
	const { _id: userId } = res.locals;

	if (!charName) {
		return res.status(400).json({ error: "No character name provided" });
	}

	// let data = await Char.findOne({ userId: userId, charName: charName }).exec();

	// if (data) {
	// 	return res.status(400).json({ error: "Character already exists" });
	// }

	let data = await User.findOne({ _id: userId }).exec();

	if (data === null) {
		return res.status(400).json({ error: "User does not exist" });
	}

	data = await Char.create({
		userId, charName, ...charInfo
	});

	res.status(200).json({ data });
});

router.post("/editCharacter", async (req, res) => {
	const { charId, charClass, level, race, strength, dexterity, constitution, intelligence, wisdom, charisma, equipment } = req.body;
	const { _id: userId } = res.locals;

	if (!charId) {
		return res.status(400).json({ error: "No character provided" });
	}

	let data = await Char.findOne({ userId: userId, _id: charId }).exec();

	if (data) {
		const filter = { userId: userId, _id: charId };
		const update = {
			class: charClass, level: level, race: race, strength: strength, dexterity: dexterity, constitution: constitution,
			intelligence: intelligence, wisdom: wisdom, charisma: charisma, equipment: equipment
		};

		await Char.findOneAndUpdate(filter, update).exec();

		res.status(200).json({ message: "Character info updated" });
	} else {
		data = await User.findOne({ _id: userId }).exec();

		if (!data) {
			return res.status(400).json({ error: "User does not exist" });
		}

		res.status(400).json({ error: "Character does not exist" });
	}
});

router.get("/selectCharacter", async (req, res) => {
	const { charId } = req.query;
	const { _id: userId } = res.locals;

	if (!charId) {
		let data = await Char.find({ userId: userId }).exec();

		if (!data) {
			return res.status(400).json({ error: "User does not exist" });
		}

		return res.status(200).json({ characters: data });
	}

	let data = await Char.findOne({ userId: userId, _id: charId }).exec();

	if (!data) {
		data = await User.findOne({ _id: userId }).exec();
		return res.status(400).json({ error: (data) ? "User does not exist" : "Character does not exist" });
	}

	res.status(200).json({ character: data });
});

router.post("/deleteCharacter", async (req, res) => {
	const { charId } = req.body;
	const { _id: userId } = res.locals;

	if (!charId) {
		return res.status(400).json({ error: "No character provided" });
	}

	let data = await Char.findOneAndDelete({ userId: userId, _id: charId }).exec();

	if (!data) {
		data = await User.findOne({ _id: userId }).exec();

		if (!data) {
			return res.status(400).json({ error: "User does not exist" })
		}
		return res.status(400).json({ error: "Character does not exist" });
	}

	res.status(200).json({ message: "Character successfully deleted" });
});

export default router;
