import mongoose from 'mongoose'

const Schema = mongoose.Schema
export {
  Variant
}

const variantSchema = new Schema({
  name: String,
  found: Boolean,
  agent: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
}, {
  timestamps: true
})

const Variant = mongoose.model('Variant', variantSchema)