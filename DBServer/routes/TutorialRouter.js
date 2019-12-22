const router = require('koa-router')();
const TutorialController = require('../controllers/TutorialController');
router.prefix('/tutorial');
router.get('/:id', TutorialController.queryDetail);
router.post('/create', TutorialController.createTutorial);

module.exports = router;
