import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)
console.log(`this is my timestamp on comics controller: ${ts}`)
//console.log(`this is my hashkey: ${hashKey}`)

export {
  index,
  //showCard,
  // showComic,
}

function index(req, res) {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/&limit=1&${ts}&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hashKey}`)
    .then((response) => {
      res.render("comics/", {
        title: "Comics Results",
        data: response.data.results
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
} 

/* 
function showCard(req, res){
  console.log("this showCard for comics is firing!");
  Comic.findById(req.params.id)
  .then(Comic => {
      console.log('Comic: ', Comic),
      res.render('Comices/show',{
          title: 'Comic Card Details TEST!',
          Comic
      })
  })
  .catch(err => {
      console.log(`errorrrrr: ${err}`),
      res.redirect('/')
  })
}

 */
