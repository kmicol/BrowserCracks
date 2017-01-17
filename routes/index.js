var express = require('express');
var router = express.Router();

var http = require('http');
var parser = require('ua-parser-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
