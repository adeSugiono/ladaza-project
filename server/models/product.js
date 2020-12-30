const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: Number,
    title: String,
    brand: String,
    price: Number,
    quantity: Number,
    category: String,
    description: String,
    detail: String
});

module.exports = mongoose.model('Product', dataSchema);