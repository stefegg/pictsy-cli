#!/usr/bin/env node

const mongoose = require('mongoose');
const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('../config/database');
const list = require('../lib/find2.js');
const show = require('../lib/show3.js');
const upload = require('../lib/upload3.js');


function timeOut() {
if (process.argv[2] == 'upload'){
  return upload.uploadFile(process.argv[3])
  .then(params => {
    return upload.uploadS3(params)
  })
  .then(data => {
      return upload.mongoUpload(data)
  }).catch(err => {
    console.log(err);
  });
} else if (process.argv[2] == 'list'){
  return list.list()
} else if (process.argv[2] == 'show'){
  return show.show(process.argv[3])
} else {
  console.log('Invalid command, see documentation for correct usage')
}

}

timeOut();

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to MongoDB');
});

