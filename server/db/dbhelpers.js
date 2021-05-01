// these functions communicate with the database directly
const Pokemon = require('./model.js');

const helpers = {
  get: () => {

  },
  addPokemon: (newPokemon) => {
  return Pokemon.create(newPokemon)
  },
  update: () => {

  },
  delete: () => {

  }
}

module.exports = helpers


