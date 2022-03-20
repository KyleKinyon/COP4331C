import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
	Username: String,
	Password: String,
	FirstName: String,
	LastName: String,
	Email: String
})

const User = model('User', UserSchema);

export default User; 
