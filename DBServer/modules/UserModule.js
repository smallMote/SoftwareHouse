const db = require('../config/db');
const Crud = require('../config/crud');
const Sequelize = db.sequelize;
const UserSchema = Sequelize.import('../schema/UserSchema');
UserSchema.sync({ force: false });
class UserModule extends Crud {
  constructor() {
    super(UserSchema)
  }
}

module.exports = UserModule;
