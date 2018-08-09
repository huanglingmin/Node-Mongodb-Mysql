const mongoose = require('mongoose');
const config = require('../config');
// const uri = `mongodb://${config.mongodb.user}:${config.mongodb.pwd}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}?authSource=${config.mongodb.authSource}`
const url = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`;

mongoose.Promise = global.Promise; //需要
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('mongodb service connected successs...');
});
module.exports = mongoose;