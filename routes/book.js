var express = require('express');
var router = express.Router();
var api = require('../db/api');

/* GET book listing. */
router.get('/', function(req, res, next) {
  var book = api.listAllBooks().then(function (book) {
    res.render("book", {book:book});
  });
});

router.get('/new', function (req, res, next) {
  var genre = api.getGenre().then(function (genre) {
    res.render('add-book', {genre:genre});
  });
});

router.post('/', function (req, res, next) {
    api.addBook(req.body).then(function () {
      res.redirect('/book');
    });
});
module.exports = router;
