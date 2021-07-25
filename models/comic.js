import mongoose from 'mongoose'

const Schema = mongoose.Schema
export {
  Comic
}

const comicSchema = new Schema({
    comicId: Number,
    title: {
      type: String,
      required: true
    },
    format: {
      type: String,
    },
    pageCount: {
      type: Number,
    },
    image: String
  },{
    timestamps: true
  })

const Comic = mongoose.model('Comic', comicSchema)

