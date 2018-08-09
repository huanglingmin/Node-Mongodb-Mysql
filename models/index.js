const mysql = require('../db/mysql');
const User = mysql.import('User', require('./table/User'));
module.exports = {
  User
};