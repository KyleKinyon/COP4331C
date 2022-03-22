import { Schema, model } from 'mongoose'

const SessionSchema = new Schema({
	userIDs: [Schema.Types.ObjectId],
	characterIDs: [Schema.Types.ObjectId],
	map: String,
	dm: Schema.Types.ObjectId
})

const Session = model('Session', SessionSchema);

export default Session;
