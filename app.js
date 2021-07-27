const express = require('express');
const router = require('./router');

const app = express();
app.use(express.json()); // data stream -> JSON -> js object -> req.body
app.use('/api', router);

module.exports = app;
