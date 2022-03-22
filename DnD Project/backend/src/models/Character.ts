import { Schema, model } from 'mongoose'

const CharacterSchema = new Schema({
	UserID: Schema.Types.ObjectId,
	CharName: String,
	Class: String,
	Level: Number,
	Race: String,
	Strength: Number,
	Dexterity: Number,
	Constitution: Number,
	Intelligence: Number,
	Wisdom: Number,
	Charisma: Number,
	Equipment: [String]
})

const Character = model('Character', CharacterSchema);

export default Character;
