const fs = require('fs');
const AWS = require('aws-sdk');
const secureRandom = require('secure-random')

let Image = require('../models/image');

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});



module.exports.uploadFile = function(file){
    return new Promise(function (fulfill, reject){
        fs.readFile(file, function(err, data){
            if (err) reject(err);
            else fulfill({
                Bucket: 'pictsy',
                Key: file,
                Body: data
            });
        })
    })
    .then(params => {
        return new Promise(function(fulfill, reject){
            s3.upload(params, function(s3Err, data){
                if (s3Err) reject(s3Err);
                else fulfill(data);
                console.log(`Image uploaded to ${data.Location}`)
            })
        })
    })
    .then(data => {
        return new Promise(function(fulfill, reject){
            let image = new Image();
            image.name = data.Key;
            image.url = data.Location;
            image.date = new Date();
            image.id = secureRandom(2);
            image.save(function(err){
                if(err) reject(err);
                    else {
                        fulfill(image);
                        console.log(`Image added to MongoDB, image ID = ${image.id}`);
                    }
                })
        })
    })
}
