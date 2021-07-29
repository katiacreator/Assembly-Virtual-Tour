import { Router } from 'express'
import * as comicsCtrl from "../controllers/comics.js"

export {
  router
}

const router = Router()

// localhost:3000/api/comics RETRIEVE ALL COLLECTIONS
router.get('/api/comics', comicsCtrl.index)
// localhost:3000/api/comics/:id RETRIEVE A SINGLE COLLECTION
router.get('/api/comics/:id', comicsCtrl.show)
// localhost:3000/api/comics ADD A DOCUMENT TO COLLECTION
router.post('/api/comics', comicsCtrl.create)
// localhost:3000/api/comics/:id UPDATE A SINGLE DOCUMENT
router.put('/api/comics/:id', comicsCtrl.update)
// localhost:3000/api/comics/:id DELETE A SINGLE DOCUMENT
router.delete('/api/comics/:id', comicsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}