const express = require('express');
const { Client } = require('pg');
const HOST = '0.0.0.0';
const PORT = 80;
const app = express();

app.get('/', (req, res) => {

  client = new Client({ host: 'db', user: 'postgres' });

  client.connect(err => {
    if (err) {
      console.log('connection error', err.stack);
    } else {
      console.log('connected');
    }
  });

  console.log('root url fetched');

  client.query('SELECT * FROM apparel', (error, response) => {
    console.log('response received');
    res.json(response.rows);
  });
});

app.listen(PORT, HOST);
console.log(`Listening on http://${HOST}:${PORT}`);
