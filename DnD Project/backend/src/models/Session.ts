import { Schema, model } from 'mongoose'

const SessionSchema = new Schema({
	UserIDs: [String],
	CharacterIDs: [String],
	Map: String,
	DM: String
})

const Session = model('Session', SessionSchema);

export default Session;
