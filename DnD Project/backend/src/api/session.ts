import { Router } from "express";
import Session from "../models/Session";
import checkAuth from "../utils/CheckAuth";

const router = Router();

router.use(checkAuth);

router.get("/listSessions", async (req, res) => {
  const { _id: userId } = res.locals;

  try {
    let data = await Session.find({ userId }).exec();

    return res.status(200).json({ sessions: data });
  } catch (err) {
    return res.status(500).json({ error: "Issue getting sessions" });
  }
});

router.post("/createSession", async (req, res) => {
  const { _id: userId } = res.locals;

  let keys = Object.keys(req.body);
  let contains = ["name", "map", "characters", "logs"].every((item) =>
    keys.includes(item)
  );

  if (!contains) {
    return res
      .status(400)
      .json({ error: "Does not include name, map, characters" });
  }

  try {
    let conflict = await Session.find({ userId })
      .where("name")
      .equals(req.body.name)
      .exec();

    if (conflict.length > 0) {
      return res
        .status(400)
        .json({ error: "Session with same name already exists" });
    }

    const { name, map, characters, logs } = req.body;

    let session = new Session({
      userId,
      name,
      map,
      characters,
      logs,
    });

    await session.save();

    return res.status(200).json({ message: "Session saved!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Issue saving data to server." });
  }
});

router.post("/deleteSession", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: "Session info not provided" });
  }

  try {
    let data = await Session.findOneAndDelete({
      _id: id,
    }).exec();

    if (!data) {
      return res.status(400).json({ error: "Session does not exist" });
    }

    return res.status(200).json({ message: "Session successfully deleted" });
  } catch (error) {
    return res.status(400).json({ error: "Invalid JSON value(s)" });
  }
});

router.post("/updateSession", async (req, res) => {
  const { _id } = req.body;

  if (!_id) {
    return res.status(400).json({ error: "Session info not provided" });
  }

  try {
    await Session.findOneAndUpdate({ _id }, { ...req.body }).exec();

    return res.status(200).json({ message: "Session successfully deleted" });
  } catch (error) {
    return res.status(400).json({ error: "Unable to update" });
  }
});

export default router;
