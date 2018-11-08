var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

module.exports.show = function (image_id){
    return new Promise(function (fulfill, reject){
        MongoClient.connect(url, function(err, db){
            if (err) reject(err);
            else fulfill(db);
        })
    })
    .then(db => {
        let dbo = db.db("pictsy");
        dbo.collection("images").find({"id":`${image_id}`}).toArray(function(err, result){
            if (err){
                throw err
            } else {
                console.log(`Image ${result[0].id} located at ${result[0].url}`);
                db.close();
            }
        })
    })
}