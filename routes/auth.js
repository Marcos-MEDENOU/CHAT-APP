require('dotenv').config()
const express = require('express')
const router=express.Router();

const passport = require('passport')
const GoogleStrategy =require('passport-google-oauth20').Strategy

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

router.get('/login', function(req,res){
    res.render('login')
})

router.get('/auth/google', passport.authenticate('google',{scope:['']}))

module.exports=router;