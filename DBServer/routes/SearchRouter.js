const router = require('koa-router')();
const SearchController = require('../controllers/SearchController');
router.prefix('/search');
router.get('/shop', SearchController.searchShop);

module.exports = router;
