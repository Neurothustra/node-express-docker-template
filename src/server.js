"use strict";
var express = require('express');
var app = express();
var path = require('path');
app.get('/app.js', function (req, res) {
    res.sendFile(path.resolve('app.js'));
});
app.get('/index.html', function (req, res) {
    res.sendFile(path.resolve('index.html'));
});
app.listen(8080, function () { return console.log('listening'); });
