const mongoose = require('mongoose');
const config = require('../config/database');
        
module.exports.makeConn = function(){
    mongoose.connect(config.database, { useNewUrlParser: true });
    let db = mongoose.connection;
    db.once("open", function() {
        console.log("connected");
    })
    return db
}

module.exports.closeConn = function(){
    mongoose.connection.close();
}