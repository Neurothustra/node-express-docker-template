const express = require('express');
const app = express();
const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.resolve('app/index.html'));
});
app.get('/index.js', (req, res) => {
  res.sendFile(path.resolve('app/index.js'));
});
app.get('/index.css', (req, res) => {
  res.sendFile(path.resolve('app/index.css'));
});
app.listen(8080, () => console.log('listening'));