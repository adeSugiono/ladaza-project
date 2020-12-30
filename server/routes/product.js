var express = require('express');
var router = express.Router();
var Product = require('../models/product');

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
router.delete('/:id', function (req, res, next) {
  Product.findOneAndRemove({ id: Number(req.params.id) }, function (err, data) {
    res.status(201).json({
      status: "SUCCESS",
      data: data
    });
  })
})


module.exports = router;

