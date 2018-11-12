require('dotenv').config({ path: './env/.env' });

module.exports.getshowPic = function (db, id) {
    return new Promise(function (fulfill, reject){
        db.collection(process.env.DB_COLLECTION).find({"id": id}).toArray(function(err, result){
            if (err) reject(err);
            else fulfill(result);
            }
        )
    })
}