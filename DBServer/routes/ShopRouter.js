const router = require('koa-router')();
const ShopController = require('../controllers/ShopController');
router.prefix('/shop');
router.get('/', ShopController.fetchShopList);
router.get('/:id', ShopController.fetchShopDetail);
router.post('/create', ShopController.createShop);

module.exports = router;
