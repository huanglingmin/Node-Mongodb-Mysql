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
    // sessionID加密
    sign(val, secret) {
        if ('string' != typeof val) throw new TypeError("Cookie value must be provided as a string.");
        if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
        return val + '.' + crypto
            .createHmac('sha256', secret)
            .update(val)
            .digest('base64')
            .replace(/\=+$/, '');
    }
    // 验证sessionID
    unsign(val, secret) {
        if ('string' != typeof val) throw new TypeError("Signed cookie string must be provided.");
        if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
        var str = val.slice(0, val.lastIndexOf('.')),
            mac = this.sign(str, secret),
            macBuffer = Buffer.from(mac),
            valBuffer = Buffer.alloc(macBuffer.length);

        valBuffer.write(val);
        return crypto.timingSafeEqual(macBuffer, valBuffer) ? str : false;
    }
}
module.exports = new Utils();