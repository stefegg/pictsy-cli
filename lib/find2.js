var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports.lister = function() {
 return new Promise(function (fulfill, reject){
    MongoClient.connect(url, function(err, db) {
    if (err) reject (err);
    else fulfill(db);
    })
})};
module.exports.listAll = function(db){
    return new Promise(function (fulfill, reject){
    let dbo = db.db("pictsy");
    dbo.collection("images").find().sort({sortingField:1}).toArray(function(err, result) {
        if (err) reject(err);
        else fulfill(result);
    })
})};