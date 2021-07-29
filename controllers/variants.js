import { Variant } from '../models/variant.js'
import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)


export {
    // index,
    // show,
    createVariant,
    updateVariant,
    deleteVariant as delete
  }

  //updates checklist where user has changed checkbox
function updateVariant(req, res) {
    Variant.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then( variant => {
      res.redirect(`/variants/new/${variant._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}

//this deletes a variant off user's checklist
function deleteVariant(req, res){
    Variant.findByIdAndDelete(req.params.id)
    .then( variant => {
      res.redirect('/variants/new')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    }) 
}

  //this creates a variant to be found
  function createVariant(req, res) {
    req.body.found = !!req.body.found
    Variant.create(req.body)
    .then( variant => {
      res.redirect('/variants/new')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}
