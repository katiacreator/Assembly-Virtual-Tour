import mongoose from 'mongoose'
const { Schema } = mongoose

export {
  Student
}

// The factSchema is used to embedded docs in a student doc.
// There is no model and no 'facts' collection
/* const factSchema = new Schema({
  text: String
}, {
  timestamps: true
}) */

const studentSchema = new Schema({
  name: String,
  avatar: String,
  facts: [factSchema],
}, {
  timestamps: true
})

const Student = mongoose.model('Student', studentSchema)