import mongoose from 'mongoose'

const Schema = mongoose.Schema
export {
  Variant
}







const variantSchema = new Schema({
  name: String,
  image: String,
  bio: String,
  //reference comics Schema which is an array of comics
  comics: [{type: Schema.Types.ObjectId, ref: "Comic"}],
  variantId: Number
}, {
  timestamps: true
})

const Variant = mongoose.model('Variant', variantSchema)