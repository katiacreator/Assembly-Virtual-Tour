import { Variant } from '../models/variant.js'
import { Comic } from '../models/comic.js'
import axios from 'axios'

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
    Variant.findById(req.params.id)
    .then(variant => {
      res.json(variant)
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