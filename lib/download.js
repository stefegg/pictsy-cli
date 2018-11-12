const fs = require('fs');
const s3 = require('./aws.js');
require('dotenv').config({ path: './env/.env' });


module.exports.downloadFile = function downloadFile(file, filePath){
        let fileName = file.substring(file.lastIndexOf("/") + 1);
        var dlInfo = {Bucket: process.env.BUCKET, Key: fileName};
        let dlResult = fs.createWriteStream(filePath+fileName);
        s3.s3.getObject(dlInfo).createReadStream().pipe(dlResult);
    }

    // example pictsy download tree.jpg /home/stef/Desktop/
