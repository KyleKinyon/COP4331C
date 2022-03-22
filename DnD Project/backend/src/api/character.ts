import { Router } from "express";
import User from "../models/User";
import Character from "../models/Character";
import checkAuth from "../utils/CheckAuth";

const router = Router();

router.use(checkAuth);

//TODO:
// INCORPORATE AUTHENTICATION
// ERROR HANDLING - Crashes when no objectID is sent
router.post("/createCharacter", async (req, res) => {
	const { charName } = req.body;
	const { userId } = res.locals;

	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charName === null || charName === undefined) {
		return res.status(400).json({ error: "No character name provided" });
	}

	let data = await Character.findOne({ UserID: userId, CharName: charName })
	if (data) {
		return res.status(400).json({ error: "Character already exists" })
	}

	data = await User.findOne({ _id: userId }).exec();
	if (data === null) {
		return res.status(400).json({ error: "User does not exist" })
	}
	data = await Character.create({
		UserID: userId, CharName: charName, Class: "", Level: 0, Race: "", Strength: 0, Dexterity: 0,
		Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0
	});
	res.status(200).json({
		data
	});
});

// TODO: INCORPORATE AUTHENTICATION
// ERROR HANDLING - Crashes when no objectID is sent
router.post("/editCharacter", async (req, res) => {
	const { userId, charId, charClass, level, race, strength, dexterity, constitution, intelligence, wisdom, charisma, equipment } = req.body;
	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charId === null || charId === undefined) {
		return res.status(400).json({ error: "No character provided" });
	}

	let data = await Character.findOne({ UserID: userId, _id: charId }).exec();

	if (data) {
		const filter = { UserID: userId, _id: charId };
		const update = {
			Class: charClass, Level: level, Race: race, Strength: strength, Dexterity: dexterity, Constitution: constitution,
			Intelligence: intelligence, Wisdom: wisdom, Charisma: charisma, Equipment: equipment
		};
		await Character.findOneAndUpdate(filter, update).exec();
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
	const { userId, charId } = req.body;
	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charId === null || charId === undefined) {
		return res.status(400).json({ error: "No character provided" });
	}

	let data = await Character.findOne({ UserID: userId, _id: charId }).exec();
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
