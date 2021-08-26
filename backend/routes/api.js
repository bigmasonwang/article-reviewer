var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
var articlesRouter = require('./articles');
/* GET home page. */
router.get('/', function (req, res) {
  res.send('APIs working');
});

router.use('/users', usersRouter);
router.use('/articles', articlesRouter);
module.exports = router;
