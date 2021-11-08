const router = require('express').Router();
const {RegistertPost,LoginController,getUser} = require('../controllers/RegisterController')
router.post('/register',RegistertPost);
router.get('/users',getUser);
router.post('/login',LoginController);

module.exports = router;