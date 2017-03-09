const http = require('http');
var dailyReport = require('./dailyReport');

var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
var parser = bodyParser.urlencoded({ extended: true }); 
app.use(express.static('files'));

const port = 3000;

app.post('/handleform', parser, function (req, res) { 
    var beginDate = req.body.first;
    res.end(dailyReport.outputDailyReport(beginDate));
});

var server = app.listen(port, function () { 
  var host = server.address().address; 
  var port = server.address().port; 
  console.log("Now listening at http://%s:%s", host, port); 
});
