const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/users', (req, res) => {
  console.log('Got body:', req.body);
  res.status(201).send({});
});

app.get('/users', (req, res) => {
  res.status(200).send({});
});

app.get('/users/:id', (req, res) => {
  res.status(200).send({});
});

module.exports = app;
