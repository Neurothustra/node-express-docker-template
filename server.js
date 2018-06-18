"use strict";
var express = require('express');
var app = express();
var path = require('path');
app.get('/index.js', function (req, res) {
    res.sendFile(path.resolve('index.js'));
    res.sendFile(path.resolve('index.html'));
});
app.listen(8080, function () { return console.log('listening'); });
