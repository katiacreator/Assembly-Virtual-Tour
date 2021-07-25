import { Router } from 'express'
import * as variantsCtrl from "../controllers/variants.js"

export {
  router
}

const router = Router()

/* router.get('/', isLoggedIn, variantsCtrl.index)
router.get('/:id', isLoggedIn, variantsCtrl.show)
router.post('/', isLoggedIn, variantsCtrl.create)
router.put('/:id', isLoggedIn, variantsCtrl.update)
router.get('/:id/edit', isLoggedIn, variantsCtrl.edit)
router.delete('/:id/edit', isLoggedIn, variantsCtrl.delete) */


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}