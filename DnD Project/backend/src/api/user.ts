import { Router } from "express";
import User from "../models/User";
import checkAuth from "../utils/CheckAuth";
import { compare, genSalt, hash } from "bcrypt";
import Character from "../models/Character";
import Session from "../models/Session";
import { sendRefreshToken } from "../utils/TokenAuth";

const router = Router();

router.use(checkAuth);

router.get("/getUser", async (req,res) => {
    const { _id: userId } = res.locals;

    let data = await User.findOne({ _id: userId }).exec();

    if (!data) { 
        return res.status(400).json({ error: "User does not exist" });
    }

    res.status(200).json({
		data
	});
});

router.post("/changePassword", async (req, res) => {
	const { newPassword } = req.body;
	const { _id: userId } = res.locals;

    if (!newPassword) {
        return res.status(400).json({ error: "No password provided "});
    }

    const salt = await genSalt(12);
    const hashedPassword: string = await hash(newPassword, salt);
    const filter = { _id: userId };
    const update = { password: hashedPassword };

    try {
        let data = await User.findOneAndUpdate(filter, update).exec();

        if (data) {
            res.status(200).json({ message: "Password updated" });
        } else { 
            res.status(400).json({ error: "User does not exist" });
        }
    } catch (err) {
		console.error(err);
		return res.status(400).json({ error: "Error changing password" });
	}
    
});

router.post("/changeName", async (req, res) => {
    const { firstName, lastName } = req.body;
    const { _id: userId } = res.locals;

    if (!firstName && !lastName) {
			return res.status(400).json({ error: "First/Last name not provided" });
    }

    const filter = { _id: userId };
		let update: any = {};
		if (firstName) update.firstName = firstName;
		if (lastName) update.lastName = lastName;

    User.findOneAndUpdate(filter, update).exec();

    res.status(200).json({ message: "User info updated" });
});

router.post("/resetPassword", async (req,res) => {
    const { _id: userId } = res.locals;
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ error: "Password not provided" });
    }

    const salt = await genSalt(12);
    const hashedPassword: string = await hash(password, salt);
    const filter = { _id: userId };
    const update = { password: hashedPassword };

    User.findOneAndUpdate(filter, update).exec();

    res.status(200).json({ message: "Password updated" });
});

router.delete("/delete", async (req, res) => {
	const { _id: userId, username } = res.locals;

	try {
		await Session.deleteMany({ userId }).exec();
		await Character.deleteMany({ userId }).exec();
		await User.deleteMany({ username }).exec();

		sendRefreshToken(res, "");

		res.status(200).json({});
	} catch (error) {
		res.status(400).json({
			error: "Could not delete data"
		});
	}
});

export default router
