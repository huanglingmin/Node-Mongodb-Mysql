const request = require('./request.js');
const response = require('./response.js');
const session = require('./session.js');
module.exports = {
    // 在进入路由前进行将中间件与app绑定
    beforeRouter(app) {
        // request(app);
        response(app);
        session(app);
    }
};