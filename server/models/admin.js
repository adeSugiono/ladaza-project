const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String
});

module.exports = mongoose.model('Admin', adminSchema)