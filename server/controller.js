// bring in helpers
const helpers = require('../server/db/dbhelpers.js');


const controller = {
  get: (req, res) => {
    console.log("req params", req.params)
    helpers.getOne(req.params.id)
    .then((result)=> {
      console.log('returned promise', result)
      res.send('caught' + " " + result);
    })
    .catch((err)=> {
      console.log(err)
      res.send(err)
    })
  },
  getAll: (req, res) => {
    // console.log(req.body)
    helpers.allPokemon(req.params)
    .then((result) => {
      console.log("get all results: ", result)
      res.send(result);
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
  },
  post: (req, res) => {
    console.log(req.body)
    helpers.addPokemon(req.body)
      .then((result) => {
        res.send(result + 'pokemon was added to the pokedex');
      })
      .catch((err) => {
        console.log("ERRORRR", err)
        res.send(err)
      })
 
  },
  update: (req, res) => {
    console.log(req)
    helpers.updatePokemon(req.params.id)
    .then((result) => {
      console.log('result:', result)
      res.send('updated ' + result);
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
  },
  delete: (req, res) => {
    console.log(req.body)
    helpers.deletePokemon(req.params.id)
    .then((result) => {
      res.send('removed ' + result);
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
    
  }

  
}

module.exports = controller;