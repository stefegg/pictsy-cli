const fs = require('fs');
const s3 = require('./aws.js');



module.exports.downloadFile = function downloadFile(file, filePath) {
    return new Promise((fulfill, reject) => {
    let fileName = file.substring(file.lastIndexOf("/") + 1);
    let dlInfo = {
        Bucket: process.env.BUCKET,
        Key: fileName
    };
        let dlResult = fs.createWriteStream(filePath + fileName);
        let finalDL = s3.s3.getObject(dlInfo).createReadStream().pipe(dlResult, function (err){
            if (err) reject(err);
        }) 
        fulfill(finalDL)

        });
    }

// example pictsy download tree.jpg /home/stef/Desktop/