const passport = require('passport');
const GoogleStrategy = require('passport-google-oatuh20');


passport.use(
  new GoogleStrategy({
  //option for google strategies
  clientID: "136948534380-2r2i4dnb3km33mfkre1u2m0a9lg5k7ep.apps.googleusercontent.com",
  clientSecret: "h76vj9ZxZvi-hzhMDMfACeuP"
  }),() => {
  // passport callback function
}
)
