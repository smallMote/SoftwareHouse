const CommentModel = require('../modules/CommentModule');
const commentModel = new CommentModel();
class CommentController {
  static async createComment(ctx) {
    const params = ctx.request.body;
    let userId = params.userId;
    let softwareId = params.softwareId;
    let content = params.content;
    if (!softwareId || !content || !userId) {
      ctx.body = {
        code: -1,
        message: '参数不全'
      };
      return
    }
    try {
      const result = await commentModel.create({
        user_id: userId,
        software_id: softwareId,
        content,
        like: 0
      });
      ctx.body = {
        code: 0,
        message: 'ok',
        data: result
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '评论失败',
        data: e
      }
    }
  }

  static async queryCommentAllAndCount(ctx) {
    const params = ctx.query;
    let softwareId = params.softwareId;
    if (!params.softwareId) {
      ctx.body = {
        code: -1,
        message: '参数不全'
      };
      return
    }
    try {
      const comment = await commentModel.queryAllAndCount(softwareId);
      ctx.body = {
        code: 0,
        message: 'ok',
        count: comment.count,
        data: comment.rows
      }
    } catch (e) {
      ctx.body = {
        code: -1,
        message: '获取评论列表失败',
        data: e
      }
    }
  }
}

module.exports = CommentController;
