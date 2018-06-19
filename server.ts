const express = require('express');
const app = express();
const path = require('path');
app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve('app/index.html'));
});
app.get('/index.js', (req: any, res: any) => {
  res.sendFile(path.resolve('app/index.js'));
});
app.get('/index.css', (req: any, res: any) => {
  res.sendFile(path.resolve('app/index.css'));
});
app.listen(8080, () => console.log('listening'));
