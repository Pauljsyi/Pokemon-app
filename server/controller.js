// bring in helpers
const helpers = require('../server/db/dbhelpers.js');


const controller = {
  get: (req, res) => {

    // console.log(req.body)

    // const {name, type, abilities, image} = req.body;


    console.log(req.body)

 

    res.send('caught' + " " + req.params.name);
  },
  getAll: (req, res) => {
    console.log(req.body)
    res.send('got all pokemon');
  },
  post: (req, res) => {
    console.log(req.body)
    helpers.addPokemon(req.body)
      .then(() => {
        res.send('pokemon was added to the pokedex');
      })
      .catch((err) => {
        console.log(err)
        res.send(err)
      })
 
  },
  update: (req, res) => {
    console.log(req.body)
    res.send('updated ' + req.params.name);
  },
  delete: (req, res) => {
    console.log(req.body)
    res.send('removed ' + req.params.name);
  }

  
}

module.exports = controller;