const moment = require('moment');
const Article = require('../models/article-model');

//GET '/articles'
const getAllArticles = (req, res, next) => {
  Article.find((err, articles) => {
    if (err) {
      console.error(err);
      return res.sendStatus(404);
    }
    return res.status(200).send(articles);
  });
};

//POST '/articles'
const postNewArticle = (req, res, next) => {
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
    return res.status(201).json(article);
  });
};

//DELETE '/articles'
const deleteAllArticles = (req, res, next) => {
  res.json({ message: 'DELETE all articles' });
};

//GET '/articles/:id'
const getOneArticle = (req, res, next) => {
  Article.findById(req.params.id, (err, article) => {
    if (err) {
      return res.send(err);
    }
    if (article) {
      return res.json(article);
    }
    return res.sendStatus(404);
  });
};

//POST '/articles/:id'
const postNewComment = (req, res, next) => {
  res.json({ message: 'POST 1 article comment' });
};

//DELETE '/articles/:id'
const deleteOneArticle = (req, res, next) => {
  res.json({ message: 'DELETE 1 article' });
};

//PATCH '/articles/:id'
const patchOneArticle = (req, res, next) => {
  res.json({ message: 'PATCH 1 article' });
};

//export controller functions
module.exports = {
  getAllArticles,
  postNewArticle,
  deleteAllArticles,
  getOneArticle,
  postNewComment,
  deleteOneArticle,
  patchOneArticle,
};
