import { Router } from 'express'
import * as comicsCtrl from "../controllers/comics.js"

export {
  router
}

const router = Router()

/* router.get('/', isLoggedIn, comicsCtrl.index)
router.get('/:id', isLoggedIn, comicsCtrl.show)
router.post('/', isLoggedIn, comicsCtrl.create)
router.put('/:id', isLoggedIn, comicsCtrl.update)
router.get('/:id/edit', isLoggedIn, comicsCtrl.edit)
router.delete('/:id/edit', isLoggedIn, comicsCtrl.delete) */


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}