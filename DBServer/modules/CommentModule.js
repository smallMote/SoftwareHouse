const db = require('../config/db');
const Crud = require('../config/crud');
const Sequelize = db.sequelize; // 连接工具
const Comment = Sequelize.import('../schema/CommentSchema'); // 导入 Comment 模型
const User = Sequelize.import('../schema/UserSchema'); // 导入 Software 模型
Comment.sync({ force: false });
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id'
});
class CommentModule extends Crud {
  constructor() {
    super(Comment);
  }

  queryAllAndCount(softwareId, limit = 10, offset = 0) {
    return super.queryAllAndCount(limit, offset, {
      where: {
        softwareId
      },
      include: [
        {
          model: User,
          attributes: ['account', 'coverImgUrl']
        }
      ],
      attributes: ['id', 'content', 'like', 'createdAt', 'updatedAt']
    });
  }
}

module.exports = CommentModule;
