// set up express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./db/index.js')
// bring in router
const router = require('./router')

const Port = process.env.PORT || 5000;

connectDB();

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// for static req, express.static

//use router
app.use(router);


app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`)
})

