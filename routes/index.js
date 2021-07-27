import { Router } from 'express'
import * as indexCtrl from '../controllers/index.js'
import * as profilesCtrl from '../controllers/profiles.js'
export {
  router
}

const router = Router()

router.get('/', isLoggedIn, indexCtrl.index)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}