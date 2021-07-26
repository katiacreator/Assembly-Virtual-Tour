import { Profile } from '../models/profile.js'
// import { Comic } from "../models/comic.js"
// import { Variant } from "../models/variant.js"

export {
  index,
  show,
  edit,
  update,
  showBadge,
}


//check
function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      title: "TVA Agent Profiles",
      profiles,
    })
  })
}

/* 
function index(req, res, next) {
  res.render('profiles/index', {
    profiles: profiles,
    name: req.query.name,
    user: req.user
  })
}
*/

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profiles/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      title: `Editing ${profile.name}'s profile`,
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  // Find the profile that was clicked
  Profile.findById(req.params.id)
  .then(profile => {
      Profile.findById(req.user.profile)
      .then(userProfile => {
        res.render('profiles/show', {
          // Profile of the user clicked
          profile,
          // Profile of the logged in user
          userProfile,
          title: `${profile.name}'s profile`,
        })
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function showBadge(req, res) {
  // Find the profile that was clicked
  Profile.findById(req.params.id)
  .then(profile => {
      Profile.findById(req.user.profile)
      .then(userProfile => {
        res.render('profiles/show', {
          // Profile of the user clicked
          profile,
          // Profile of the logged in user
          userProfile,
          title: `${profile.name}'s badge`,
        })
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


