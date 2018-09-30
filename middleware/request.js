const Utils = require('../tool/utils.js');
module.exports = (app) => {
    app.use((req, res, next) => {
        // const bol = req.signedCookies['connect.sid'];
        // console.log(Utils.unsign(req.headers.cookie, 'JSESSSIONID'));
        console.log(Object.keys(req));
        console.log(req.session);
        // next();
        if (req.url !== '/login') {
            if (req.session.user) {
                next();
            } else {
                console.log('未登陆');
                // res.unauthorized('未登陆');
                // res.forbidden('error!');
                // next();
            }
            next();
        } else {
            next()
        }
    });
};