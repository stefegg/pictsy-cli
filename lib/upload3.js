const fs = require('fs');
const AWS = require('aws-sdk');
const secureRandom = require('secure-random')
let Image = require('../models/image');

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});


module.exports.readFile = function readFile(file){
    return new Promise((fulfill, reject) => {
        fs.readFile(file, function(err, data){
            let fileKey = file.substring(file.lastIndexOf("/") + 1);
            if (err) reject(err);
            else fulfill({
                Bucket: 'pictsy',
                Key: fileKey,
                Body: data
            });
        })
    })};


module.exports.uploadS3 = function uploadS3(params){
    return new Promise((fulfill, reject) => {
        s3.upload(params, function(s3Err, s3data){
            if (s3Err) reject(s3Err);
            else fulfill(s3data);      
        })
})};

module.exports.mongoUpload = function mongoUpload(data){
        let image = new Image();
        image.name = data.Key;
        image.url = data.Location;
        image.date = new Date();
        image.id = secureRandom(2);
        image.save(function(err){
            if(err) console.log(err);
})};
