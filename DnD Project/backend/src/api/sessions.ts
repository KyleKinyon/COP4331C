import { Router } from "express";
import User from "../models/User";
import Char from "../models/Character";
import checkAuth from "../utils/CheckAuth";

const router = Router();

router.use(checkAuth);


// ------------------------------------------------------\\
// Everything below is just FILLER. I still need to read
// more into websockets to understand if we will even
// need these, but until then these will remain empty
// ------------------------------------------------------\\


router.post("/createSession", async (req, res) => {
});

router.post("/joinSession", async (req, res) => {
});

router.post("/chooseDm", async (req, res) => {
});

router.post("/displayLobbyMembers", async (req, res) => {
});

router.post("/chooseCharacter", async (req, res) => {
});