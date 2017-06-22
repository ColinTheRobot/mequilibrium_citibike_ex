const express = require('express');
const logger = require('morgan');

const app = express();

app.use(express.static('public'));

app.use(logger('dev'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`listening on 3000`);
})
