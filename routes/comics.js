import { Router } from 'express'
import * as comicsCtrl from "../controllers/comics.js"

export {
  router
}

const router = Router()

// localhost:3000/api/comics RETRIEVE ALL COLLECTIONS
router.get('/', comicsCtrl.index)
// localhost:3000/api/comics/:id RETRIEVE A SINGLE COLLECTION
//router.get('/:id', comicsCtrl.show)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}