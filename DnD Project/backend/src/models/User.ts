import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
	username: String,
	password: String,
	firstName: { type: String, default: "" },
	lastName: { type: String, default: "" },
	email: String,
	verified: { type: Boolean, default: false },
	sessionName: { type: String, default: "" },
})

const User = model('User', UserSchema);

export default User; 
