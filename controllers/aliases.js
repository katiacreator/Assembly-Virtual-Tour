import { Alias } from "../models/alias.js";


export { index, show, create, update, deleteAlias as delete, indexCard, showCard }
let ts = Date.now()
console.log('ts on alias**********************************: ', ts);
/* START VIEWS RENDER */
  
function indexCard(req, res){
    console.log("this indexCard is firing!");
    Alias.find({})
    .then(aliases => {
        //console.log('alias: ', alias),
        res.render('aliases',{
            title: 'Alias Card Grid TEST!',
            aliases
        })
    })
    .catch(err => {
        console.log(`errorrrrr: ${err}`),
        res.redirect('/')
    })
}

function showCard(req, res){
    console.log("this showCard is firing!");
    Alias.findById(req.params.id)
    .then(alias => {
        console.log('alias: ', alias),
        res.render('aliases/show',{
            title: 'Alias Card Details TEST!',
            alias
        })
    })
    .catch(err => {
        console.log(`errorrrrr: ${err}`),
        res.redirect('/')
    })
}


/* START API BUILD */
function index(req, res){
    Alias.find({})
    .then(alias => {
        res.status(200).json(alias)
    })
    .catch(err => {
        res.json(err)
    })
}

function show(req, res){
    Alias.findById(req.params.id)
    .then(alias => {
        res.json(alias)
    })
    .catch(err => {
        res.json(err)
    })
}

function create(req,res){
    Alias.create(req.body)
    .then(alias => {
        res.json(alias)
    })
    .catch(err => {
        res.json(err)
    })
}

function update(req, res) {
    Alias.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((alias) => {
      res.json(alias)
    })
    .catch(err => {
        res.json(err)
    })
  }

function deleteAlias(req, res) {
    Alias.findByIdAndDelete(req.params.id, req.body, {new: true})
    .then((alias) => {
      res.json(alias)
    })
    .catch(err => {
        res.json(err)
    })
  }


