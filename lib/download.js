const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey: ''
});


module.exports.downloadFile = function downloadFile(file){
        let filePath = process.argv[4];
        let fileName = file.substring(file.lastIndexOf("/") + 1);
        var dlInfo = {Bucket: 'pictsy', Key: fileName};
        let dlResult = fs.createWriteStream(filePath+fileName);
        s3.getObject(dlInfo).createReadStream().pipe(dlResult);

    }

    // example pictsy download tree.jpg /home/stef/Desktop/
