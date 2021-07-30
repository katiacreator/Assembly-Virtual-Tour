export {
  index
}

function index(req, res) {
  res.render('index', {
    title: 'Welcome To the TVA!',
    user: req.user ? req.user : null 
  })
}
