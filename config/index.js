const config = {
  mongodb: {
    // user: 'admin',
    // pwd: '123456',
    host: 'localhost',
    port: '27017',
    database: 'weixin',
    // authSource: 'admin',
  },
  mysql: {
    username: 'root',
    password: 'Root@123',
    host: 'localhost',
    port: '3306',
    // database: 'weixin',
    database: 'weixin',
    dialect: 'mysql',
  },
};
module.exports = config;
