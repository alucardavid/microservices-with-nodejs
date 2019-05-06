const mongoCliente = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

mongoCliente.connect('mongodb://localhost:27017/workshop', {useNewUrlParser:true})
    .then(conn => global.conn = conn.db('workshop'))
    .catch(err => console.log(err))

function findCustomers(cb) {
    global.conn.collection('customers').find({}).toArray(cb)
}

function findCustomer(id, cb) {
    global.conn.collection('customers').findOne(new ObjectId(id), cb)
}

function insertCustomer(customer, cb) {
    global.conn.collection('customers').insertOne(customer, cb)
}

function updateCustomer(id, customer, cb) {
    global.conn.collection('customers').updateOne({_id: new ObjectId(id)}, customer, cb)
}

function patchCustomer(id, updates, cb) {
    global.conn.collection('customers').updateOne({_id: new ObjectId(id)}, { $set: updates }, cb)
}

function deleteCustomer(id, cb) {
    global.conn.collection('customers').deleteOne({_id: new ObjectId(id)}, cb)
}

module.exports = { findCustomers, findCustomer, insertCustomer, updateCustomer, patchCustomer, deleteCustomer }