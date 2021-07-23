import { Student } from '../models/student.js'

export {
  index,
}
function index(req, res, next) {
  res.render('students/index', {
    students: students,
    name: req.query.name,
    user: req.user
  })
}
