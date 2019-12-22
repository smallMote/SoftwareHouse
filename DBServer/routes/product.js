const router = require('koa-router')();
const SoftwareController = require('../controllers/SoftwareController');
router.prefix('/product');
router.get('/', SoftwareController.queryAllSoftware);
router.get('/filter', SoftwareController.querySoftwareListByFilter);
router.get('/:id', SoftwareController.detail);
router.post('/create', SoftwareController.createSoftware);

module.exports = router;
