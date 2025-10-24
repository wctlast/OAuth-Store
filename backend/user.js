import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  oauthProvider: { type: String, required: true },
  oauthId: { type: String, required: true, unique: true },
  name: { type: String },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastLogin: Date // May be helpful for Dynamic 2FA??
})

const User = mongoose.model('User', userSchema)
export default User