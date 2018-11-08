const dbConn = require('../lib/dbConn.js');
const show = require ('../lib/show3.js')

module.exports.showFile = async function showFile(id) {
    let connectDb = await dbConn.makeConn();
    let showID = await show.showPic(connectDb, id);
    return showID;
}

module.exports.getShow = async function getShow(id) {
    let connectDb = await dbConn.makeConn();
    let showID = await show.getshowPic(connectDb, id);
    return showID;
}

