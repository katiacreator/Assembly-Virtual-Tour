import mongoose from 'mongoose'

const Schema = mongoose.Schema
export {
  Profile
}

const profileSchema = new Schema({
  name: String,
  avatar: String,
  role: String,
  badgeId: Number,
  //reference variant Schema which is an object
  variant: {type: Schema.Types.ObjectId, ref: "Variant"},
  //reference comics Schema which is an array of comics
  comics: [{type: Schema.Types.ObjectId, ref: "Comics"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)