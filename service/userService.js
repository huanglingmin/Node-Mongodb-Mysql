const models = require('../models');
const Utils = require('../tool/utils.js');

// 登陆
async function userLogin(body) {
  try {
    return await models.User.findOne({
      attributes: {
        // 排除指定属性
        exclude: ['password', 'updatedAt', 'createdAt']
      },
      where: {
        iphone: body.iphone,
        password: Utils.encryptPassword(body.password)
      }
    });
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
        params.password = Utils.encryptPassword(params.password);
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
      attributes: ['createdAt', 'iphone', 'username', 'id'],
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
    console.log('error');
    return false;
  }
}

// 删除用户(软删除)
async function delUserList(id = "") {
  try {
    // return await models.User.destroy({
    //   where: {
    //     id
    //   }
    // });
    return await models.User.update({
      delete: 1
    }, {
      where: {
        id
      },
      fields: ['delete']
    });
  } catch (error) {
    console.log('error');
  }
}
module.exports = {
  userLogin,
  register,
  getUserList,
  delUserList
};