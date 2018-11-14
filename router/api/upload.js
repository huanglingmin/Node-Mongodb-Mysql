const express = require('express');
const fs = require('fs');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'public/images' })
const info = require('../../tool/info.js');
const config = require('../../config');
router.get('/', function (req, res, next) {
  res.render('../../views/upload.html');
})
router.post('/', upload.array('thumbnail', 5), function (req, res, next) {
  const name = new Date().getTime();
  // req.files 是 前端表单name=="imageFile" 的多个文件信息（数组）,限制数量5，应该打印看一下
  for (var i = 0; i < req.files.length; i++) {
    // 图片会放在uploads目录并且没有后缀，需要自己转存，用到fs模块
    // 对临时文件转存，fs.rename(oldPath, newPath,callback);
    const index = req.files[i].originalname.lastIndexOf('.');
    const type = req.files[i].originalname.substr(index);
    fs.rename(req.files[i].path, `public/images/${name}${type}`, function (err) {
      if (err) {
        throw err;
      }
      res.send(`http://${info.getIP()}:${config.project.port}/images/${name}${type}`);
    })
  }
});
module.exports = router;