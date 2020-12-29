const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin Dashboard' });
});

// Admin Login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

// router.post('/login', function(req, res, next) {
//   Admin.findOne({ email: req.body.email }, (err, data) => {
//     if (err) return res.redirect('/login');
//   })
// })

// Admin Register
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

// router.post('/register', function(req, res, next) {

// });

// Admin Reset Password
router.get('/reset', function(req, res, next) {
  res.render('reset', { title: 'Reset' });
});

// router.post('/reset', function(req, res, next) {
  
// });

module.exports = router;
