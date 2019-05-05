var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  global.db.findAll((err, docs) => {
    if (err) return console.log(err)
    res.render('index', {docs})
  })
});

router.get('/new', (req, res, next) => {
  res.render('new', { title: 'Cadastro de cliente', action: '/new' })
})

router.post('/new', (req, res, next) => {
  
  res.redirect('/?new=true')
})

module.exports = router;
