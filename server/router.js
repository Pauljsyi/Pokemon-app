// require router
// bring in controller
// direct routes to controller

const router = express.Router();
const controller = require('./controller');

router.get('/getPokemon', controller.pokemon);
router.get('/getAllPokemon', controller.allPokemon);
router.post('/add', controller.addPokemon);
router.put('/updatePokemon', controller.updatePokemon);
router.delete('/deletePokemon', controller.deletePokemon);

module.exports = router;