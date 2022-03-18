import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
	UserID: Number,
	SessionID: Number,
	Username: String,
	Password: String,
	FirstName: String,
	LastName: String,
	Email: String
})

const User = model('User', UserSchema);

export default User; 
