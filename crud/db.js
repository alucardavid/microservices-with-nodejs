const mongoCliente = require('mongodb').MongoClient

mongoCliente.connect('mongodb://localhost:27017/workshop')
    .then(conn => global.conn = conn.db('workshop'))
    .catch(err => console.log(err))

function findAll(cb) {
    global.conn.collection('customers').find({}).toArray(cb)
}

module.exports = { findAll }