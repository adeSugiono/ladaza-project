var express = require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var Product = require('../models/product');
const ObjectId = require('mongodb').ObjectId;

/* GET users listing. */
router.get('/', function (req, res, next) {
  Product.find({}, (err, data) => {
    res.status(200).json(data)
  }).catch(err => {
    json({
      error: true,
      message: `something went wrong : ${err.message}`
    })
  });
})

// add product
router.post('/', function (req, res, next) {
  const { id, title, brand, price, quantity, category, description, detail } = req.body;
  Product.create({ id, title, brand, price, quantity, category, description, detail }, function (err, data) {
    res.status(201).json({
      status: "SUCCESS",
      data: data
    });
  })
})


// edit product
router.put('/:id', function (req, res, next) {
  const { title, brand, price, quantity, description, category } = req.body;
  Product.findOneAndUpdate({ id: Number(req.params.id) }, {
    price, title, brand, quantity, description, category
  }, { new: true }, function (err, data) {
    res.status(201).json({
      status: "SUCCESS",
      data: data
    });
  })
})

// delete product
router.delete('/:_id', function (req, res, next) {
  Product.findByIdAndDelete({ _id: (req.params._id) }, function (err, data) {
    res.status(201).json({
      status: "SUCCESS",
      data: data
    });
  })
})


module.exports = router;

