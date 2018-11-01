const express = require('express');
const router = express.Router();
const USER = require('../../service/userService');
const AETICLE = require('../../service/articleService');
const Utils = require('../../tool/utils');

// 登陆
router.post('/login', async function (req, res, next) {
  const result = await USER.userLogin(req.body);
  if (result) {
    // 设置session
    req.session.user = result;
    res.ok('登陆成功', result);
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

// 退出登陆
router.get('/outLogin', (req, res, next) => {
  req.session.user = null;
  res.ok('退出登陆成功')
});

// 获取用户列表
router.get('/userList', async (req, res, next) => {
  // console.log(Utils.unsign(req.headers.cookie, 'USERSESSION'));
  req.query.pageNum = Math.floor(req.query.pageNum);
  req.query.pageSize = Math.floor(req.query.pageSize);
  const result = await USER.getUserList(req.query.pageNum, req.query.pageSize);
  // const result = await AETICLE.getArticleList(req.query.pageNum, req.query.pageSize);
  if (result) {
    res.ok('success', result)
  } else {
    res.forbidden('error!');
  }
});
// 删除用户
router.post('/delUserList', async (req, res, next) => {
  const result = await USER.delUserList(req.body.id);
  if (result) {
    res.ok('success', '删除成功')
  } else {
    res.forbidden('删除失败');
  }
});
module.exports = router;