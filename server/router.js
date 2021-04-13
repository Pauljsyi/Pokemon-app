// require router
// bring in controller
// direct routes to controller
const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/getPokemon', controller.get);
router.post('/addPokemon',controller.post);
router.put('/updatePokemon', controller.update);
router.delete('/deletePokemon', controller.delete);

module.exports = router;