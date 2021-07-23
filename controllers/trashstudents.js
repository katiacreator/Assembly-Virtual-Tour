import { Student } from '../models/student.js'

export {
  index,
  addFact,
  delFact,
}

function index(req, res, next) {
  // Make the query object to use with Student.find based on
  // whether the user has submitted the search form or not
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
  Student.find(modelQuery)
    .sort("name")
    .exec(function (err, students) {
      if (err) return next(err)
      // Passing students and name, for use in the EJS
      res.render("students/index", { 
        students: students, 
        name: req.query.name,
        user: req.user
      })
    })
}

function addFact(req, res, next) {
  // Find the student
  Student.findById(req.user.studentProfile._id, function(err, student) {
    // Push fact (req.body) into student fact array
    student.facts.push(req.body)
    // Save student
    student.save(function(err) {
      // Redirect back to /students
      res.redirect('/students')
    })

  })
}

function delFact(req, res, next) {
  // Find Student
  Student.findById(req.user.studentProfile._id)
  .then(student => {
    // Remove fact using remove()
    student.facts.remove({_id: req.params.id})
    student.save()
    .then(()=> {
      // Redirect back to /students
      res.redirect('/students')
    })
  })
}
