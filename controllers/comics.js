import { Comic } from '../models/comic.js'
import axios from 'axios'

export {
  show
}

function show(req, res) {
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?noVariants=false&limit=5&apikey=${process.env.MARVEL_PUBLIC_API_KEY}`)
    .then((response) => {
      Comic.findOne({ comicId: response.data.id })
      console.log(response.data.id)
      })
}