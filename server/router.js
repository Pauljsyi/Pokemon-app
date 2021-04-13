// require router
// bring in controller
// direct routes to controller
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/getPokemon', (req, res) => {
  controller.get
});
router.post('/addPokemon', (req, res) => {
  controller.post
});
router.put('/updatePokemon', (req, res) => {
  controller.put
});
router.delete('/deletePokemon', (req, res) => {
  controller.delete
});

module.exports = router;