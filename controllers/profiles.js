import { Profile } from "../models/profile.js";
// import { Comic } from "../models/comic.js"
// import { Variant } from "../models/variant.js"

export { index, show, edit, update, showBadge };


//check-this sucessfully rendered my profile card to localhost/profiles
function index(req, res, next) {
  console.log("index-this was reached")
  Profile.find({}).then((profiles) => {
    res.render("profiles/index", {
      title: "All User Profiles",
      profiles,
    });
  });
}
//check-this sucessfully updated my profile name and avatar at localhost/profiles/:id
function update(req, res) {
  console.log("update-this was reached")
  Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((profile) => {
      res.redirect(`/profiles/${profile._id}`);
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}
//check-this sucessfully edited my profile name and avatar at localhost/profiles/:id
function edit(req, res) {
  console.log("edit-this was reached")
  Profile.findById(req.params.id)
    .then((profile) => {
      //fixed bug so only this user can edit profiles
      if(req.user.profile._id.toString() === profile._id.toString()){
      res.render("profiles/edit", {
        title: `Editing ${profile.name}'s profile`,
        profile,
      });
    }
  })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}
//check-this successfully shows my profile card and shows only my profile at localhost/profiles/:id
function show(req, res) {
  console.log("show-this was reached")
  // Find the profile that was clicked
  Profile.findById(req.params.id)
    .then((profile) => {
      console.log("profile found", profile)
      // Find the profile of the current logged in user
      Profile.findById(req.user.profile).
      then((userProfile) => {
        console.log("userprofile found", userProfile )
        res.render("profiles/show", {
          // Profile of the user clicked
          profile,
          // Profile of the logged in user
          userProfile,
          title: `${profile.name}'s profile`
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function showBadge(req, res) {
  console.log("this was reached")
  // Find the profile that was clicked
  Profile.findById(req.params.id)
    .then((profile) => {
      Profile.findById(req.user.profile).then((userProfile) => {
        res.render("profiles/show", {
          // Profile of the user clicked
          profile,
          // Profile of the logged in user
          userProfile,
          title: `${profile.name}'s badge`,
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}
