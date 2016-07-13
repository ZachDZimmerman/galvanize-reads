var express = require('express');
var router = express.Router();
var api = require('../db/api');

/* GET book listing. */
router.get('/', function(req, res, next) {
  var book = api.listAllBooks().then(function (book) {
    res.render("book/book", {book:book});
  });
});

router.get('/new', function (req, res, next) {
  var genre = api.getGenre().then(function (genre) {
    res.render('book/add-book', {genre:genre});
  });
});

router.post('/', function (req, res, next) {
    api.addBook(req.body).then(function () {
      res.redirect('/');
    });
});

router.get('/delete/:id', function (req, res, next) {
  api.listBook(req.params.id).then(function (book) {
    res.render('book/delete-book', {book:book});
  });
});

router.delete('/:id', function (req, res, next) {
  api.deleteBook(req.params.id).then(function () {
    res.redirect('/');
  });
});

module.exports = router;
