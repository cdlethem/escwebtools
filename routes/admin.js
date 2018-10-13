var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware")

router.get("/portal_admin_dashboard", middleware.isLoggedIn, function(req, res){
    res.render("apps/portal_admin_dashboard")
});

router.get("/server_status", middleware.isLoggedIn, function(req, res){
    res.render("apps/server_status")
});

module.exports = router;