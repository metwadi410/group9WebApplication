var express = require('express');
var router = express.Router();


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact', isAdmin: req.session.isAdmin});
});

module.exports = router;
