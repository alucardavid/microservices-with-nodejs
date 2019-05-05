var express = require('express');
var router = express.Router();

/* GET new page */
router.get('/', function(req, res, next) {
  res.render('new', { title: 'New Page', name: 'David Pereira'})
})

module.exports = router;