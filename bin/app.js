#!/usr/bin/env node

const mongoose = require('mongoose');
const config = require('../config/database');
const show = require('../modules/showID.js');
const dl = require('../lib/download.js');
const upchain = require('../modules/upchain.js');
const list = require('../modules/upList.js');


async function timeOut() {
  if (process.argv[2] == 'upload'){
  return upchain.upChain()
} else if (process.argv[2] == 'list'){
  return list.getList().then(info => {
    console.log(info)
  })
} else if (process.argv[2] == 'show'){
  return show.showFile(process.argv[3]).then(info => {
    console.log(info)
  })
} else if (process.argv[2] == 'download'){
  return dl.downloadFile(process.argv[3])
} else {
  console.log('Invalid command, see documentation for correct usage')
}}

timeOut();

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', function(){

});

