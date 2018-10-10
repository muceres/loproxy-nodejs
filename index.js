require('dotenv').config();

const express = require('express');
const util = require('util');
const app = express();
const request = require('request');

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'https://www.npmjs.com';


app.use('/', (req, res) => {
  console.log(`request : ${util.inspect(req.url)}`);
  console.log(`request : ${util.inspect(req.method)}`);
  req.pipe(request(`${baseUrl}${req.url}`)).pipe(res);
});

app.listen(port, () => console.log(`Loproxy instance is running on port : ${port}.`));
