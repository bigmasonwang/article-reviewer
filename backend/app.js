var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
const notFind = require('./middleware/not-find');
const errorHandler = require('./middleware/error-handler');

const url = 'mongodb://127.0.0.1:27017/articlesAPI';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connected:', url);
});
db.on('error', (err) => {
  console.error('connection error:', err);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(notFind);

// error handler
app.use(errorHandler);

const port = process.env.PORT || '5000';
app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
