const cookieParser = require('cookie-parser');
const session = require('express-session');
module.exports = (app) => {
    app.use(cookieParser('USERSESSION'));
    app.use(session({
        secret: 'USERSESSION', // 设置session签名，和从cookie值一致
        cookie: { // 储存时间24小时
            maxAge: 60 * 1000 * 60 * 24,
            httpOnly: true
        },
        name: 'JSESSSIONID', // cookie的name，默认connect.sid
        resave: true, // 每次请求都重新设置session
        saveUninitialized: true
    }));
};