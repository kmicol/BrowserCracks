var express = require('express');
var router = express.Router();
var parser = require('ua-parser-js');


/* GET users listing. */
router.get('/', function(req, res, next) {
  var ua = parser(req.headers['user-agent']);

  console.log(ua);
  // write the result as response
  res.end(JSON.stringify(ua, null, 0));
});




module.exports = router;
