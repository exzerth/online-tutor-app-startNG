const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("../models/user");

module.exports = (req, res, next) => {
    User.findOne({role: req.body.role})
    .exec()
    .then(role => {
        if (role === "tutor"){
                const token = req.headers.authorization.split(" ")[1];
                console.log(token);
                const decoded = jwt.verify(token, "moregandhi");
                req.userData = decoded;
                next();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}

