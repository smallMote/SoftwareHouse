const md5 = require('md5');
class UserEncrypt {
  constructor(salt) {
    this.salt = salt || Math.random().toString(16).substr(2)
  }

  md5AndSalt(val, salt = this.salt) {
    return {
      salt,
      value: md5(md5(val) + salt.substr(2))
    }
  }

  /**
   * token 判断是否在有效期内
   * @param sqlToken 数据库中存放的token createdAt-token-destroyAt
   */
  static checkToken(sqlToken) {
    const tokenArr = sqlToken.split('-');
    return tokenArr[2] - tokenArr[0] > 0
  }

  /**
   *
   * @param clientToken
   * @param longTime eg:7d->7天
   * @returns {string}
   */
  static createServeToken(clientToken, longTime = '7d') {
    longTime = parseInt(longTime);
    if (longTime > 30) {
      longTime = 30
    }
    let createdAt = Date.now();
    let destroyAt = createdAt + (longTime * 1000 * 3600 * 24);
    return `${createdAt}-${md5(createdAt)+clientToken}-${destroyAt}`
  }
}

module.exports = UserEncrypt;
