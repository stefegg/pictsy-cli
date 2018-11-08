var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports.showDB = function (image_id){
    return new Promise(function (fulfill, reject){
        MongoClient.connect(url, function(err, db){
            if (err) reject(err);
            else fulfill(db);
        })
    })}
module.exports.showPic = function (db) {
    return new Promise(function (fulfill, reject){
        let dbo = db.db("pictsy");
        dbo.collection("images").find({"id":`${image_id}`}).toArray(function(err, result){
            if (err) reject(err);
            else fulfill(result);
                console.log(`Image ${result[0].id} located at ${result[0].url}`);
                db.close();
            }
        )
    })
}