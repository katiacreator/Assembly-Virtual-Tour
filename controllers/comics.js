import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

export {
  index,
  show,
  create,
  deleteComic as delete
}

function show(req, res) {
  let hashKey = md5(process.env.MARVEL_PUBLIC_API_KEY)
  console.log(hashKey)
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?noVariants=false&limit=5&ts=1&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hashKey}`)
    .then((res) => {
      console.log(res.data.id)
      })
}



// Alternate method
// function index(req, res) {
//   Comic.find({}, function (err, Comic) {
//     if (err) return res.status(200).json(Comic)
//     res.status(200).json(Comic)
//   })
// }


function index(req, res) {
  Comic.find({})
  .then(comic => {
    res.status(200).json(comic)
  })
  .catch(err => {
    res.json(err)
  })
}

/* function show(req, res) {
  Comic.findById(req.params.id)
  .then(comic => {
    res.json(comic)
  })
} */

function create(req, res) {
  Comic.create(req.body)
  .then(comic => {
    res.json(comic)
  })
  .catch(err => {
    res.json(err)
  })
}

function deleteComic(req, res) {
  Comic.findByIdAndDelete(req.params.id)
  .then(comic => {
    res.json(comic)
  })
}