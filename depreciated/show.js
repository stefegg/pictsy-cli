var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

exports.show = function(image_id) {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("pictsy");
  dbo.collection("images").find({"id":`${image_id}`}).toArray(function(err, result) {
    if (err) throw err;
    if (result == ''){
      console.log('Invalid Image ID');
    } else {
      console.log(result[0].url);
    console.log(result);
    db.close();
  }
  });
});
};
