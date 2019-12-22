const ShopModel = require('../modules/ShopModule');
const shopModel = new ShopModel();

class SearchController {
  // 搜索商铺
  static async searchShop(ctx) {
    const keywords = ctx.query.keywords;
    try {
      if (!keywords) {
        const data = await shopModel.queryShopListAndCount();
        ctx.body = {
          code: 0,
          message: 'ok',
          count: data.count,
          data: data.rows
        }
      } else {
        // let fields = ctx.query.fields || 'seo';
        const data = await shopModel.searchShopList(keywords);
        ctx.body = {
          code: 0,
          message: 'ok',
          count: data.count,
          data: data.rows
        }
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '查询失败',
        data: []
      }
    }
  }
}

module.exports = SearchController;
