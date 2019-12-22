const SoftwareModel = require('../modules/SoftwareModule');

class SoftwareController {
  /**
   * 创建产品
   * @param ctx
   * @returns {Promise<void>}
   */
  static async createSoftware(ctx) {
    // 接收客户端
    const software = ctx.request.body;
    if (software.name && software.cover_img_url && software.desc && software.wangpan_url && software.download_link) {
      try {
        // 创建表模型
        let seo = software.seo || software.name;
        const createResult = await SoftwareModel.create({...software, seo});
        const data = await SoftwareModel.queryDetail(createResult.id);
        ctx.body = {
          code: 0,
          message: 'ok',
          data
        }
      } catch (e) {
        ctx.body = {
          code: -1,
          message: '创建产品失败',
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
  // 查询所有产品
  static async queryAllSoftware(ctx) {
    try {
      const data = await SoftwareModel.queryAll()
      ctx.body = {
        code: 0,
        message: 'ok',
        data
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '获取产品失败',
        data: e
      }
    }
  }
  // 查询列表，显示filter传递的字段
  static async querySoftwareListByFilter(ctx) {
    let filters = ctx.query.filters;
    filters = filters.split(',');
    try {
      const data = await SoftwareModel.queryListFilter(filters);
      ctx.body = {
        code: 0,
        message: 'ok',
        data
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '获取产品列表失败',
        data: e
      }
    }
  }
  /**
   * 查询产品详情
   * @param ctx
   * @returns {Promise<void>}
   */
  static async detail(ctx) {
    const id = ctx.params.id;
    if (id) {
      try {
        const data = await SoftwareModel.queryDetail(id);
        ctx.body = {
          code: 0,
          message: 'ok',
          data
        }
      } catch (e) {
        ctx.body = {
          code: -1,
          message: '获取产品详情失败',
          data: e
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '缺少必要的 id',
        data: {}
      }
    }
  }
  // 列表查询
  static async querySoftwareList(ctx) {
    try {
      const params = ctx.query;
      const data = SoftwareModel.queryList(params.limit , params.offset, params.where);
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
}

module.exports = SoftwareController;
