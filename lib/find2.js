
module.exports.listAll = function(db){
    return new Promise(function (fulfill, reject){
    let dbo = db.db("pictsy");
    dbo.collection("images").find().sort({sortingField:1}).toArray(function(err, result) {
        if (err) reject(err);
        else fulfill(result);
    })
})};