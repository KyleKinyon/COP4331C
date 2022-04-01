import { Schema, model } from 'mongoose'

const CharacterSchema = new Schema({
	userId: Schema.Types.ObjectId,
	charName: String,
	class: { type: String, default: "" },
	level: { type: Number, default: 0 },
	race: { type: String, default: "" },
	strength: { type: Number, default: 0 },
	dexterity: { type: Number, default: 0 },
	constitution: { type: Number, default: 0 },
	intelligence: { type: Number, default: 0 },
	wisdom: { type: Number, default: 0 },
	charisma: { type: Number, default: 0 },
	equipment: [String]
})

const Character = model('Character', CharacterSchema);

export default Character;
