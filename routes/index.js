var express = require('express');
var bodyParser = require("body-parser");
var db = require("../data.json"); //move to model
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST books page. */
router.post('/books', function(req, res, next) {
  var bookName = req.body.book;
  var bookAuthor = req.body.author;
  res.render('books', {});
});

/* GET books page from db */
router.get('/books', function(req, res, next) {
  var books = db.books;
  res.render('books', { books: books});
});

module.exports = router;
