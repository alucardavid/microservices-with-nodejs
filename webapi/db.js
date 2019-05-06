const mongoCliente = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID

mongoCliente.connect('mongodb://localhost:27017/workshop')
    .then(conn => global.conn = conn.db('workshop'))
    .catch(err => console.log(err))

module.export = {}