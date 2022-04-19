// import { Schema, model } from "mongoose";

export interface SessionCharacterInterface {
  _id: String;
  x: Number;
  y: Number;
  name: String;
  color: String;
}

// const SessionCharacterSchema = new Schema({
//   x: { type: Number },
//   y: { type: Number },
//   name: { type: String },
//   color: { type: String },
// });

// const SessionCharacter = model("SessionCharacter", SessionCharacterSchema);

// export default SessionCharacter;
export default {};
