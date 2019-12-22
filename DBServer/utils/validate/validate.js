const REGEXP_MAVEN = require('./reg-exp-maven');

class Validate {
  // 去除首尾空格
  static clearStartAndEndEmpty(str) {
    return str ? str.trim() : str
  }
  // 去除字符串中全部空格
  static clearEmpty(str) {
    return str ? str.replace(/\s+/g, '') : ''
  };
  // 检测特殊字符
  static checkSpecialStr(str) {
    return REGEXP_MAVEN.specialStr.test(str)
  };
  // 邮件检测
  static checkEmail(email) {
    return REGEXP_MAVEN.email.test(email)
  };
  // 电话检测
  static checkTel(tel) {
    return REGEXP_MAVEN.tel.test(tel)
  };
}

module.exports = Validate;
