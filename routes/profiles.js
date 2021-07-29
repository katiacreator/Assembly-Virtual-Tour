import { Router } from 'express'
import * as profilesCtrl from "../controllers/profiles.js"

export {
  router
}
const router = Router()

router.get('/', isLoggedIn, profilesCtrl.index)
router.get('/:id', isLoggedIn, profilesCtrl.show)
//router.get('/:id', isLoggedIn, profilesCtrl.showBadge)
router.put('/:id', isLoggedIn, profilesCtrl.update)
router.get('/:id/edit', isLoggedIn, profilesCtrl.edit)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}