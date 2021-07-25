import { Profile } from '../models/profile.js'
import { Comic } from "../models/comic.js"
import { Variant } from "../models/variant.js"

export {
  index,
}

function index(req, res, next) {
  res.render('profiles/index', {
    profiles: profiles,
    name: req.query.name,
    user: req.user
  })
}
