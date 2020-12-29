const express = require('express');
const router = express.Router();
const Admin = require('../models/admin')

// GET
router.get('/', function (req, res, next) {
  Admin.find({}, function (err, data) {
    res.status(200).json(data)
  })
});

// ADD
router.post('/', function (req, res, next) {
  Admin.create({ id: req.body.id, name: req.body.name, email: req.body.email, password: req.body.password }, function (err, data) {
    res.status(201).json({
      status: 'SUCCESS',
      data: data
    });
  })
});

// EDIT
router.put('/:_id', function (req, res, next) {
  Admin.findOneAndUpdate({ _id: req.params._id }, { name: req.body.name, email: req.body.email, password: req.body.password }, { new: true }, function (err, data) {
    res.status(201).json({
      status: 'SUCCESS',
      data: data
    });
  })
});

// DELETE
router.delete('/:_id', function (req, res, next) {
  Admin.findOneAndRemove({ _id: req.params._id }, function (err, data) {
    res.status(201).json({
      status: 'SUCCESS',
      data: data
    });
  })
});

module.exports = router;
