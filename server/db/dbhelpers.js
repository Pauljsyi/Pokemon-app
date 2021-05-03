// these functions communicate with the database directly
const Pokemon = require('./model.js');

const helpers = {
  getOne: (identification) => {
    
    // console.log(id)
    // console.log(Pokemon.findOne({id}).schema)
    return  Pokemon.findOne({id: identification})
    
  },
  allPokemon: (pokemons) => {
    return Pokemon.find(pokemons).batchSize(10)
  },
  addPokemon: (newPokemon) => {
    return Pokemon.create(newPokemon)
  },
  updatePokemon: (identification) => {
    return Pokemon.findOneAndUpdate(id: identification)
  },
  deletePokemon: () => {

  }
}

module.exports = helpers
