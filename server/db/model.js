// //create Schema
const mongoose = require('mongoose');
const database = require('./index.js')

const PokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  img: {
    type: String
  }
})

module.exports = Pokemon = mongoose.model('pokemon', PokemonSchema)

// module.exports="test";
