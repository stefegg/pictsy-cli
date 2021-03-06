const express = require('express');
const showbyID = require('./modules/showID.js');
const listFile = require('./modules/upList.js');
const app = express();


app.get('/list', function(req, res) {
  return listFile.getList().then(data => {
    res.status(200).send(data)});
});

app.get('/show/:id', function(req, res) {
  return showbyID.getShow(req.params.id).then(data => {
    res.status(200).send(data)});
  })


module.exports = {
  startUp: function(){  
var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log('server started on port ', port)
});
  }
};







  
