var express = require('express');
var router = express.Router();

/* GET cart */
router.get('/', function(req, res, next) {
  res.render('cart', {});
});

module.exports = router;
