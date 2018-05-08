const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: "369888330125-kq83g2hn86hop900ebtrihvt44h7p7tv.apps.googleusercontent.com",
        clientSecret: "ltVUmfn1GasxH8YkRYnWsboT",
        callbackURL: '/auth/google/callback'
    }, function(accessToken, refreshToken, profile, done) {
        process.nextTick(function(){
        // check if user already exists in our own db
            User.findOne({googleid: profile.id},

                function(err, currentUser) {
                    if(currentUser){
                        // already have this user
                        console.log('user is: ', currentUser);
                        done(null, currentUser);
                    } else {
                        // if not, create user in our db
                        console.log(profile.displayName);
                        var newUser = new User();
                            newUser.googleid = profile.id;
                            newUser.username = profile.displayName;
                            newUser.thumbnail = profile._json.image.url;
                            newUser.style = 1;
                        newUser.save(function(err) {
                            if(err)
                                throw err;
                            else{
                                console.log('created new user: ', newUser);
                                done(null, newUser);
                            }
                        });
                    }
            });
        });
}
));