import MD5 from 'md5'
import Crud from '../crud'

export default class User extends Crud {
  constructor () {
    super('/user')
  }

  login (account, password) {
    if (!account || !password) {
      return
    }
    return super.update('/login', { account, password: MD5(password) })
  }
  register (account, password) {
    if (!account || !password) {
      return
    }
    return super.update('/register', { account, password: MD5(password) })
  }
}
