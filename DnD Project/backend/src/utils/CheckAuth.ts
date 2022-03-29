import { verify } from "jsonwebtoken";
import { Request, Response } from "express";
import { TokenSchema } from "./TokenAuth";

/*

This example looks for the username inside the jwt, should change when completing TODO.
TODO: Define jwt shape for when checking authorization.

*/

export default function checkAuth(req: Request, res: Response, next: Function) {
	// extract token from authorization header
	let token = req.headers.authorization?.split(" ")[1];

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

	if (!payload) {
		return res.status(401).json({
			error: "No username in token"
		});
	}

	// TODO: Check if userId exists

	// TODO: Add email verification so that we can use this in our checkAuth middleware
	// if (!payload.verified) {
	// 	return res.status(401).json({
	// 		error: "User is not verified"
	// 	})
	// }

	// Save our username in the locals section so that other routes can use it
	res.locals = { ...payload };

	// runs the next route if there is one
	// This next function won't run if any of the errors occur
	next();
}