const AWS = require('aws-sdk');
require('dotenv').config({ path: './env/.env' });


module.exports.s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});