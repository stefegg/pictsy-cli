require('dotenv').config({ path: './env/.env' });

module.exports.getshowPic = function (db, id) {
    return new Promise(function (fulfill, reject){
        db.collections.images.find({"id": id}).toArray(function(err, result){
            if (err) reject(err);
            else fulfill(result);
            }
        )
    })
}
