var express = require('express');
var app = express();
var ulimit = require('ulimit');
var fs = require('fs');

process.env.SHELL = process.env && process.env.SHELL || '/bin/bash';
console.log(process.env.SHELL);

app.get('/', function (req, res) {
  ulimit(function(err, result) {
    if (err) {
      return res.send(JSON.stringify(err));
    }
    res.send(JSON.stringify(result));
  });
});

var server = app.listen(80);

ulimit(function(err, result) {
  if (err) return;
  console.log(JSON.stringify(result));
});
