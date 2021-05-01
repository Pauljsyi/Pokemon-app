const Pokemon = require('./model.js');
const pokelist = require('./pokemon.json')

// a seeding function meant to run once
Pokemon.insertMany(pokelist, 

function (err, succ) {
  if (err) {
    console.log(err)
    return
  }
  console.log("success!")
  return
})

// Pokemon.insertMany(pokelist, function (err, succ) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log("success!")
//   return
// })
