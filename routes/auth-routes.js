const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', passport.authenticate('google',{
  scope:['profile']
}));


// callback route for google to redirect and passport middleware to retrieve information

router.get('/google/redirect', passport.authenticate('google'), (req,res) => {
  res.send('you reached the cb URL');
})

//auth logout
router.get('/logout',(req,res) => {

});


module.exports = router;
