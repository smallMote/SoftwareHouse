const router = require('koa-router')();
const CommentController = require('../controllers/CommentController');
router.prefix('/comment');
router.get('/', CommentController.queryCommentAllAndCount);
router.post('/create', CommentController.createComment);
module.exports = router;
