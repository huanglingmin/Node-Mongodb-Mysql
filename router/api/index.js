const express = require('express');
const router = express.Router();
const getUserInfo = require('../../service/userService');
/* GET home page. */
router.get('/', async function(req, res, next) {
  const params = {
    data: await getUserInfo()
  };
  res.send(params);
});

module.exports = router;
