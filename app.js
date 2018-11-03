const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
const logger = require('morgan'); // 日志
const cors = require('cors'); // 跨域
const middleware = require('./middleware'); // 中间件

const user = require('./router/api/user');
const upload = require('./router/api/upload');

// const API = require('./router/index');

const app = express();

app.use(cors());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
middleware.beforeRouter(app);

// 使用html渲染
// app.set('views', path.join('views/upload.html'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/node/user', user);
app.use('/node/upload', upload);

// app.use('/api', API);

// 默认访问的页面
app.get('/', function (req, res) {
  res.render('index');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
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