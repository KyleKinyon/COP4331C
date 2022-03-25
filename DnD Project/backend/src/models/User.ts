import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	email: String,
	verified: Boolean
})

const User = model('User', UserSchema);

export default User; 
