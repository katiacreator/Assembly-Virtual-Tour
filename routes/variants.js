import { Router } from 'express'
import * as variantsCtrl from "../controllers/variants.js"

export {
  router
}

const router = Router()

// localhost:3000/variants RETRIEVE ALL COLLECTIONS
router.get('/', variantsCtrl.index)
// localhost:3000/variants/:id RETRIEVE A SINGLE COLLECTION
//router.get('/:id', variantsCtrl.show)
// localhost:3000/variants ADD A DOCUMENT TO COLLECTION
router.post('/', variantsCtrl.createVariant)
// localhost:3000/variants/:id UPDATE A SINGLE DOCUMENT
router.put('/:id', variantsCtrl.updateVariant)
// localhost:3000/variants/:id DELETE A SINGLE DOCUMENT
router.delete('/:id', variantsCtrl.delete)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}