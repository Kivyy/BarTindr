const passport = require('passport');
const GoogleStrategy = require('passport-google-oatuh20');
const configKey = require('./keys');

passport.use(
  new GoogleStrategy({
  //option for google strategies
  callbackURL: '/auth/google/redirect',
  clientID: configKey.google.clientID,
  clientSecret: configKey.google.clientSecret
  },() => {
  // passport callback function
  })
)
