const Sequelize = require('sequelize');
const config = require('../config').mysql;
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.post,
  dialect: config.dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
    // logging(){
    //   console.log('####################');
    // }
  }
});
// 验证连接是否成功
sequelize.authenticate().then(() => {
  console.log('mysql server success...');
}).catch(err => {
  console.log(err, 'error')
});
module.exports = sequelize;