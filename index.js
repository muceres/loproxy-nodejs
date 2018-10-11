require('dotenv').config();

const express = require('express');
const app = express();
const request = require('request');
const morgan = require('morgan');

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || 'https://www.npmjs.com';


app.use(morgan(`✔ sended from localhost ${port} to ${baseUrl}:  :method :url :status :response-time ms - :res[content-length]`));

app.use('/', (req, res) => {
  req.pipe(request(`${baseUrl}${req.url}`)).pipe(res);
  res.set('Access-Control-Allow-Origin', '*');
});



app.listen(port, () => console.log(`▶ Loproxy instance is running on port : ${port}.`));
