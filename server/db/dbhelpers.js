// these functions communicate with the database directly
const Pokemon = require('./model.js');

const helpers = {
  getOne: (identification) => {
    
    // console.log(id)
    // console.log(Pokemon.findOne({id}).schema)
    return  Pokemon.findOne({id: identification})
    
  },
  allPokemon: (pokemons) => {
    return Pokemon.find(pokemons)
  },
  addPokemon: (newPokemon) => {
    return Pokemon.create(newPokemon)
  },
  updatePokemon: (identification) => {
    console.log('identification::::', identification)
    return Pokemon.findOneAndUpdate({id: identification})
  },
  deletePokemon: (identification) => {
    console.log('identification for delete operation', identification)
    return Pokemon.findOneAndDelete({id: identification})
  }
}

module.exports = helpers
