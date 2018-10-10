require('dotenv').config();

const express = require('express');
const util = require('util');
const app = express();
const port = process.env.PORT || 3000;

app.use('/', (req, res) => {
  console.log(`request : ${util.inspect(req.url)}`);
  res.send(util.inspect(req.url));
});

app.listen(port, () => console.log(`Loproxy instance is running on port : ${port}.`));
