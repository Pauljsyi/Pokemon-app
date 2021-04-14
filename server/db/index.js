//connect to mongoDB
//require mongoose
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const config = require('config');
const db = config.get('mongoURI')



const connectDB = async () => {
  try {
    await mongoose.connect(db, { useMongoClient:true })
    console.log('MongoDB Connected...')
} catch(e) {
    console.error('ERRORRRR!!!',e.message);

    //Exit Process with failure
    process.exit(1);
}
}

module.exports = connectDB