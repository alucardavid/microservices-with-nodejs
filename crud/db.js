const mongoCliente = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

mongoCliente.connect('mongodb://localhost:27017/workshop')
    .then(conn => global.conn = conn.db('workshop'))
    .catch(err => console.log(err))

function findAll(cb) {
    global.conn.collection('customers').find({}).toArray(cb)
}

function insert(customer, cb) {
    global.conn.collection('customers').insertOne(customer, cb)
}

function findOne(id, cb) {
    global.conn.collection('customers').findOne(new ObjectId(id), cb)
}

function update(id, customer, cb) {
    global.conn.collection('customers').update({_id: new ObjectId(id)}, customer, cb)
}

function deleteOne(id, cb) {
    global.conn.collection('customers').deleteOne({_id: new ObjectId(id)}, cb)
}

module.exports = { findAll, insert, findOne, update, deleteOne }