import * as aliasesCtrl from "../controllers/aliases.js"

export {
  router
}

const router = Router()

// localhost:3000/aliases RETRIEVE ALL COLLECTIONS
router.get('/', aliasesCtrl.index)
// localhost:3000/aliases/:id RETRIEVE A SINGLE COLLECTION
router.get('/:id', aliasesCtrl.show)
// localhost:3000/aliases ADD A DOCUMENT TO COLLECTION
router.post('/', aliasesCtrl.create)


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}