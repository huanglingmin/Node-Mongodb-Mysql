const models = require('../models');
const Utils = require('../tool/utils.js');
async function getArticleList(pageNum = 1, pageSize = 10) {
    try {
        const offset = Utils.offsetPage(pageNum, pageSize);
        return await models.User.findAndCountAll({
            include: {
                model: models.Article,
                // 通过传入一个数组对字段重新命名id=>articleId
                attributes: ['content', 'title', ['id', 'articleId']],
                where: {
                    user_id: {
                        $or: [10, 13]
                    }
                },
                // $or: [{
                //     user_id: 13
                // }],
            },
            offset,
            limit: pageSize
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getArticleList
};