const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(require('./routes'));

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;