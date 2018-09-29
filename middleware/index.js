const response = require('./response.js');
module.exports = {
    beforeRouter(app) {
        response(app);
    }
};