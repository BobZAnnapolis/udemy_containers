const express = require('express');
const app = express();
const HOST = '0.0.0.0';
const PORT = "80";

app.get('/', (req, res) => {
  res.send('Hello World from iMac, version 2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:{PORT}`);
