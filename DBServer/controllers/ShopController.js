const ShopModel = require('../modules/ShopModule');
const shopModel = new ShopModel();
class ShopController {
  // 创建商铺
  static async createShop(ctx) {
    const shop = ctx.request.body;
    if (shop.name && shop.cover_img_url && shop.desc) {
      const seo = shop.seo || shop.name;
      try {
        // 创建表模型
        const createResult = await shopModel.create({ ...shop, seo });
        const data = await shopModel.queryDetails(createResult.id);
        ctx.body = {
          code: 0,
          message: 'ok',
          data
        }
      } catch (e) {
        ctx.body = {
          code: -1,
          message: '创建失败',
          data: e
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '参数不全',
        data: {}
      }
    }
  }
  // 查询全部商铺
  static async fetchShopList(ctx) {
    try {
      const data = await ShopModel.queryShopList();
      ctx.body = {
        code: 0,
        message: 'ok',
        data
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '查询失败',
        data: e
      }
    }
  }
  // 条件查询
  // 查询一条记录
  static async fetchShopDetail(ctx) {
    const shopId = ctx.params.id;
    console.log(ctx.query);
    if (!shopId) {
      ctx.body = {
        code: -1,
        message: '参数不全'
      };
      return
    }
    try {
      const data = await shopModel.queryShopDetail(shopId);
      ctx.body = {
        code: 0,
        message: 'ok',
        data
      };
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '查询失败',
        data: e
      }
    }
  }
}

module.exports = ShopController;
