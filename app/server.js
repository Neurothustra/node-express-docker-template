"use strict";
var express = require('express');
var app = express();
var path = require('path');
app.get('/', function (req, res) {
    res.sendFile(path.resolve('app/index.html'));
});
app.get('/index.js', function (req, res) {
    res.sendFile(path.resolve('app/index.js'));
});
app.get('/index.css', function (req, res) {
    res.sendFile(path.resolve('app/index.css'));
});
app.listen(8080, function () { return console.log('listening'); });
