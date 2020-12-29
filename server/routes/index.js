const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Admin Dashboard' });
});

<<<<<<< HEAD
router.get('/product', function(req,res, next ) {
  res.render('product');
})
=======
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
>>>>>>> a0d97e4a00a4ac5c8d716281f1a5e7c128fc88d0

module.exports = router;
