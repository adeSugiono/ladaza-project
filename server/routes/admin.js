const express = require('express');
const router = express.Router();
const { checkAuth } = require('../middleware/auth');
const adminController = require('../controllers/admin');

router.post('/login', adminController.postLogin);
router.post('/register', adminController.postRegister);
router.get('/logout', checkAuth, adminController.getDestroy);
router.get('/check', checkAuth, adminController.getCheck);

module.exports = router;
