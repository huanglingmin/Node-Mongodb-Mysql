const models = require('../models');
const Utils = require('../tool/utils.js');
const _lang = require('lodash/fp/lang');
/**
 * 登陆
 * @param {String} iphone 手机号
 * @param {String} password 密码
 */
async function userLogin (iphone = '', password = '') {
  try {
    return await models.User.findOne({
      attributes: {
        // 排除指定属性
        exclude: ['password', 'updatedAt', 'createdAt']
      },
      where: {
        iphone,
        password: Utils.encryptPassword(password),
      }
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * 注册
 * @param {String} iphone 手机号
 * @param {String} nickname 用户昵称
 * @param {String} password 密码
 * @param {String} email 邮箱
 * @param {String} residence 地区市
 * @param {Number} id 用户id
 * @param {Number} role 用户角色
 */
async function register (iphone = '', nickname = '', password = '', email = '', residence = '', id = 0, role = 1) {
  try {
    const hasIphone = await isRegister(iphone);
    if (hasIphone) {
      return false;
    } else {
      const params = {
        iphone,
        nickname,
        password,
        id,
        role,
        email,
        residence
      }
      if (params.id <= 0) {
        params.password = Utils.encryptPassword(params.password);
        return await models.User.upsert(params);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// 查询手机号信息，可用来判断是否已注册
async function isRegister (iphone) {
  try {
    return await models.User.findOne({
      where: {
        iphone
      },
      raw: true // 只返回数据库的字段
    });
  } catch (error) {
    console.log(error);
  }
}

// 获取用户列表
async function getUserList (pageNum = 1, pageSize = 10) {
  try {
    const offset = Utils.offsetPage(pageNum, pageSize);
    // 分页查找 findAndCountAll
    const data = await models.User.findAndCountAll({
      attributes: ['createdAt', 'iphone', 'nickname', 'id'],
      where: {
        delete: 0
      },
      order: [
        ['createdAt', 'DESC']
      ],
      offset,
      limit: pageSize
    });
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

/**
 * 删除用户(软删除)
 * @param {Number} id 用户id
 */
async function delUserList (id = "") {
  try {
    return await models.User.update({
      delete: 1
    }, {
        where: {
          id
        },
        fields: ['delete']
      });
  } catch (error) {
    console.log(error);
  }
}

/**
 * 忘记密码修改
 * @param {String} iphone 手机号
 * @param {String} email 邮箱
 * @param {String} nickname 用户昵称
 * @param {String} residence 地区市
 */
async function forgetPassword (iphone = '', email = '', nickname = '', residence = '', newPassword = '') {
  try {
    const data = await isRegister(iphone);
    if (data) {
      const xxx = {
        iphone: data.iphone,
        email: data.email,
        nickname: data.nickname,
        residence: data.residence
      };
      const yyy = { iphone, email, nickname, residence };
      const bol = _lang.isEqual(xxx, yyy);
      if (bol) {
        return await models.User.update({ password: Utils.encryptPassword(newPassword) }, {
          where: { iphone },
          fields: ['password']
        });
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  userLogin,
  register,
  getUserList,
  delUserList,
  forgetPassword
};