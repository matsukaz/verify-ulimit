var express = require('express');
var app = express();
var ulimit = require('ulimit');
var fs = require('fs');

app.get('/', function (req, res) {
  ulimit(function(err, result) {
    if (err) {
      return res.send(JSON.stringify(err));
    }
    res.send(JSON.stringify(result));
  });
});

var server = app.listen(80);

