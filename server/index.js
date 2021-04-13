// set up express
const express = require('express');
const app = express();
// bring in router
const router = require('./router');

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`)
})