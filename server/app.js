const express = require('express');
const morgan = require('morgan')

const topSpotsData = require('./data.json');

const app = express();

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.get('/data', (req, res) => {
    res.send(topSpotsData);
});

module.exports = app;
