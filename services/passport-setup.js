const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const configKey = require('./keys');

passport.use(
  new GoogleStrategy({
  //option for google strategies
  callbackURL: '/auth/google/redirect',
  clientID: configKey.google.clientID,
  clientSecret: configKey.google.clientSecret
},(accessToken,refreshToken,profile,done) => {
  // passport callback function
  if(profile){
    done(null,{authenticate: true});
  }
  })
)
