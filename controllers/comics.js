import { Comic } from '../models/comic.js'
import axios from 'axios'
import md5 from 'md5'

export {
  show
}

function show(req, res) {
  let hashKey = md5(process.env.MARVEL_PUBLIC_API_KEY)
  console.log(hashKey)
    axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${req.params.id}/comics?noVariants=false&limit=5&ts=1&apikey=${process.env.MARVEL_PUBLIC_API_KEY}&hash=${hashKey}`)
    .then((res) => {
      Comic.findOne({ comicId: res.data.id })
      console.log(res.data.id)
      })
}