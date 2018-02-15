const express = require('express');
const morgan = require('morgan');
const path = require('path');
const http = require('http');
const app = express();

//App Setup
app.use(morgan('combined'));

app.use(express.static('public'));

app.get('/*', (req,res) => {
  res.sendFile(path.resolve(__dirname,'public','index.html'));
})

//Server Setup
const port = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
