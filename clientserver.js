const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
app.use(express.static('public'));

app.get('*', (req,res) => {
  res.sendFile('./public/index.html');
})

//Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
