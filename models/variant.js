import mongoose from 'mongoose'

const Schema = mongoose.Schema
export {
  Variant
}

const variantSchema = new Schema({
  name: String,
  image: String,
  fileTotal: Number,
  //profile will be assigned as an agent to track this variant after completion of the tour 
  agent: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  //reference comics Schema which is an array of secret files/comics for this variant
  comics: [{type: Schema.Types.ObjectId, ref: "Comic"}],
  //this is the marvel character id
  variantId: Number
}, {
  timestamps: true
})

const Variant = mongoose.model('Variant', variantSchema)