const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan'); // 日志
const cors = require('cors'); //跨域
// const middleware = require('./middleware/index.js'); // 中间件

const api = require('./router/api');
const upload = require('./router/api/upload');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 使用html渲染
app.set('views', path.join('views/upload.html'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', api);
// app.use('/upload', upload);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // console.log(req.url, 99999999);
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
