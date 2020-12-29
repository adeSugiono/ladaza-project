var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/ladazadb', {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
var indexRouter = require('./routes/index');
var productRouter = require('./routes/product');
const adminRouter = require('./routes/admin');
const {request} = require('express');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/product', productRouter);
app.use('/api/admins', adminRouter);

module.exports = app;
