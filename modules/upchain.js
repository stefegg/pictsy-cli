const upload = require('../lib/upload3.js');
const dbConn = require('../lib/dbConn.js');

module.exports.upChain = async function upChain(file){
    let connectDb = await dbConn.makeConn
    let fileData = await upload.readFile(file)
    let uploadRes = await upload.uploadS3(fileData)
    let mongoData = await upload.mongoUpload(uploadRes)
    return mongoData
}

