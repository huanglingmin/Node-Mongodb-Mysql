const crypto = require("crypto");
class Token {
    constructor(tokenObj, token, secret, expTime) {
        this.tokenObj = tokenObj;
        this.token = token || '';
        // this.token = token || "eyJhbGciOiJIUzI1NiJ9.eyJjb21wYW55SWQiOjEsIm1vYmlsZSI6IjEzNzEyMzQxMjM0IiwiY29ycElkIjoiZGluZzRmNzI0ODRiM2Q1ZmVhYWQzNWMyZjQ2NTdlYjYzNzhmIiwidXNlcklkIjoyLCJ0aW1lIjoxNTQwMTk2NjA2Nzk1LCJyb2xlcyI6IjIiLCJuYW1lIjoi5YWr5oiSOSJ9.7krm5J4iaJ3_2k4sly3SEnswuQFeeMJY5aD7u50rsT8";
        this.secret = secret || "bankgl"; //添加签名，防篡改
        this.expTime = expTime || 6 * 60 * 60; // 过期时间， 默认6个小时, 单位秒
    }
    createToken() {
        const obj = {
            ...this.tokenObj, //payload
            created: parseInt(Date.now() / 1000 + this.expTime), //token生成的时间的，单位秒
            exp: parseInt(this.expTime) //token有效期
        };
        //payload信息
        const base64Str = Buffer.from(JSON.stringify(obj), "utf8").toString("base64");
        const hash = crypto.createHmac('sha256', this.secret);
        hash.update(base64Str);
        const signature = hash.digest('base64');
        // return base64Str + "." + signature;
        this.token = base64Str + "." + signature;
    }
    decodeToken() {
        const decArr = this.token.split(".");
        if (decArr.length < 2) {
            //token不合法
            return false;
        }
        let payload = {};
        //将payload json字符串 解析为对象
        try {
            payload = JSON.parse(Buffer.from(decArr[0], "base64").toString("utf8"));
        } catch (e) {
            return false;
        }
        // 检验签名
        // 对解析出来的数据使用密钥进行加密
        const hash = crypto.createHmac('sha256', this.secret);
        hash.update(decArr[0]);
        const checkSignature = hash.digest('base64');
        return {
            payload: payload,
            signature: decArr[1],
            checkSignature: checkSignature
        }
    }
    checkToken() {
        const resDecode = this.decodeToken(this.token);
        if (!resDecode) {
            return false;
        }
        //是否过期
        const expState = (parseInt(Date.now() / 1000) - parseInt(resDecode.payload.created)) > parseInt(this.expTime) ? true : false;
        if (resDecode.signature === resDecode.checkSignature && expState) {
            return true;
        }
        return false;
    }
}
// const testToken = new Token({
//     companyId: 1,
//     mobile: '13712341234',
//     corpId: 'ding4f72484b3d5feaad35c2f4657eb6378f',
//     userId: 2,
//     roles: '2',
//     name: '八戒9'
// });
// testToken.createToken();
// console.log(testToken.decodeToken())
// console.log(testToken.checkToken())
module.exports = Token;