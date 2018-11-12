const list = require('../lib/find2.js');
const dbConn = require('../lib/dbConn.js');

module.exports.getList = async function getList(){
    let connectDb = await dbConn.makeConn;
    let listAll = await list.listAll(connectDb);
    return listAll
}
