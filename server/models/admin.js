const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('Admin', adminSchema)