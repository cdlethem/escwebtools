// all the middleare goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You do not have permissions to view this page. Contact DMA if you need additional permissions");
    res.redirect("/login");
}

middlewareObj.hasAdminPriv = (req,res,next) => {
    if(req.user.role === "admin") {
        return next();
    }
    req.flash("error", "You do not have permissions to view this page. Contact DMA if you need additional permissions");
    res.redirect("/srt")
}

middlewareObj.hasSrtPriv = (req,res,next) => {
    if(req.user.role == "admin") {
        return next();
    } else if(req.user.role == "srt") {
        return next();
    }
    req.flash("error", "You do not have permissions to view this page. Contact DMA if you need additional permissions " + req.user.role);
    res.redirect("/")
}

middlewareObj.hasPotPriv = (req,res,next) => {
    if(req.user.role === "admin" || req.user.role === "srt" || req.user.role === "pot") {
        return next();
    }
    req.flash("error", "You do not have permissions to view this page. Contact DMA if you need additional permissions");
    res.redirect("/srt")
}

module.exports = middlewareObj;