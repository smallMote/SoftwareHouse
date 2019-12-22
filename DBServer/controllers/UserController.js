const UserModule = require('../modules/UserModule');
const Validate = require('../utils/validate/validate');
const UserEncrypt = require('../utils/encrypt/user');
const user = new UserModule();
const userEncrypt = new UserEncrypt();

class UserController {
  // 创建用户
  static async createUser(ctx) {
    const userParams = ctx.request.body;
    let account = userParams.account,
        password = userParams.password;
    account = Validate.clearEmpty(account);
    password = Validate.clearEmpty(password);
    if (Validate.checkSpecialStr(account) || Validate.checkSpecialStr(password)) {
      ctx.body = {
        code: -1,
        message: '账号或密码非法'
      };
      return
    }
    let tel = userParams.tel,
        email = userParams.email;
    if (account && Validate.checkTel(account)) {
      tel = account
    }
    if (account && Validate.checkEmail(account)) {
      email = account
    }
    password = userEncrypt.md5AndSalt(password);
    const params = {
      account,
      password: password.value,
      tel,
      email,
      salt: password.salt
    };
    try {
      await user.create(params);
      ctx.body = {
        code: 0,
        message: 'ok'
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '创建用户失败',
        data: e
      }
    }
  }
  static register(ctx) {

  }
  // 登陆
  static async login(ctx) {
    const userParams = ctx.request.body;
    let account = userParams.account;
    let password = userParams.password;
    account = Validate.clearEmpty(account);
    password = Validate.clearEmpty(password);
    if (Validate.checkSpecialStr(account) || Validate.checkSpecialStr(password)) {
      ctx.body = {
        code: -1,
        message: '账号或密码非法'
      };
      return
    }
    // 查询用户信息
    try {
      const userInfo = await user.queryDetailsByFilter({ account });
      if (userInfo && userInfo.id) {
        let u_password = userInfo.password;
        let userPassword = userEncrypt.md5AndSalt(password, userInfo.salt);
        let serverToken = UserEncrypt.createServeToken(userEncrypt.md5AndSalt(account).value);
        let clientToken = serverToken.split('-')[1];
        await user.updateById(userInfo.id, { token: serverToken, salt: userPassword.salt });
        if (userPassword.value === u_password) {
          ctx.body = {
            code: 0,
            message: '登陆成功',
            data: {
              token: clientToken,
              account: userInfo.account,
              cover_img_url: userInfo.cover_img_url,
              email: userInfo.email,
              tel: userInfo.tel,
              nickName: userInfo.nickName,
              createdAt: userInfo.createdAt,
              updatedAt: userInfo.updatedAt
            }
          }
        } else {
          ctx.body = {
            code: -1,
            message: '用户名或密码不正确',
            data: e
          }
        }
      } else {
        ctx.body = {
          code: -1,
          message: '用户不存在',
          data: {}
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '登陆失败',
        data: e
      }
    }
  }
  // 更新用户信息
  static updateUserInfo(user) {}
}

module.exports = UserController;
