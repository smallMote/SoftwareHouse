const TutorialModule = require('../modules/TutorialModule');
const Tutorial = new TutorialModule();

class TutorialController {
  // 创建教程
  static async createTutorial(ctx) {
    let title = ctx.request.body.title,
        content = ctx.request.body.content;
    if (!title || !content) {
      ctx.body = {
        code: -1,
        message: '参数不全'
      };
      return
    }
    try {
      const tutorial = await Tutorial.create({ title, content });
      ctx.body = {
        code: 0,
        message: 'ok',
        data: tutorial
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '创建失败',
        data: e
      };
    }
  }
  // 查询根据产品 id 教程
  static async queryDetail(ctx) {
    const id = ctx.params.id;
    if (!id) {
      ctx.body = {
        code: -1,
        message: '参数不全'
      };
      return
    }
    try {
      const tutorial = await Tutorial.queryDetails(id);
      ctx.body = {
        code: 0,
        message: 'ok',
        data: tutorial
      }
    } catch (e) {
      console.log(e);
      ctx.body = {
        code: -1,
        message: '获取教程失败',
        data: e
      };
    }
  }
}

module.exports = TutorialController;
