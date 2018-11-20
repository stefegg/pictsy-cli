const fs = require('fs');
const s3 = require('./aws.js');
const secureRandom = require('secure-random')
const Image = require('../models/image');



module.exports.readFile = function readFile(file) {
    return new Promise((fulfill, reject) => {
        fs.readFile(file, function (err, data) {
            let fileKey = file.substring(file.lastIndexOf("/") + 1);
            if (err) reject(err);
            else fulfill({
                Bucket: process.env.BUCKET,
                Key: fileKey,
                Body: data
            });
        })
    })
};


module.exports.uploadS3 = function uploadS3(params) {
    return new Promise((fulfill, reject) => {
        s3.s3.upload(params, function (s3Err, s3data) {
            if (s3Err) reject(s3Err);
            else fulfill(s3data);
        })
    })
};

module.exports.mongoUpload = function mongoUpload(data) {
    return new Promise((fulfill, reject) => {
        let image = new Image();
        image.name = data.Key;
        image.url = data.Location;
        image.date = new Date();
        image.id = secureRandom(2);
        image.save(function (err) {
            if (err) reject(err);
            else fulfill(image);
        })
    })
};