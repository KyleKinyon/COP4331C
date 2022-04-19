import { Schema, model } from "mongoose";

const SessionSchema = new Schema({
  userId: Schema.Types.ObjectId,
  name: { type: String },
  map: { type: String, default: "/images/map_LavaVault.jpg" },
  characters: [
    {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      name: { type: String, default: "Jesus" },
      color: { type: String, default: "000" },
    },
  ],
});

const Session = model("Session", SessionSchema);

export default Session;
