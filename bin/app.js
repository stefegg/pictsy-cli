#!/usr/bin/env node

const show = require('../modules/showID.js');
const dl = require('../modules/downLoad.js');
const upchain = require('../modules/upchain.js');
const list = require('../modules/upList.js');
const start = require('../server.js');


// require('dotenv').config({ path: '../env/.env' });

async function timeOut() {
  if (process.argv[2] == 'upload') {
    return upchain.upChain(process.argv[3])
      .then(info => {
        console.log('File ' + info.name + ' uploaded to ' + info.url + ' and inserted to MongoDB with the id ' + info.id);
      }).catch(error => {
        console.error(error);
      })
  } else if (process.argv[2] == 'list') {
    return list.getList().then(info => {
      console.log(info)
    }).catch(error => {
      console.error(error);
    })
  } else if (process.argv[2] == 'start') {
    start.startUp();
  } else if (process.argv[2] == 'show') {
    return show.getShow(process.argv[3]).then(info => {
      console.log(info)
    }).catch(error => {
      console.error(error);
    })
  } else if (process.argv[2] == 'download') {
    return dl.downLoad(process.argv[3], process.argv[4])
      .catch(error => {
        console.error(error);
      })
  } else {
    console.log('Invalid command, see documentation for correct usage')
  }
}

timeOut();