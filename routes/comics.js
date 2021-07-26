import { Router } from 'express'
import * as comicsCtrl from "../controllers/comics.js"

export {
  router
}

const router = Router()

// localhost:3000/api/comics RETRIEVE ALL COLLECTIONS
router.get('/', comicCtrl.index)
// localhost:3000/api/comics/:id RETRIEVE A SINGLE COLLECTION
router.get('/:id', comicCtrl.show)
// localhost:3000/api/comics ADD A DOCUMENT TO COLLECTION
router.post('/', comicCtrl.create)
// localhost:3000/api/comics/:id DELETE A SINGLE DOCUMENT
router.delete('/:id', comicCtrl.delete)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}