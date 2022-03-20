import { Schema, model } from 'mongoose'

const CharacterSchema = new Schema({
	UserID: String,
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
