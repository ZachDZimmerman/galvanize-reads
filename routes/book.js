var express = require('express');
var router = express.Router();
var api = require('../db/api');

// READ BOOK
router.get('/', function(req, res, next) {
  var book = api.listAllBooks().then(function (book) {
    res.render('book/book', {book:book});
  });
});


// ADD BOOK
router.get('/new', function (req, res, next) {
  var genre = api.getGenre().then(function (genre) {
    res.render('book/add-book', {genre:genre});
  });
});

router.post('/new', function (req, res, next) {
  api.addBook(req.body).then(function () {
    api.addBook().then(function () {
      res.redirect('/book');
    });
  });
});

// BOOK DETAILS

router.get('/:id' , function (req, res, next) {
  api.listBookById(req.params.id).then(function (book) {
    res.render('book/detail', {book: book});
  });
});


// UPDATE BOOK
router.get('/edit/:id', function (req, res, next) {
  api.listBookById(req.params.id).then(function (book) {
    api.getGenre().then(function (genre) {
      res.render('book/edit-book', {
        book: book,
        genre: genre
      });
    });
  });
});

router.post('/edit/:id', function (req, res) {
  api.editBook(req.body, req.params.id).then(function () {
    res.redirect('/');
  });
});

// DELETE BOOK
router.get('/delete/:id', function (req, res, next) {
  api.listBookById(req.params.id).then(function (book) {
    res.render('book/delete-book', {book:book});
  });
});

router.delete('/:id', function (req, res, next) {
  api.deleteBook(req.params.id).then(function () {
    res.redirect('/book');
  });
});

module.exports = router;
