var http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const helmet = require('helmet')

const userServiceProxy = httpProxy('http://localhost:3001')
const productsServiceProxy = httpProxy('http://localhost:3002')

app.get('/', (req, res, next) => {
    res.json({msg: 'Bem vindo ao Api-Gateway'})
})

app.get('/users', (req, res, next) => {
    userServiceProxy(req, res, next)
})

app.get('/products', (req, res, next) => {
    productsServiceProxy(req, res, next)
})

app.use(logger('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

var server = http.createServer(app)
server.listen(3000, () => {
    console.log('Server is running in port 3000')
})