import { Schema, model } from 'mongoose'

// TODO: Update to reflect actual schema
const CharacterSchema = new Schema({
	CharID: Number,
	UserID: Number,
	CharName: String,
	Class: String,
	Level: Number,
	Race: String,
	Strenth: Number,
	Dexterity: Number,
	Constituion: Number,
	Intelligence: Number,
	Wisdom: Number,
	Charisma: Number,
	Equipment: [String]
})

const Character = model('Character', CharacterSchema);

export default Character;
