
module.exports.showPic = function (db) {
    return new Promise(function (fulfill, reject){
        let dbo = db.db("pictsy");
        dbo.collection("images").find({"id":`${process.argv[3]}`}).toArray(function(err, result){
            if (err) reject(err);
            else fulfill(result);
                db.close();
            }
        )
    })
}

module.exports.getshowPic = function (db, id) {
    return new Promise(function (fulfill, reject){
        let dbo = db.db("pictsy");
        dbo.collection("images").find({"id": id}).toArray(function(err, result){
            if (err) reject(err);
            else fulfill(result);
                db.close();
            }
        )
    })
}