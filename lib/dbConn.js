var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const config = require('../config/database');
require('dotenv').config({
    path: './env/.env'
});
var url = process.env.MONGO_PATH;

mongoose.connect(config.database);
let db = mongoose.connection;

module.exports.Image = require('../models/image');

module.exports.makeConn = db.once('open', function () {
    return new Promise(function (fulfill, reject) {
        MongoClient.connect(url, function (err, db) {
            if (err) reject(err);
            else fulfill(db);
        })
    })
});