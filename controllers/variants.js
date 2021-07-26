import { Variant } from '../models/variant.js'
import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)
console.log(`this is my timestamp: ${ts}`)
console.log(`this is my hashkey: ${hashKey}`)

export {
    index,
    show,
    create,
    update,
    deleteVariant as delete
  }
  
  // Alternate method
  // function index(req, res) {
  //   Variant.find({}, function (err, variant) {
  //     if (err) return res.status(200).json(variant)
  //     res.status(200).json(variant)
  //   })
  // }
  
  
  function index(req, res) {
    Variant.find({})
    .then(variant => {
      res.status(200).json(variant)
    })
    .catch(err => {
      res.json(err)
    })
  }
  
  function show(req, res) {
    //req.params.id needs to match marvels character id
      axios
      .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.variantId}/limit=1&${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hashKey}`)
      .then((response) => {
        res.render("variants/show", {
          name: response.data.results.name,
          thumbnail: `${response.data.results.thumbnail.path}${response.data.results.thumbnail.path}`,
          fileTotal: response.data.results.comics.available
        })
      })
      .catch(err => {
        console.log(err)
        res.redirect('/')
      })
    }
  
  function create(req, res) {
    Variant.create(req.body)
    .then(variant => {
      res.json(variant)
    })
    .catch(err => {
      res.json(err)
    })
  }
  
  function update(req, res) {
    Variant.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((variant) => {
      res.json(variant)
    })
  }
  
  function deleteVariant(req, res) {
    Variant.findByIdAndDelete(req.params.id)
    .then(variant => {
      res.json(variant)
    })
  }