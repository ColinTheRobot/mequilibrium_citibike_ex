const express = require('express');
const logger = require('morgan');
var data = require('./data.js');

const app = express();

app.use(express.static('public'));

app.use(logger('dev'));

app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on 3000`);
})
