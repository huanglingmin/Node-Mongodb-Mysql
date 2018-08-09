const models = require('../models');
async function getUserInfo () {
  try {
    const data = await models.User.findAll({
      attributes: ['username', 'password', 'id']
    });
    return data;
  } catch (error) {
    console.log('错误');
  }
};
module.exports = getUserInfo;