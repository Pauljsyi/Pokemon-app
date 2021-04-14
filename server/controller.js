// bring in helpers

const controller = {
  get: (req, res) => {
    res.send('caught' + " " + req.params.name);
  },
  getAll: (req, res) => {
    res.send('got all pokemon');
  },
  post: (req, res) => {
    res.send('pokemon was added to the pokedex');
  },
  update: (req, res) => {
    res.send('updated ' + req.params.name);
  },
  delete: (req, res) => {
    res.send('removed ' + req.params.name);
  }

  
}

module.exports = controller;