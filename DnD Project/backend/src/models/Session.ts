import { Schema, model } from 'mongoose'

const SessionSchema = new Schema({
	sessionName: String,
	sessionPassword: String,
	map: { type: String, default: "" },
	playerCoords: [String]
})

const Session = model('Session', SessionSchema);

export default Session;
