import { Router } from "express";
import { verify } from "jsonwebtoken";
import User from "../models/User";
import { sendRefreshToken, createAccessToken, createRefreshToken } from "../utils/TokenAuth";
import { compare, genSalt, hash } from "bcrypt";

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
	const { username, email, password } = req.body;
	if (!password || (!username && !email)) {
		return res.status(400).json({ error: "User info not provided" });
	}

	let data;
	if (username) {
		data = await User.findOne({ username }).exec();
	} else {
		data = await User.findOne({ email }).exec();
	}

	if (!data) {
		return res.status(400).json({ error: "Incorrect login info" });
	}

	const validPassword = await compare(password, data.password);

	if (!validPassword) {
		return res.status(400).json({ error: "Incorrect login info" });
	}

	// if (!data.verified) {
	// 	return res.status(400).json({ error: "E-mail not verified" });
	// }

	sendRefreshToken(res, createRefreshToken(data));

	res.status(200).json({
		data,
		accessToken: createAccessToken(data)
	});
});

router.post("/signup", async (req, res) => {
	const { username, password, firstName, lastName, email, verified, sessionName } = req.body;
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
		verified: verified ?? false,
		sessionName: sessionName ?? ""
	});

	await user.save();

	sendRefreshToken(res, createRefreshToken(user));
	res.status(200).json({
		user,
		accessToken: createAccessToken(user)
	});
});

router.post("/logout", async (req, res) => {
	sendRefreshToken(res, "");
	res.status(200).json({});
});

router.get("/getUserId", async (req, res) => {
	const { email } = req.query;

	if (!email) {
		return res.status(400).json({ error: "No e-mail provided" });
	}

	let data = await User.findOne({ email: email }).exec();

	if (!data) {
		return res.status(400).json({ error: "E-mail does not exist" });
	}

	sendRefreshToken(res, createRefreshToken(data));

	return res.status(200).json({
		data,
		accessToken: createAccessToken(data)
	});
});

export default router;