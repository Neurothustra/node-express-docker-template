const express = require('express');
const app = express();
const path = require('path');
app.get('/index.js', (req: any, res: any) => {
  res.sendFile(path.resolve('index.js'));
});
app.get('/', (req: any, res: any) => {
  res.sendFile(path.resolve('index.html'));
});
app.listen(8080, () => console.log('listening'));
