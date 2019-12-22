const db = require('../config/db');

const Sequelize = db.sequelize; // 连接工具

const SoftwareModule = Sequelize.import('../schema/SoftwareSchema'); // 导入 Software 模型
SoftwareModule.sync({ force: false }); // 自动创建表
class SoftwareModel {

  /**
   * 创建 Software 模型
   * @param params
   * @returns {Promise<Model<any, any>>}
   */
  static async create(params) {
    return await SoftwareModule.create({
      ...params,
      like: 0,
      download: 0
    })
  }

  static async queryAll() {
    return await SoftwareModule.findAll()
  }

  static async queryDetail(id) {
    return await SoftwareModule.findOne({
      where: { id }
    })
  }
  static async queryListFilter(filter) {
    return await SoftwareModule.findAndCountAll({
      attributes: filter
    })
  }
  // 列表查询
  static async queryList(limit = 5, offset = 0, where, filter) {
    return await Sequelize.findAndCountAll({
      limit,
      offset,
      where,
      attributes: filter
    })
  }
  // 指定查询
}

module.exports = SoftwareModel;
