import { Router } from 'express'
import * as variantsCtrl from "../controllers/variants.js"

export {
  router
}

const router = Router()

// localhost:3000/variants RETRIEVE ALL COLLECTIONS
router.get('/', variantsCtrl.index)
router.post('/', variantsCtrl.createVariant)
router.delete('/:id', variantsCtrl.delete)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}