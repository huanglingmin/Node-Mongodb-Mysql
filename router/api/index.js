const express = require('express');
const router = express.Router();
const USER = require('../../service/userService');

// 登陆
router.post('/login', async function (req, res, next) {
  const params = {
    data: await USER.getUserInfo(req.body)
  };
  res.send(params);
});

// 注册
router.post('/register', async function (req, res, next) {
  const status = await USER.register(...Object.values(req.body));
  if (status) {
    res.json({
      msg: 'success注册成功'
    });
  } else {
    res.json({
      msg: 'error手机号已经注册了'
    });
  }
});

// 获取用户列表
router.get('/user_list', async (req, res, next) => {
  req.query.pageNum = Math.floor(req.query.pageNum);
  req.query.pageSize = Math.floor(req.query.pageSize);
  const data = await USER.getUserList(...Object.values(req.query));
  if (data) {
    res.json(data)
  } else {
    res.json({
      mes: 'errr'
    })
  }
});
module.exports = router;