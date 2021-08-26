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
    return res.sendStatus(201);
  });
};

//DELETE '/articles'
const deleteAllArticles = (req, res, next) => {
  res.json({ message: 'DELETE all articles' });
};

//GET '/articles/:name'
const getOneArticle = (req, res, next) => {
  res.json({ message: 'GET 1 article' });
};

//POST '/articles/:name'
const postNewComment = (req, res, next) => {
  res.json({ message: 'POST 1 article comment' });
};

//DELETE '/articles/:name'
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
