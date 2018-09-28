const models = require('../models');
const crypto = require('crypto');
const Utils = require('../tool/utils.js');

// 登陆
async function getUserInfo(body) {
  try {
    const data = await models.User.findOne({
      where: {
        iphone: body.iphone
      }
    });
    console.log(data, 89889888);
    return data;
  } catch (error) {
    console.log('error');
  }
};
// 注册
async function register(iphone = '', username = '', password = '', id = 0, role = 1) {
  try {
    const hasIphone = await isRegister(iphone);
    if (hasIphone) {
      return false;
    } else {
      const params = {
        iphone,
        username,
        password,
        id,
        role
      }
      if (params.id <= 0) {
        params.password = crypto.createHash('sha1').update(params.password).digest('hex');
        return await models.User.upsert(params);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
// 判断手机号是否已经注册
async function isRegister(iphone) {
  try {
    const params = {
      iphone
    };
    return await models.User.findOne({
      where: {
        iphone
      }
    });
  } catch (error) {
    console.log(error);
  }
}


// 获取用户列表
async function getUserList(pageNum = 1, pageSize = 10) {
  try {
    const offset = Utils.offsetPage(pageNum, pageSize);
    // 分页查找 findAndCountAll
    const data = await models.User.findAndCountAll({
      attributes: ['createdAt', 'iphone', 'username'],
      order: [
        ['createdAt', 'DESC']
      ],
      offset,
      limit: pageSize
    });
    return data;
  } catch (error) {
    console.log('error');
    return false;
  }
}

// 验证账号密码是否正确
// verify

module.exports = {
  getUserInfo,
  register,
  getUserList
};