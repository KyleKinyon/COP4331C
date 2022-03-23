import { Router } from "express";
import User from "../models/User";
import Char from "../models/Character";
import checkAuth from "../utils/CheckAuth";

const router = Router();

router.use(checkAuth);

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
		userId, charName, class: "", level: 0, race: "", strength: 0, dexterity: 0,
		constitution: 0, intelligence: 0, wisdom: 0, charisma: 0
	});
	res.status(200).json({
		data
	});
});

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

// When a charId is provided, a single character will be pulled from the database
// The commented code below is supposed to pull all characters tied to a given user
// when charId = null. It DOES do just that, however, it crashes because for some 
// reason it is trying to set jwt headers after they've already been set.
// To test, uncomment the code and remove the the line directly below it.
// Then, in Arc/Postman, set charId = null and watch backend for crashes
router.get("/selectCharacter", async (req, res) => {
	const { charId } = req.query;
	const { _id: userId } = res.locals;

	if (!userId) {
		return res.status(400).json({ error: "No user provided" });
	}

	if (!charId) {
		let data = await Char.find({ userId: userId }).exec();

		if (!data) {
			return res.status(400).json({ error: "User does not exist" });
		}

		return res.status(200).json({
			data
		});
	}

	let data = await Char.findOne({ userId: userId, _id: charId }).exec();

	if (!data) {
		data = await User.findOne({ _id: userId }).exec();
		return res.status(400).json({ error: (data) ? "User does not exist" : "Character does not exist" });
	}

	return res.status(200).json({
		data
	});
});

// This is just a TEST route that I would like to remove once select is working properly
router.post("/selectAllCharacters", async (req, res) => {
	const { _id: userId } = res.locals;
	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}

	let data = await Char.find({ userId: userId }).exec();
	if (data) {
		res.status(200).json({
			data
		})
	} else {
		data = await User.findOne({ _id: userId }).exec();
		if (data) {
			return res.status(400).json({ error: "User has no characters" })
		}
		return res.status(400).json({ error: "User does not exist" });
	}
});

router.post("/deleteCharacter", async (req, res) => {
	const { charId } = req.body;
	const { _id: userId } = res.locals;
	if (userId === null || userId === undefined) {
		return res.status(400).json({ error: "No user provided" });
	}
	if (charId === null || charId === undefined) {
		return res.status(400).json({ error: "No character provided" });
	}

	let data = await Char.findOneAndDelete({ userId: userId, _id: charId }).exec();
	if (data) {
		res.status(200).json({
			message: "Character successfully deleted"
		})
	} else {
		data = await User.findOne({ _id: userId }).exec();
		if (data) {
			return res.status(400).json({ error: "Character does not exist" })
		}
		return res.status(400).json({ error: "User does not exist" });
	}
});

export default router;
