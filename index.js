const express = require('express');
const main = require('./router/main');

const app = express();
app.use(express.static('public'));

app.set('view engine', 'pug');
app.use('/', main);

app.listen(3000, () => console.log('Express', 3000));

