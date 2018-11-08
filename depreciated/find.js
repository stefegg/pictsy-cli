var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.list = function() {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
  dbo.collection("testingCollection").find().sort({sortingField:1}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
};
