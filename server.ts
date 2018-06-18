const express = require('express');
const app = express();
const path = require('path');
app.get('/app.js', (req: any, res: any) => {
  res.sendFile(path.resolve('app.js'));
});
app.get('/index.html', (req: any, res: any) => {
  res.sendFile(path.resolve('index.html'));
});
app.listen(8080, () => console.log('listening'));
