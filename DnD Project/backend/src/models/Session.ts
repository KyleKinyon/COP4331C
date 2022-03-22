import { Schema, model } from 'mongoose'

const SessionSchema = new Schema({
	UserIDs: [Schema.Types.ObjectId],
	CharacterIDs: [Schema.Types.ObjectId],
	Map: String,
	DM: Schema.Types.ObjectId
})

const Session = model('Session', SessionSchema);

export default Session;
