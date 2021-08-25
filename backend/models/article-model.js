const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  source: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  created_at: {
    type: String,
    required: true,
    trim: true,
  },
  updated_at: {
    type: String,
    required: true,
    trim: true,
  },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
