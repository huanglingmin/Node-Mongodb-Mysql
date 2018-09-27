// 在开发环境中获取局域网中的本机iP地址
const interfaces = require('os').networkInterfaces();
class Info {
  constructor() { }
  getIP () {
    for (let devName in interfaces) {
      let iface = interfaces[devName];
      for (let i = 0, len = iface.length; i < len; i++) {
        let alias = iface[i];
        if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
          return alias.address;
        }
      }
    };
  }
}
module.exports = new Info();