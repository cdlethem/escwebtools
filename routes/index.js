var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware")

//root route
router.get("/", function(req, res){
    res.render("landing");
});

// show register form
// router.get("/register", function(req, res){
//    res.render("register"); 
// });

// //handle sign up logic
// router.post("/register", function(req, res){
//     var newUser = new User({username: req.body.username});
//     User.register(newUser, req.body.password, function(err, user){
//         if(err){
//             req.flash("error", err.message);
//             return res.render("register");
//         }
//         passport.authenticate("local")(req, res, function(){
//            req.flash("success", "Welcome " + user.username);
//            res.redirect("/"); 
//         });
//     });
// });

//show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

//handling login logic
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

// logout route
router.get("/logout", function(req, res){
   req.logout();
   req.flash("success", "Logged out");
   res.redirect("/");
});

// apps routes

router.get("/scatterplots", middleware.isLoggedIn, function(req, res){
    res.render("apps/scatterplots")
})

router.get("/t_minus_appcon", middleware.isLoggedIn, function(req, res){
    res.render("apps/t_minus_appcon")
})

router.get("/school_choice_tools", middleware.isLoggedIn, function(req, res){
    res.render("apps/school_choice_tools")  
})

router.get('/failure', (req,res) => {
    res.render("failure")
})

router.get('/success', (req,res) => {
    req.flash("success", "Data successfully updated from Podio");
    res.render('success')
})

module.exports = router;