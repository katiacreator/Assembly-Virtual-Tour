import { Comic } from '../models/comic.js'
import { Alias } from '../models/alias.js'
import axios from 'axios'
import md5 from 'md5'

let ts = Date.now()
let hashKey = md5(`${ts}+${process.env.MARVEL_PRIVATE_API_KEY}+${process.env.MARVEL_PUBLIC_API_KEY}`)
//console.log(`this is my timestamp on comics controller: ${ts}`)
//console.log(`this is my hashkey: ${hashKey}`)

export {
  indexComic
}


function indexComic(req, res) {
  Alias.findById(req.params.id)
  .populate({
    path: 'comics',
    populate: {
      path: 'name',
      path: 'image',
      path:'alias',
      path:'comicsTotal',
      path:'seriesTotal',
      path:'storiesTotal',
      path:'eventsTotal',
      path: 'comicId'
    }
  })
  .then((alias)=> {
    console.log(alias)
    res.render('comics/show', {
      title: 'Comics Details',
      alias
    })
  })
}


