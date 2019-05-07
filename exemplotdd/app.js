const index = require('./index')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const router = express.Router()
router.get('/', (req, res) => res.json({ message: 'Funcionando' }))

// GET /aplicarDesconto
router.get('/aplicarDesconto/:valor/:desconto', (req, res) => {
    const valor = parseInt(req.params.valor)
    const desconto = parseInt(req.params.desconto)

    res.json({ valorDescontado: index.aplicarDesconto(valor, desconto)})
})

app.use('/', router)

if (require.main === module) {
    // inicia o servidor
    app.listen(port)
    console.log('API funcionando')
}

module.exports = app