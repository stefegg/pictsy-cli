const upload = require('../lib/upload3.js');

module.exports.upChain = async function upChain(){
let fileData = await upload.readFile(process.argv[3]);
let uploadRes = await upload.uploadS3(fileData)
let mongoData = await upload.mongoUpload(uploadRes)
}

