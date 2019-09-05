const express = require('express');
const bodyParser = require('body-parser');
const port = require('./config/port');

const app = express();
const routers = require('./routers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'));

app.use('/api/v1', routers);

app.listen(port, () => global.console.log(`App listenning on port ${port}!`));

module.exports = app;
