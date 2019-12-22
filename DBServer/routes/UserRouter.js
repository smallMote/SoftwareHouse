const router = require('koa-router')();
const UserController = require('../controllers/UserController');

router.post('/register', UserController.createUser);
router.post('/login', UserController.login);

module.exports = router;
