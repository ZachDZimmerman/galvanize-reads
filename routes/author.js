var express = require('express');
var router = express.Router();
var api = require('../db/api');

router.get('/', function(req, res, next) {
  api.listAllAuthors().then(function(author){
    res.render('author/author', {author: author});
  });
});

router.get('/new', function (req, res, next) {
  res.render('author/add-author');
});

router.post('/new', function (req, res, next) {
  api.addNewAuthor(req.body).then(function () {
    res.redirect('/author');
  });
});
module.exports = router;
