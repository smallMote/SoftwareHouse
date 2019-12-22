const db = require('../config/db');
const Crud = require('../config/crud');
const Sequelize = db.sequelize;
const ShopModule = Sequelize.import('../schema/ShopSchema');
const Software = Sequelize.import('../schema/SoftwareSchema');
ShopModule.hasMany(Software, {
  foreignKey: 'shopId'
});

ShopModule.sync({ force: false });

class ShopModel extends Crud {
  constructor() {
    super(ShopModule)
  }
  /**
   * 创建商铺对象
   * @param params
   * @returns {Promise<Model<any, any>>}
   */
  async create(params) {
    return await super.create({
      ...params,
      like: 0,
      download: 0
    })
  }

  // 商铺列表
  static async queryShopList(limit, offset, attributes) {
    return ShopModule.findAll({
      limit,
      offset,
      include: [
        {
          model: Software,
          attributes: ['id', 'cover_img_url']
        }
      ]
    })
  }
  async queryShopListAndCount(limit, offset) {
    return super.queryAllAndCount(limit, offset, {
      include: [
        {
          model: Software,
          attributes: ['id', 'cover_img_url']
        }
      ]
    })
  }

  // 搜索商铺
  async searchShopList(keywords = '', limit = 10, offset = 0) {
    return super.queryListOfBlurry(keywords, 'seo', limit, offset, {
      include: [
        {
          model: Software,
          name: 'software',
          attributes: ['id', 'cover_img_url']
        }
      ]
    })
  }

  // 查询商铺详情
  async queryShopDetail(id) {
    return super.queryDetails(id, {
      include: [
        {
          model: Software,
          name: 'software'
        }
      ]
    })
  }
}

module.exports = ShopModel;
