var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware")

router.get("/test", middleware.isLoggedIn, middleware.hasAdminPriv, function(req, res){
    res.send("Reached the admin page");
});

module.exports = router;