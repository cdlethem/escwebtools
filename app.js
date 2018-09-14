var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    User        = require("./models/user"),
    seedDB      = require("./seedUsers")
    
//requiring routes
var indexRoutes = require("./routes/index");
var podioRoutes = require("./routes/podio");
var adminRoutes = require("./routes/admin");
var srtRoutes = require("./routes/srt");
var potRoutes = require("./routes/pot");

mongoose.connect("mongodb://localhost/web_tools_db");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Porkchop Sandwiches. Oh my god get the f**k out of here. GI JOOOOOEEEE",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
seedDB();


app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/podio", podioRoutes);
app.use("/admin", adminRoutes);
app.use("/srt", srtRoutes);
app.use("/pot", potRoutes);

app.listen(3000, process.env.IP, function(){
   console.log("The server has started on port 3000");
});