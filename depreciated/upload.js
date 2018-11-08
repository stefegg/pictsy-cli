const fs = require('fs');
const AWS = require('aws-sdk');
const secureRandom = require('secure-random')


const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});


let Image = require('../models/image');


exports.uploadFile = function(file){
  fs.readFile(file, (err, data) => {
     if (err) console.log(err);
     const params = {
         Bucket: 'pictsy',
         Key: file,
         Body: data
     };
     s3.upload(params, function(s3Err, data) {
         if (s3Err) console.log(s3Err);
         console.log(`File uploaded successfully at ${data.Location}`)
         let image = new Image();
         image.name = data.key;
         image.url = data.Location;
         image.date = new Date();
         image.id = secureRandom(2);
         image.save(function(err){
           if(err){
             console.log(err);
             return;
           } else {
             console.log(`Meta Data Uploaded to MongoDB, Image ID = ${image.id}`);
             return;
           }
         });
     });
  });
};
