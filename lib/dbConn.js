var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports.makeConn = function() {
 return new Promise(function (fulfill, reject){
    MongoClient.connect(url, function(err, db) {
    if (err) reject (err);
    else fulfill(db);
    })
})};