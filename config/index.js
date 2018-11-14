const config = {
  project: {
    port: 3000
  },
  mongodb: {
    // user: 'admin',
    // pwd: '123456',
    host: '10.255.4.98',
    port: '27017',
    database: 'weixin',
    // authSource: 'admin',
  },
  // mysql: {
  //   username: 'hlm',
  //   password: 'Root@123',
  //   host: 'localhost',
  //   port: '3306',
  //   // database: 'weixin',
  //   database: 'node',
  //   dialect: 'mysql',
  // },
  mysql: {
    username: 'root',
    password: 'Root@123',
    host: 'localhost',
    port: '3306',
    // database: 'weixin',
    database: 'node',
    dialect: 'mysql',
  }
};
module.exports = config;
