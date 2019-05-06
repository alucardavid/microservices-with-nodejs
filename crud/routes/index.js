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
  res.render('new', { title: 'Cadastro de cliente', action: '/new', doc: {} })
})

router.post('/new', (req, res, next) => {
  const nome = req.body.nome
  const idade = parseInt(req.body.idade)
  const uf = req.body.uf
  global.db.insert({nome, idade, uf}, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/?new=true')
  })
})

router.get('/edit/:id', (req, res, next) => {
  var id = req.params.id
  global.db.findOne(id, (err, doc) => {
    if (err) return console.log(err)
    console.log(id)
    res.render('new', { title: 'Edição de Cliente', doc: doc, action: `/edit/${doc._id}`})
  })
})

router.post('/edit/:id', (req, res) => {
  const id = req.params.id
  const nome = req.body.nome
  const idade = parseInt(req.body.idade)
  const uf = req.body.uf
  global.db.update(id, {nome, idade, uf}, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/?edit=true')
  })
})

router.get('/delete/:id', (req, res) => {
  var id = req.params.id
  global.db.deleteOne(id, (err, result) => {
    if (err) return console.log(err)
    res.redirect('/?delete=true')
  })
})

module.exports = router;
