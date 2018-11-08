#!/usr/bin/env node

const mongoose = require('mongoose');
const config = require('../config/database');
const show = require('../lib/show3.js');
const dl = require('../lib/download.js');
const upchain = require('./upchain.js');
const list = require('./upList.js');


async function timeOut() {
  if (process.argv[2] == 'upload'){
  return upchain.upChain()
} else if (process.argv[2] == 'list'){
  return list.upList()
} else if (process.argv[2] == 'show'){
  return show.show(process.argv[3])
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

