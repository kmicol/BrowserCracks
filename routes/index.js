var express = require('express');
var router = express.Router();

var http = require('http');
var parser = require('ua-parser-js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;



http.createServer(function (req, res) {
  // get user-agent header
  var ua = parser(req.headers['user-agent']);

  console.log(ua);
  // write the result as response
  res.end(JSON.stringify(ua, null, '  '));
})
.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
