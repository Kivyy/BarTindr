/* global localStorage */

const router = require('express').Router();
const passport = require('passport');
//auth login
router.get('/login', passport.authenticate('google',{
  scope:['profile'],
}));


// callback route for google to redirect and passport middleware to retrieve information

router.get('/google/redirect', passport.authenticate('google', {session: false}), (req,res) => {
  localStorage.setItem('authenticate', 'true');
  res.redirect("http://localhost:8080");
})

//auth logout
router.get('/logout',(req,res) => {

});


module.exports = router;
