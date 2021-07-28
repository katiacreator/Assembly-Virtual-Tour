import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)
console.log(`this is my timestamp on comics controller: ${ts}`)
//console.log(`this is my hashkey: ${hashKey}`)

export {
  index,
  showComic,
  create,
  deleteComic as delete
}

function showComic(req, res) {
  //req.params.id needs to match marvels character id
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?noVariants=false&limit=5&${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hashKey}`)
    .then((response) => {
      res.render("comics/show", {
        title: response.data.results.title,
        format: response.data.results.format,
        pageCount: response.data.results.pageCount,
        thumbnail: `${response.data.results.thumbnail.path}${response.data.results.thumbnail.path}`
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
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