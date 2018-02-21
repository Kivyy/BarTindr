const express = require('express');
const bodyParser = require('body-parser');
const passportSetup = require('./services/passport-setup');

const app = express();
const authRoutes = require('./routes/auth-routes');
const yelpRoutes = require('./routes/yelp-routes');

app.use(bodyParser.json());
app.use('/auth',authRoutes);
app.use('/api', yelpRoutes);

app.listen(3000,(err) => {
  if(err){
    return console.log(err);
  }

  console.log('API server is listening to: ',3000)
})
