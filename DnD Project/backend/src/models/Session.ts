import { Schema, model } from "mongoose";

const SessionSchema = new Schema({
  userId: Schema.Types.ObjectId,
  name: { type: String },
  map: {
    link: {
      type: String,
      default: "/images/map_LavaVault.jpg",
    },
    name: {
      type: String,
      default: "Lava Vault",
    },
  },
  characters: [
    {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      name: { type: String, default: "Jesus" },
      color: { type: String, default: "000" },
    },
  ],
  logs: [String],
});

const Session = model("Session", SessionSchema);

export default Session;
