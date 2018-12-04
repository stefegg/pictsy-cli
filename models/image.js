let mongoose = require('mongoose');


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

let Image = module.exports = mongoose.model('Image', imageSchema, 'images');