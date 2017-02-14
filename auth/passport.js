const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const users = require('../server/users/userEntity');

passport.use(new Strategy(function(username, password, cb) {
   users.findOne({"username": username}, function(err, user) {
     if (err) {
       console.log('error');
       return cb(err);
     }
     if (user.password !== password) {
       console.log('password incorrect');
       return cb(null, false);
     }
     console.log('login success');
     return cb(null, user);
   });
 }));

passport.serializeUser(function(user, done) {
   console.log('serializeUser');
   done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("deserializeUser")
  users.findById(id, function(err, user) {
   done(err, user);
  });
});

module.exports = passport;
