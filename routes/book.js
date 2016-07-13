var express = require('express');
var router = express.Router();
var api = require('../db/api');

/* GET book listing. */
router.get('/', function(req, res) {
  var book = api.listBook().then(function (book) {
    res.render("book", {book:book});
  });
});

module.exports = router;
