const crypto = require('crypto');
class Utils {
    constructor() {}
    // 分页
    offsetPage(pageNum = 1, pageSize = 10) {
        const offset = pageSize * (pageNum - 1);
        return offset;
    }
    // 加密
    encryptPassword(password) {
        return crypto.createHash('sha256').update(password).digest('hex');
    }
}
module.exports = new Utils();