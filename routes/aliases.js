import { Router } from 'express'
import * as aliasesCtrl from "../controllers/aliases.js"

export {
  router
}

const router = Router()

// localhost:3000/aliases RETRIEVE ALL COLLECTIONS
//router.get('/', aliasesCtrl.index)
// localhost:3000/aliases/index RETRIEVE ALL cards in collection
router.get('/', aliasesCtrl.indexCard)
// localhost:3000/aliases/:id RETRIEVE A SINGLE COLLECTION
//router.get('/:id', aliasesCtrl.show)
// localhost:3000/aliases/index/:id/ RETRIEVE A SINGLE COLLECTION 
router.get('/:id', aliasesCtrl.showCard)
// localhost:3000/aliases ADD A DOCUMENT TO COLLECTION
//router.post('/', aliasesCtrl.create)
// localhost:3000/aliases UPDATE A DOCUMENT TO COLLECTION
//router.put('/:id', aliasesCtrl.update)
// localhost:3000/aliases DELETE A DOCUMENT TO COLLECTION
//router.delete('/:id', aliasesCtrl.delete)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}