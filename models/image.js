let mongoose = require('mongoose');
const dbConn = require('../lib/dbConn.js');


let imageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

let connection = dbConn.makeConn 
let Image = module.exports = connection.model('Image', imageSchema, 'images');
