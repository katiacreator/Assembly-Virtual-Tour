import { Alias } from "../models/alias.js";


export { index, show, create, indexCard }

function index(req, res){
    Alias.find({})
    .then(alias => {
        res.status(200).json(alias)
    })
    .catch(err => {
        res.json(err)
    })
}
function indexCard(req, res){
    Alias.find({})
    .then(alias => {
        res.render('alias',{
            alias
        })
    })
    .catch(err => {
        res.redirect('/')
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