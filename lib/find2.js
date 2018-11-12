require('dotenv').config({
    path: './env/.env'
});

module.exports.listAll = function (db) {
    return new Promise(function (fulfill, reject) {
        db.collection(process.env.DB_COLLECTION).find().sort({
            sortingField: 1
        }).toArray(function (err, result) {
            if (err) reject(err);
            else fulfill(result);
        })
    })
};