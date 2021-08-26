const express = require('express');

const ArticlesController = require('../controller/articles');

const router = express.Router();
router.get('/', ArticlesController.getAllArticles);
router.post('/', ArticlesController.newArticle);

module.exports = router;
