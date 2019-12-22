const sequelize = require('sequelize');
const OP = sequelize.Op;
class Crud {
  constructor(sequelizeModule) {
    this.sequelizeModule = sequelizeModule
  }

  async create(params) {
    return await this.sequelizeModule.create(params)
  }

  async queryAll() {
    return await this.sequelizeModule.findAll()
  }

  async queryAllAndCount(limit = 10, offset = 0, option) {
    return await this.sequelizeModule.findAndCountAll({
      ...option,
      limit,
      offset
    })
  }

  // seo 模糊查询
  async queryListOfBlurry(keywords, fields = 'seo', limit = 10, offset = 0, option) {
    return await this.sequelizeModule.findAndCountAll({
      ...option,
      where: {
        [fields]: {
          [OP.like]: `%${keywords}%`
        }
      },
      limit,
      offset
    })
  }

  async queryDetails(id, option) {
    return await this.sequelizeModule.findOne({
      ...option,
      where: { id }
    })
  }
  async queryDetailsByFilter(filter) {
    return await this.sequelizeModule.findOne({
      where: filter
    })
  }
  async queryListFilter(filter) {
    return await this.sequelizeModule.findAll({
      attributes: filter
    })
  }

  async queryListFilterAndCount(filter) {
    return await this.sequelizeModule.findAndCountAll({
      attributes: filter
    })
  }

  // 全更新
  async update(module, filter) {
    return await this.sequelizeModule.update(module, {
      where: filter
    })
  }
  // id 更新
  async updateById(id, params) {
    if (!id) return Promise.reject({ code: -1, message: '缺少必要的 id 参数'});
    return await this.sequelizeModule.update(params, {
      where: { id }
    })
  }
}

module.exports = Crud;
