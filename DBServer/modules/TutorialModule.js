const db = require('../config/db');
const Crud = require('../config/crud');
const Sequelize = db.sequelize; // 连接工具
const Software = Sequelize.import('../schema/SoftwareSchema'); // 导入 Software 模型
const Tutorial = Sequelize.import('../schema/TutorialSchema'); // 导入 Software 模型
Tutorial.hasOne(Software, {
  foreignKey: 'contentId',
  targetKey: 'id'
});

Tutorial.sync({ force: false }); // 自动创建表

class TutorialModule extends Crud {
  constructor() {
    super(Tutorial)
  }

  async queryDetails(id) {
    return super.queryDetails(id, {
      include: [
        {
          model: Software,
          attributes: ['id', 'name', 'seo', 'coverImgUrl']
        }
      ]
    });
  }
}

module.exports = TutorialModule;
