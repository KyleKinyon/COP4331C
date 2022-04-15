import { Router } from "express";
import { verify } from "jsonwebtoken";
import User from "../models/User";
import Char from "../models/Character";
import { createAccessToken, createRefreshToken } from "../utils/TokenAuth";
import { compare, genSalt, hash } from "bcrypt";
import { TokenSchema } from "../utils/TokenAuth";

const router = Router();

router.post("/refreshToken", async (req, res) => {
	const { refreshToken } = req.body;
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

	res.json({
		accessToken: createAccessToken(user),
        refreshToken: createRefreshToken(user)
	});
});

router.post("/login", async (req, res) => {
	const { username, password } = req.body;
	if (!username || !password) {
		return res.status(400).json({ error: "User info not provided" });
	}

	let data = await User.findOne({ username: username }).exec();

	if (!data) {
		data = await User.findOne({ email: username }).exec();
		if (!data) {
			return res.status(400).json({ error: "Incorrect login info" });
		}
	}

	const validPassword = await compare(password, data.password);

	if (!validPassword) {
		return res.status(400).json({ error: "Incorrect login info" });
	}

	// if (!data.verified) {
	// 	return res.status(400).json({ error: "E-mail not verified" });
	// }

	res.status(200).json({
		data,
		accessToken: createAccessToken(data),
        refreshToken: createRefreshToken(data)
	});
});

router.post("/signup", async (req, res) => {
	const { username, password, firstName, lastName, email, verified } = req.body;
	if (!username || !password || !email) {
		return res.status(400).json({ error: "Sign up info not provided" });
	}

	let data = await User.findOne({ username }).exec();

	if (data) {
		return res.status(400).json({ error: "Username already exists" });
	}

	data = await User.findOne({ email }).exec();

	if (data) {
		return res.status(400).json({ error: "Email belongs to an existing account" });
	}

	const salt = await genSalt(12);
	const hashedPassword: string = await hash(password, salt);

	let user = new User({
		username,
		password: hashedPassword,
		firstName: firstName ?? "",
		lastName: lastName ?? "",
		email,
		verified: verified ?? false
	});

	await user.save();

	res.status(200).json({
		user,
		accessToken: createAccessToken(user),
        refreshToken: createRefreshToken(user)
	});
});

router.post("/logout", async (req, res) => {
	res.status(200).json({ refreshToken: "" });
});

router.post("/createCharacter", async (req, res) => {
	const { token, userId, charName, ...charInfo } = req.body;

	if (!token) {
		return res.status(401).json({
			error: "No access token"
		});
	}

	let payload: TokenSchema | null = null;

	try {
		payload = verify(token, process.env.ACCESS_TOKEN!) as TokenSchema;

	} catch (e) {
		return res.status(401).json({
			error: "Error with verifying token"
		});
	}

	if (!charName) {
		return res.status(400).json({ error: "No character name provided" });
	}

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
	const { token, userId, charId, charName, charClass, level, race, strength, 
            dexterity, constitution, intelligence, wisdom, charisma, equipment } = req.body;

    if (!token) {
		return res.status(401).json({
			error: "No access token"
		});
	}

	let payload: TokenSchema | null = null;

	try {
		payload = verify(token, process.env.ACCESS_TOKEN!) as TokenSchema;

	} catch (e) {
		return res.status(401).json({
			error: "Error with verifying token"
		});
	}
    
	if (!charId) {
		return res.status(400).json({ error: "No character provided" });
	}

	try { 
		let data = await Char.findOne({ userId: userId, _id: charId }).exec();

		if (data) {
			const filter = { userId: userId, _id: charId };
			const update = {
				charName: charName, class: charClass, level: level, race: race, strength: strength, dexterity: dexterity,
				constitution: constitution, intelligence: intelligence, wisdom: wisdom, charisma: charisma, equipment: equipment
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
		
	} catch (error) {
		res.status(200).json({ error: "Invalid JSON value(s)" });
	}
});

router.post("/selectCharacter", async (req, res) => {
	const { token, userId, charId } = req.body;

    if (!token) {
		return res.status(401).json({
			error: "No access token"
		});
	}

	let payload: TokenSchema | null = null;

	try {
		payload = verify(token, process.env.ACCESS_TOKEN!) as TokenSchema;

	} catch (e) {
		return res.status(401).json({
			error: "Error with verifying token"
		});
	}

	if (!charId) {
		let data = await Char.find({ userId: userId }).exec();

		if (!data) {
			return res.status(400).json({ error: "User does not exist" });
		}

		return res.status(200).json({ characters: data });
	}

	try {
		let data = await Char.findOne({ userId: userId, _id: charId }).exec();

		if (!data) {
			data = await User.findOne({ _id: userId }).exec();
			return res.status(400).json({ error: (data) ? "User does not exist" : "Character does not exist" });
		}

		return res.status(200).json({ character: data });

	} catch (error) {
		res.status(200).json({ error: "Invalid JSON value(s)" });
	}
});

router.post("/deleteCharacter", async (req, res) => {
	const { token, userId, charId } = req.body;

    if (!token) {
		return res.status(401).json({
			error: "No access token"
		});
	}

	let payload: TokenSchema | null = null;

	try {
		payload = verify(token, process.env.ACCESS_TOKEN!) as TokenSchema;

	} catch (e) {
		return res.status(401).json({
			error: "Error with verifying token"
		});
	}

	if (!charId) {
		return res.status(400).json({ error: "No character provided" });
	}

	try {
		let data = await Char.findOneAndDelete({ userId: userId, _id: charId }).exec();

		if (!data) {
			data = await User.findOne({ _id: userId }).exec();

			if (!data) {
				return res.status(400).json({ error: "User does not exist" })
			}
			return res.status(400).json({ error: "Character does not exist" });
		}

		res.status(200).json({ message: "Character successfully deleted" });

	} catch (error) {
		res.status(200).json({ error: "Invalid JSON value(s)" });
	}
});

export default router;