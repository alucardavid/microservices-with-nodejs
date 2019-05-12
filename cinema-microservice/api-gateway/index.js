require('dotenv-safe').load()
var jwt = require('jsonwebtoken')
var http = require('http')
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const helmet = require('helmet')

const userServiceProxy = httpProxy('http://localhost:3001')
const productsServiceProxy = httpProxy('http://localhost:3002')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res, next) => {
    res.json({msg: 'Bem vindo ao Api-Gateway'})
})

app.get('/users', verifyJWT, (req, res, next) => {
    userServiceProxy(req, res, next)
})

app.get('/products', verifyJWT, (req, res, next) => {
    productsServiceProxy(req, res, next)
})

app.post('/login', (req, res, next) => {
    console.log(req);
    
    if (req.body.user === 'david' && req.body.pwd === '123') {
        const id = 1;
        var token = jwt.sign({id}, process.env.SECRET, {
            expiresIn: 300
        })

        res.status(200).send({auth:true, token: token})
    }

    res.status(500).send('Login inválido')
})

app.get('/logout', (req, res, next) => {
    res.status(200).send({auth:false, token: null})
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

function verifyJWT(req, res, next) {
    var token = req.headers['x-access-token']
    if (!token) return res.status(401).send({auth:false, message:'No token provided'})

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).send({auth:false, message:'Failed to authenticate token'})
        req.userId = decoded.id
        next()
    })
}