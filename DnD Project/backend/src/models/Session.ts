import { Schema, model } from 'mongoose'

const SessionSchema = new Schema({
	SessionID: Number,
	CharacterIDs: [Number],
	Map: String,
	DM: Number
})

const Session = model('Session', SessionSchema);

export default Session;
