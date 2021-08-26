const express = require('express');
const moment = require('moment');

const Article = require('../models/article-model');

const router = express.Router();
router.get('/', (req, res, next) => {
  Article.find((err, articles) => {
    if (err) {
      console.error(err);
      return res.sendStatus(404);
    }
    return res.status(200).send(articles);
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
