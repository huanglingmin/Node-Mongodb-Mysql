const express = require('express');
const router = express.Router();
const USER = require('../../service/userService');

// 登陆
router.post('/login', async function (req, res, next) {
  const result = await USER.userLogin(req.body);
  if (result) {
    res.ok('登陆成功', result)
  } else {
    res.forbidden('用户名或密码错误!');
  }
});

// 注册
router.post('/register', async function (req, res, next) {
  const result = await USER.register(req.body.iphone, req.body.username, req.body.password);
  if (result) {
    res.ok('注册成功', result)
  } else {
    res.forbidden('手机号已注册!');
  }
});

// 获取用户列表
router.get('/user_list', async (req, res, next) => {
  req.query.pageNum = Math.floor(req.query.pageNum);
  req.query.pageSize = Math.floor(req.query.pageSize);
  const result = await USER.getUserList(req.query.pageNum, req.query.pageSize);
  if (result) {
    res.ok('success', result)
  } else {
    res.forbidden('error!');
  }
});
module.exports = router;