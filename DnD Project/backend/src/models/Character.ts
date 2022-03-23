import { Schema, model } from 'mongoose'

const CharacterSchema = new Schema({
	userId: Schema.Types.ObjectId,
	charName: String,
	class: String,
	level: Number,
	race: String,
	strength: Number,
	dexterity: Number,
	constitution: Number,
	intelligence: Number,
	wisdom: Number,
	charisma: Number,
	equipment: [String]
})

const Character = model('Character', CharacterSchema);

export default Character;
