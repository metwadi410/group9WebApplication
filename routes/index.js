var express = require('express');
var router = express.Router();

/* GET Login page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Login Page', message: req.flash('message')});
});

module.exports = router;