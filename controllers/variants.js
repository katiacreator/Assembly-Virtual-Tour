import { Variant } from '../models/variant.js'
import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
console.log('ts: for variants controller', ts);
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)


export {
    index,
    createVariant,
    deleteVariant as delete
  }

  function index(req, res){
    Variant.find({})
    .then(variants => {
        //console.log('variant: ', variant),
        res.render('variants',{
            title: 'Variant Tracker',
            variants
        })
    })
    .catch(err => {
        console.log(`errorrrrr: ${err}`),
        res.redirect('/')
    })
}


//this deletes a variant off user's checklist
function deleteVariant(req, res) {
  Variant.findByIdAndDelete(req.params.id)
  .then(variant => {
    res.redirect('/variants')
  })
  .catch(err => {
    res.redirect('/variants')
  })
}

  //this creates a variant to be found
  function createVariant(req, res) {
    req.body.found = !!req.body.found
    Variant.create(req.body)
    .then( variant => {
      res.redirect('/variants')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
}
