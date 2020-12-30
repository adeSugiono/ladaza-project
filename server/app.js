const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/ladazadb', {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false 
});

const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const adminRouter = require('./routes/admin');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/product', productRouter);
app.use('/api/admin', adminRouter);

module.exports = app;
