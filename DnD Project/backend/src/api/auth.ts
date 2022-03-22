import { Router } from "express";
import { verify } from "jsonwebtoken";
import User from "../models/User";
import Character from "../models/Character"
import { sendRefreshToken, createAccessToken, createRefreshToken } from "../utils/TokenAuth";

const router = Router();

router.get("/refreshToken", async (req, res) => {
	const { refreshToken } = req.cookies;
	let payload = null;

	if (!refreshToken) {
		return res.status(401).json({
			message: "No refresh token provided"
		});
	}

	try {
		payload = verify(refreshToken, process.env.REFRESH_TOKEN!);
	} catch (err) {
		console.error(err);
		return res.status(401).json({ accessToken: "", error: "Error with verifying payload" });
	}

	const { username } = payload as any; // change any to payload shape

	if (!username) {
		return res.status(401).json({ accessToken: "", error: "No username in payload" });
	}

	const user = await User.findOne({ username }).exec();

	if (!user) {
		return res.status(401).json({ accessToken: "", error: "No user found" });
	}

	sendRefreshToken(res, createRefreshToken(user));

	res.json({
		accessToken: createAccessToken(user)
	});
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	if (!username) {
		return res.status(400).json({ error: "Username does not exist" });
	}

	let data = await User.findOne({ Username: username, Password: password }).exec();

	if (data) {
		sendRefreshToken(res, createRefreshToken(data));
		res.status(200).json({
			data,
			accessToken: createAccessToken(data)
		});
	} else {
		return res.status(400).json({ error: "Invalid user info" });
	}
});

router.post("/signup", async (req, res) => {
	const { username, password , firstName, lastName, email} = req.body;
	if ([username, password].some(item => item === null || item === undefined)) {
		return res.status(400).json({ error: "Sign up info does not exist" });
	}

	let data = await User.findOne({ Username:username }).exec();

	if (data) {
		return res.status(400).json({ error: "Username already exists" });
	} else {
		await User.create({ Username: username, Password: password, FirstName: firstName, LastName: lastName, Email: email });
		data = await User.findOne({ Username: username, Password: password }).exec();
		sendRefreshToken(res, createRefreshToken(data));
		res.status(200).json({
			data,
			accessToken: createAccessToken(data)
		});
		
	}
});

//TODO: INCORPORATE AUTHENTICATION
router.post("/createCharacter", async (req, res) => {
	const { userId, charName } = req.body;
	if ([userId, charName].some(item => item === null || item === undefined)) {
		return res.status(400).json({ error: "Character info does not exist" });
	}

	let data = await Character.findOne({ UserID: userId, CharName: charName }).exec();

	if (data) {
		return res.status(400).json({ charName, error: "Character Name already in use" });
	} else { 
		await Character.create({ UserID: userId, CharName: charName, Class: "", Level: 0, Race: "", Strength: 0, Dexterity: 0, 
								 Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0 });
		data = await Character.findOne({ UserID: userId, CharName: charName }).exec();
		res.status(200).json({
			data
		});
	}
});

//TODO: INCORPORATE AUTHENTICATION
router.post("/editCharacter", async (req, res) => {
});

//TODO: INCORPORATE AUTHENTICATION
router.post("/deleteCharacter", async (req, res) => {
});

export default router;