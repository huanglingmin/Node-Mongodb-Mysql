class Utils {
    constructor() {}
    // 分页
    offsetPage(pageNum = 1, pageSize = 10) {
        const offset = pageSize * (pageNum - 1);
        return offset;
    }
}
module.exports = new Utils();