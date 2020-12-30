const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Admin = require('../models/admin');

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;

    Admin.findOne({ 'email': email }, function (err, admin) {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (admin) {
                bcrypt.compare(password, admin.password, function (err, valid) {
                    if (valid) {
                        let token = jwt.sign({ 'email': email }, 'rubicamp');
                        Admin.findOneAndUpdate({ 'email': email }, { 'token': token }, function (err, response) {
                            if (err) {
                                res.status(400).json({ error: err });
                            } else {
                                res.status(200).json({ data: { 'email': email }, 'token': token });
                            }
                        })
                    } else {
                        res.status(400).json({ 'error': 'email or password not correct' });
                    }
                })
            } else {
                res.status(400).json({ 'error': 'email or password not correct' });
            }
        }
    })
}

exports.postRegister = (req, res, next) => {
    const { email, password, retypepassword } = req.body;
    console.log(req.body);
    if (password == retypepassword) {
        Admin.findOne({ 'email': email }, function (err, admin) {
            if (err) throw err;
            if (admin) {
                res.status(400).json({ 'error': 'Email is already registered' });
            } else {
                let token = jwt.sign({ 'email': email }, 'rubicamp');
                bcrypt.hash(password, saltRounds, function (err, hash) {
                    const adminNew = new Admin({ 'email': email, 'password': hash, 'token': null });
                    adminNew.save(() => {
                        res.status(200).json({ data: { 'email': email }, 'token': token })
                    });
                });
            }
        })
    } else {
        res.status(400).json({ 'error': 'invalid data password and retypepassword' });
    }
}

exports.getDestroy = (req, res, next) => {
    let { token } = req.headers;

    Admin.findOneAndUpdate({ 'token': token }, { 'token': null })
        .then(() => {
            res.status(200).json({ logout: true });
        })
        .catch(err => console.log(err));
}

exports.getCheck = (req, res, next) => {
    let token = req.header('token');
    Admin.findOne({ 'token': token }, function (err, admin) {
        if (err) {
            res.status(400).json({ error: err });
        } else {
            if (admin) {
                res.status(200).json({ valid: true });
            } else {
                res.status(200).json({ valid: false });
            }
        }
    })
};
