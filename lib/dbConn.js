var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const config = require('../config/database');


var url = config.database;

mongoose.connect(config.database);
let db = mongoose.connection;


module.exports.makeConn = db.once('open', function () {
    return new Promise(function (fulfill, reject) {
        MongoClient.connect(url, function (err, db) {
            if (err) reject(err);
            else fulfill(db);
        })
    })
});

