import { Router } from "express";
import User from "../models/User";
import Char from "../models/Character";
import checkAuth from "../utils/CheckAuth";

const router = Router();

router.use(checkAuth);

//TODO:
// INCORPORATE AUTHENTICATION
// ERROR HANDLING - Crashes when no objectID is sent
router.post("/createCharacter", async (req, res) => {
	const { charName } = req.body;
	const { _id: userId } = res.locals;

	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charName === null || charName === undefined) {
		return res.status(400).json({ error: "No character name provided" });
	}

	let data = await Char.findOne({ userId: userId, charName: charName })
	if (data) {
		return res.status(400).json({ error: "Character already exists" })
	}

	data = await User.findOne({ _id: userId }).exec();
	if (data === null) {
		return res.status(400).json({ error: "User does not exist" })
	}
	data = await Char.create({
		userID: userId, charName: charName, class: "", level: 0, race: "", strength: 0, dexterity: 0,
		constitution: 0, intelligence: 0, wisdom: 0, charisma: 0
	});
	res.status(200).json({
		data
	});
});

// TODO: INCORPORATE AUTHENTICATION
// ERROR HANDLING - Crashes when no objectID is sent
router.post("/editCharacter", async (req, res) => {
	const { charId, charClass, level, race, strength, dexterity, constitution, intelligence, wisdom, charisma, equipment } = req.body;
	const { _id: userId } = res.locals;
	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charId === null || charId === undefined) {
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
		res.status(200).json({
			message: "Character info updated"
		})
	} else {
		data = await User.findOne({ _id: userId }).exec();
		if (data) {
			return res.status(400).json({ error: "Character does not exist" })
		}
		return res.status(400).json({ error: "User does not exist" });
	}
});

// TODO: INCORPORATE AUTHENTICATION
// ERROR HANDLING - Crashes when no objectID is sent
router.post("/selectCharacter", async (req, res) => {
	const { charId } = req.body;
	const { _id: userId } = res.locals;
	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charId === null || charId === undefined) {
		return res.status(400).json({ error: "No character provided" });
	}

	let data = await Char.findOne({ userId: userId, _id: charId }).exec();
	if (data) {
		res.status(200).json({
			data
		})
	} else {
		data = await User.findOne({ _id: userId }).exec();
		if (data) {
			return res.status(400).json({ error: "Character does not exist" })
		}
		return res.status(400).json({ error: "User does not exist" });
	}
});

// TODO: INCORPORATE AUTHENTICATION
router.post("/deleteCharacter", async (req, res) => {
});

export default router;
