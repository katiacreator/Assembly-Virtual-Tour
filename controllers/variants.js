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

  //this deletes a variant off user's checklist
  function deleteVariant(req, res){
    Variant.findByIdAndDelete(req.params.id, function(err, variant){
      res.redirect('/variants')
    })
  }

  //this creates a variant to be found
  function create(req, res) {
    req.body.found = !!req.body.found
    Variant.create(req.body).then(()=> {
      res.redirect('/variants')
    })
  }
  /* 
  
    function search(req, res) {
    console.log("variant index has been reached")
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.body.search}/limit=1&${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hashKey}`)
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.json(err)
    })
  }


  function search(req, res) {
    axios.get(`https://api.rawg.io/api/games?page_size=10&search=${req.body.search}&key=${process.env.API_KEY}`)
    .then(response => {
      res.render('games/new', {
        title: 'Search Results',
        results: response.data.results
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  function show(req, res) {
    axios
    .get(`https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`)
    .then((response) => {
      Game.findOne({ rawgId: response.data.id })
      // This is where we'll populate collectedBy
      .populate('collectedBy')
      // This is where we'll deep-populate reviews
      .populate({
        path: 'reviews',
        populate: {
          path: 'author'
        }
      })
      .then((game)=> {
        res.render("games/show", {
          title: "Game Details",
          apiResult: response.data,
          game
        })
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  
  
  
  */











  
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
  
/*
function create(req, res) {
    Variant.create(req.body)
    .then(variant => {
      res.json(variant)
    })
    .catch(err => {
      res.json(err)
    })
  }
   */

