const express = require('express');

const ArticlesController = require('../controller/articles');

const router = express.Router();
router.get('/', ArticlesController.getAllArticles);
router.post('/', ArticlesController.postNewArticle);
router.delete('/', ArticlesController.deleteAllArticles);
router.get('/:id', ArticlesController.getOneArticle);
router.post('/:id', ArticlesController.postNewComment);
router.delete('/:id', ArticlesController.deleteOneArticle);
router.patch('/:id', ArticlesController.patchOneArticle);

module.exports = router;
