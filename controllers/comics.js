import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)
console.log(`this is my timestamp on comics controller: ${ts}`)
//console.log(`this is my hashkey: ${hashKey}`)

export {
  index,
  show,create,update, deleteComic as delete
}


/* START API BUILD */
function index(req, res){
  Comic.find({})
  .then(comic => {
      res.status(200).json(comic)
  })
  .catch(err => {
      res.json(err)
  })
}

function show(req, res){
  Comic.findById(req.params.id)
  .then(comic => {
      res.json(comic)
  })
  .catch(err => {
      res.json(err)
  })
}

function create(req,res){
  Comic.create(req.body)
  .then(comic => {
      res.json(comic)
  })
  .catch(err => {
      res.json(err)
  })
}

function update(req, res) {
  Comic.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((comic) => {
    res.json(comic)
  })
  .catch(err => {
      res.json(err)
  })
}

function deleteComic(req, res) {
  Comic.findByIdAndDelete(req.params.id, req.body, {new: true})
  .then((comic) => {
    res.json(comic)
  })
  .catch(err => {
      res.json(err)
  })
}

