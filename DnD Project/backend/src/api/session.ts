import { Router } from "express";
import Session from "../models/Session";
import checkAuth from "../utils/CheckAuth";
import SessionCharacter, {
  SessionCharacterInterface,
} from "../models/SessionCharacter";

const router = Router();

router.use(checkAuth);

const appendCharacter = async (
  id: string,
  character: SessionCharacterInterface
) => {
  return Session.findByIdAndUpdate(
    id,
    {
      $push: {
        character: {
          ...character,
        },
      },
    },
    { new: true, useFindAndModify: false }
  );
};

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
  let contains = ["name", "map", "characters"].every((item) =>
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

    const { name, map, characters } = req.body;
    console.log({ name, map, characters });
    // let sessionCharArray = await SessionCharacter.create(characters);

    // let session = new Session({
    //   userId,
    //   name,
    //   map,
    //   characters: sessionCharArray.map(
    //     (item: SessionCharacterInterface) => item._id
    //   ),
    // });

    let session = new Session({
      userId,
      name,
      map,
      characters,
    });

    console.log(session);
    await session.save();

    return res.status(200).json({ message: "Session saved!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Issue saving data to server." });
  }
});

router.post("/deleteSession", async (req, res) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ error: "Session info not provided" });
  }

  try {
    let data = await Session.findOneAndDelete({
      _id: id,
      name,
    }).exec();

    if (!data) {
      return res.status(400).json({ error: "Session does not exist" });
    }

    return res.status(200).json({ message: "Session successfully deleted" });
  } catch (error) {
    return res.status(400).json({ error: "Invalid JSON value(s)" });
  }
});

export default router;
