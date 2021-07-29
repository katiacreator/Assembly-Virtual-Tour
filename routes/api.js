import { Router } from 'express'
import * as aliasesCtrl from "../controllers/aliases.js"

export {
  router
}

const router = Router()

// localhost:3000/api/aliases RETRIEVE ALL COLLECTIONS
router.get('/api/aliases', aliasesCtrl.index)
// localhost:3000/api/aliases/:id RETRIEVE A SINGLE COLLECTION
router.get('/api/aliases/:id', aliasesCtrl.show)
// localhost:3000/api/aliases ADD A DOCUMENT TO COLLECTION
router.post('/api/aliases', aliasesCtrl.create)
// localhost:3000/api/aliases/:id UPDATE A SINGLE DOCUMENT
router.put('/api/aliases/:id', aliasesCtrl.update)
// localhost:3000/api/aliases/:id DELETE A SINGLE DOCUMENT
router.delete('/api/aliases/:id', aliasesCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}