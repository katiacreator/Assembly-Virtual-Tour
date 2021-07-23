import mongoose from 'mongoose'
const { Schema } = mongoose

export {
  User
}

const userSchema = new Schema({
  email: String,
  googleId: String,
  studentProfile: {type: Schema.Types.ObjectId, ref: "Student"}
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)