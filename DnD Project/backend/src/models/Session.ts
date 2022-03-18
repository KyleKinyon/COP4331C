import { Schema, model } from 'mongoose'

const SessionSchema = new Schema({
	SessionID: Number,
	UserIDs: [Number],
	CharacterIDs: [Number],
	Map: String,
	DM: Number
})

const Session = model('Session', SessionSchema);

export default Session;
