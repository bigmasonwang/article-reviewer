const express = require('express');
const router = express.Router();
const moment = require('moment');
const mongoose = require('mongoose');
const Article = require('../models/article-model');

const url = 'mongodb://127.0.0.1:27017/articles';

mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Database connected:', url);
});

db.on('error', (err) => {
  console.error('connection error:', err);
});

router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) {
      return console.error(err);
    }
    res.status(200).send(articles);
  });
});
router.post('/', (req, res) => {
  const article = new Article({
    created_at: moment().format('MMMM Do YYYY, h:mm:ss a').toString(),
    updated_at: moment().format('MMMM Do YYYY, h:mm:ss a').toString(),
    ...req.body,
  });
  article.save((err) => {
    if (err) {
      console.error(err);
      return res.send(err);
    }
    return res.sendStatus(201);
  });
});

module.exports = router;
