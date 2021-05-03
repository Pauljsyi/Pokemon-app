// require router
// bring in controller
// direct routes to controller
// const express = require('express');
// const router = express.Router();
const router = require('express').Router()
const controller = require('./controller');



// router.get('/getpokemon/:name', controller.get);
// router.post('/addPokemon', controller.post);
// router.put('/updatePokemon', controller.update);
// router.delete('/deletePokemon', controller.delete);


router
  .route('/pokemon')
    .get(controller.getAll)
    .post(controller.post)
router
  .route('/pokemon/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete)

module.exports = router;