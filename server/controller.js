// bring in helpers

const controller = {
  get: (req, res) => {
    res.send('got pokemon');
  },
  post: (req, res) => {
    res.send('created pokemon');
  },
  update: (req, res) => {
    res.send('updated pokemon');
  },
  delete: (req, res) => {
    res.send('deleted pokemon');
  }

  
}

module.exports = controller;