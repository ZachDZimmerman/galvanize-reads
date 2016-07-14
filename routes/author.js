var express = require('express');
var router = express.Router();
var api = require('../db/api');

router.get('/', function(req, res, next) {
  api.listAllAuthors().then(function(author){
    res.render('author/author', {author: author});
  });
});

module.exports = router;
