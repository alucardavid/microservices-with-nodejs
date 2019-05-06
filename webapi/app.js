global.db = require('./db')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const router = express.Router()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// Configurando as rotas
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }))
app.use('/', router)

// Inicia o servidor
app.listen(port, () => {
    console.log('API funcionando')
})

