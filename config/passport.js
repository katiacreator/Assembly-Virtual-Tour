import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { User } from "../models/user.js";
import { Student } from "../models/student.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ googleId: profile.id }, function (err, user) {
        if (err) return done(err);
        if (user) {
          return done(null, user);
        } else {
          // we have a new student via OAuth!
          const newStudent = new Student({
            name: profile.displayName,
          });
          // Build the user from
          const newUser = new User({
            email: profile.emails[0].value,
            googleId: profile.id,
            studentProfile: newStudent._id,
          });
          newStudent.save(function (err) {
            if (err) return done(err);
          });
          newUser.save(function (err) {
            if (err) {
              // Something went wrong while making a user - delete the profile
              // we just created to prevent orphan profiles.
              Student.findByIdAndDelete(newStudent._id);
              return done(err);
            }
            return done(null, newUser);
          });
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
    .populate('studentProfile', 'name avatar')
    .exec(function(err, user) {
      done(err, user)
    })
  })
