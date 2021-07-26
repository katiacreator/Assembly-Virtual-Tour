import { Router } from 'express'
import * as variantsCtrl from "../controllers/variants.js"

export {
  router
}

const router = Router()

// localhost:3000/api/variants RETRIEVE ALL COLLECTIONS
router.get('/', variantsCtrl.index)
// localhost:3000/api/variants/:id RETRIEVE A SINGLE COLLECTION
router.get('/:id', variantsCtrl.show)
// localhost:3000/api/variants ADD A DOCUMENT TO COLLECTION
router.post('/', variantsCtrl.create)
// localhost:3000/api/variants/:id DELETE A SINGLE DOCUMENT
router.delete('/:id', variantsCtrl.delete)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}