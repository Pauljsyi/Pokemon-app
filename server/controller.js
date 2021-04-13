// bring in helpers

const controller = {
  get: (req, res) => {
    console.log('got pokemon');
  },
  post: (req, res) => {
    console.log('created pokemon');
  },
  update: () => {
    console.log('updated pokemon');
  },
  delete: () => {
    console.log('deleted pokemon');
  }
}

module.exports = controller;