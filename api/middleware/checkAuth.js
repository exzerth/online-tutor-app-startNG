const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token);
        const decoded = jwt.verify(token, "moregandhi");
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Auth Failed"
        });
    }
}

/*module.exports = function(req, res, next) {
    const user = new User ({
        role: req.body.role
    })
    const token = req.header("x-auth-header");
    if(!token) return res.status(401).json({
        message: "Auth Failed"
    });

    try {
        const decoded = jwt.verify(token, "moregandhi");
        if(user.role[decoded.role].find(function(url){
            return url==req.baseUrl
        }))
        {req.user=decoded
            next()
        } else return
        res.status(401).send("Access Denied: NO Permission")
    } catch (ex) {
        res.status(401).send("Invalid Token")
    }
}*/

