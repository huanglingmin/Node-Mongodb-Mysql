const mysql = require('../db/mysql');
const User = mysql.import('user', require('./table/user')); // 用户表
const Article = mysql.import('article', require('./table/article')); // 文章表

// hasOne方法会将源模型与目标模型进行关联，并将外键添加到目标模型中
User.hasOne(Article, {
  foreignKey: 'user_id'

});
module.exports = {
  User,
  Article
};