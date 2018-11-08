const mongoose = require('mongoose');
const fs = require('fs');
const AWS = require('aws-sdk');
const config = require('./config/database');
const express = require('express');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const showFile = require('./lib/show3.js');
 
const listFile = require('./bin/upList.js');

const app = express();

mongoose.connect(config.database);
let db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to MongoDB');
});

app.get('/list', function(req, res) {
  return listFile.getList().then(data => {
    res.status(200).send(data)});
});

app.get('/show/:id', function(req, res) {
  showFile.show(req.params.id);
})

var port = process.env.PORT || 5000;

app.listen(port, function(){
  console.log('server started!')
});
