const express = require('express');
const app = express();

app.use(require('./inventario'));

module.exports = app;