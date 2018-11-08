const list = require('../lib/find2.js');

module.exports.upList = async function upList(){
let connectDb = await list.lister();
let listAll = await list.listAll(connectDb)
    console.log(listAll)
}

module.exports.getList = async function getList(){
    let connectDb = await list.lister();
    let listAll = await list.listAll(connectDb);
    return listAll
}
