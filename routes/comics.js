import { Router } from 'express'
import * as comicsCtrl from "../controllers/comics.js"

export {
  router
}

const router = Router()

// localhost:3000/api/comics RETRIEVE ALL COLLECTIONS
router.get('/', comicsCtrl.index)
// localhost:3000/api/comics/:id RETRIEVE A SINGLE COLLECTION
router.get('/:id', comicsCtrl.showComic)
// localhost:3000/api/comics ADD A DOCUMENT TO COLLECTION
router.post('/', comicsCtrl.create)
// localhost:3000/api/comics/:id DELETE A SINGLE DOCUMENT
router.delete('/:id', comicsCtrl.delete)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}